# SIMAV Vial · Landing (Astro)

Landing page de SIMAV Vial portada a Astro, sin dependencias de UI: HTML + CSS + un poco de
TypeScript en el navegador. Full responsive (móvil, tablet, desktop) y respeta
`prefers-reduced-motion`.

## Requisitos

- Node.js 18.20+ o 20+
- npm (o pnpm / yarn)

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (estático, listo para Vercel/Netlify/S3)
npm run preview  # sirve dist/
```

## Estructura

```
public/                      Assets estáticos (logos, memojis, video del hero)
src/
  layouts/Layout.astro       <head>, fuentes, metadatos, imports de CSS global
  pages/index.astro          Composición de la página
  components/
    PageBackground.astro     Fondo fijo: retícula en perspectiva, banda de escaneo, viñeta
    Hero.astro               Nav (con menú móvil) + hero con video en ping-pong y retícula
    Marquee.astro            Franja de mensajes en loop + reloj en vivo
    DashboardPanel.astro     Mockup del tablero operativo
    Prioritization.astro     Sección "Decide qué arreglar primero"
    Features.astro           Carrusel automático de funcionalidades (círculos + tooltip)
    Pricing.astro            Selector de plan + tarjeta de detalle
    Team.astro               Órbita de memojis → convergencia → tarjetas de perfil
    FinalCta.astro           CTA de cierre
    SiteFooter.astro         Pie
  data/
    features.ts              Las 6 funcionalidades (label, descripción, color, icono)
    plans.ts                 Modelos de vinculación y precios
    team.ts                  Equipo fundador + mensajes del marquee
    markers.ts               Marcadores deterministas del mapa del dashboard
  styles/
    global.css               Reset, keyframes y breakpoints globales
    states.css               Estados :hover/:focus/:active de las secciones portadas
```

## Notas de implementación

- **Estilos.** Las secciones portadas tal cual (dashboard, priorización, CTA, footer) conservan
  sus estilos inline; sus estados de interacción viven en `src/styles/states.css` con `!important`
  porque deben ganarle a esos inline. Las secciones reescritas (hero, marquee, funcionalidades,
  precios, equipo) usan `<style>` con scope de Astro, sin `!important`.
- **Interactividad.** Todo es JS del navegador sin framework: `<script>` en cada componente.
  No hay islas de React/Vue, así que el JS enviado es mínimo.
- **Video del hero.** `public/hero.mp4` se reproduce adelante y en reversa (ping-pong). Conviene
  comprimirlo antes de producción (H.264, ~1080p, 2–4 Mbps) y añadir un `poster` para que el
  primer frame aparezca de inmediato.
- **Responsive.** Puntos de quiebre principales: 1080px (KPIs más densos), 900px (menú móvil,
  sidebar del dashboard oculta, precios en una columna), 720px (reloj oculto), 560px (radio de la
  órbita reducido), 520px (KPIs en 2 columnas).
- **Accesibilidad.** Los círculos de funcionalidades son `<button>` con `aria-label`; los
  duplicados del loop llevan `aria-hidden` y `tabindex="-1"`. El selector de planes es un
  `radiogroup` navegable con flechas. Con `prefers-reduced-motion` se desactivan autoscroll,
  ping-pong del video y la animación de órbita.

## Pendiente sugerido

- Conectar el formulario/CTA de contacto a un endpoint real (hoy apunta a `#contacto`).
- Sustituir los datos de demostración del dashboard por datos reales o un API.
- Añadir `poster` al video y una versión WebM para reducir peso.
