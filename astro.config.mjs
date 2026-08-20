import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  outDir: "./dist/client",
  server: { host: true },
  integrations: [icon()],
});
