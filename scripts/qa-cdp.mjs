const endpoint = "http://127.0.0.1:9222";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function findPage() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const pages = await fetch(`${endpoint}/json/list`).then((response) => response.json());
      const page = pages.find((item) => item.type === "page" && item.url.includes("localhost:4173"));
      if (page) return page;
    } catch {}
    await sleep(250);
  }
  throw new Error("Edge CDP page was not available.");
}

const page = await findPage();
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 0;
const pending = new Map();
const consoleErrors = [];

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") {
    consoleErrors.push(message.params.exceptionDetails.text);
  }
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
    consoleErrors.push(message.params.entry.text);
  }
});

function send(method, params = {}) {
  const id = ++nextId;
  const promise = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  socket.send(JSON.stringify({ id, method, params }));
  return promise;
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await send("Runtime.enable");
await send("Log.enable");
await sleep(500);

const initial = await evaluate(`({
  title: document.title,
  width: window.innerWidth,
  viewportHeight: window.innerHeight,
  pageHeight: document.documentElement.scrollHeight,
  scrollWidth: document.documentElement.scrollWidth,
  imagesLoaded: [...document.images].every((image) => image.complete && image.naturalWidth > 0),
  anchors: [...document.querySelectorAll('nav a')].map((anchor) => anchor.getAttribute('href'))
})`);

await evaluate(`document.querySelector('.hero .button-primary').click()`);
await sleep(100);
const modalOpened = await evaluate(`Boolean(document.querySelector('[role="dialog"]')) && document.body.classList.contains('modal-open')`);

await evaluate(`(() => {
  const values = ['Prueba SIMAV', 'piloto@simav.ai', 'Ciudad piloto'];
  document.querySelectorAll('.pilot-modal input').forEach((input, index) => {
    input.value = values[index];
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
  document.querySelector('.pilot-modal form').requestSubmit();
})()`);
await sleep(100);
const successShown = await evaluate(`Boolean(document.querySelector('.success-state'))`);
await evaluate(`document.querySelector('.modal-close').click()`);
await sleep(100);
const modalClosed = await evaluate(`document.querySelector('#pilot-modal').hidden && !document.body.classList.contains('modal-open')`);

await evaluate(`document.querySelector('a[href="#producto"]').click()`);
await sleep(100);
const navigationWorked = await evaluate(`location.hash === '#producto'`);

console.log(JSON.stringify({
  ...initial,
  modalOpened,
  successShown,
  modalClosed,
  navigationWorked,
  consoleErrors,
}, null, 2));

await send("Browser.close").catch(() => {});
socket.close();
