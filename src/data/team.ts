export type Member = {
  img: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  angle: number;
  delay: string;
};

export const TEAM: Member[] = [
  {
    img: '/memoji-linda.png',
    name: 'Linda Sofía Moreno',
    role: 'CTO / Backend & Infrastructure',
    bio: 'Diseña la arquitectura que sostiene el procesamiento de video y el pipeline de datos: ingesta desde vehículos, colas de inferencia y APIs para las entidades.',
    tags: ['Python', 'FastAPI', 'PostGIS', 'AWS', 'Docker'],
    angle: -90,
    delay: '0s'
  },
  {
    img: '/memoji-julian.png',
    name: 'Julián Rubiano',
    role: 'AI & Data Lead',
    bio: 'Lidera los modelos de detección y clasificación de daños viales, el etiquetado y las métricas de severidad que alimentan la priorización.',
    tags: ['Computer Vision', 'PyTorch', 'YOLO', 'MLOps', 'Geoanalítica'],
    angle: 30,
    delay: '0.6s'
  },
  {
    img: '/memoji-sharith.png',
    name: 'Sharith Giselle Santos',
    role: 'Product & Business Lead',
    bio: 'Traduce la operación de las secretarías de infraestructura en producto: flujos de priorización, reportes de interventoría y modelos de contratación pública.',
    tags: ['Discovery', 'Sector público', 'UX Research', 'Pricing', 'Alianzas'],
    angle: 150,
    delay: '1.2s'
  }
];

export const MARQUEE: { dot: string; text: string }[] = [
  { dot: '#00D2FF', text: 'IA PROPIA ENTRENADA CON VÍAS COLOMBIANAS' },
  { dot: '#3D81E3', text: '94% DE PRECISIÓN EN DETECCIÓN' },
  { dot: 'rgba(255,255,255,0.35)', text: 'SIN HARDWARE NUEVO: USA VEHÍCULOS EN CIRCULACIÓN' },
  { dot: '#00D2FF', text: 'INVENTARIO VIAL ACTUALIZADO A DIARIO' },
  { dot: '#3D81E3', text: 'BACHES · GRIETAS · HUNDIMIENTOS · SEÑALIZACIÓN' },
  { dot: 'rgba(255,255,255,0.35)', text: 'PRIORIZACIÓN AUTOMÁTICA POR SEVERIDAD' },
  { dot: '#00D2FF', text: 'COBERTURA URBANA Y RURAL' },
  { dot: '#3D81E3', text: 'EXPORTACIÓN A SIG, EXCEL Y API' },
  { dot: 'rgba(255,255,255,0.35)', text: 'EVIDENCIA FECHADA PARA INTERVENTORÍA' },
  { dot: '#00D2FF', text: 'DATOS GEORREFERENCIADOS CON COORDENADAS GPS' }
];
