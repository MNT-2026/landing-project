export type Feature = {
  id: string;
  label: string;
  desc: string;
  rgb: string;
  ink: string;
  anim: string;
  icon: string;
};

const ICONS: Record<string, string> = {
  det: '<path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8"/><path d="M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8"/><path d="M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16"/><path d="M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16"/><circle cx="12" cy="12" r="3.2"/>',
  cls: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  geo: '<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  ana: '<path d="M4 19V5"/><path d="M4 19h16"/><polyline points="7,15 11,11 14,13 19,7"/><circle cx="19" cy="7" r="1.6"/>',
  his: '<path d="M3.2 12a8.8 8.8 0 1 0 2.6-6.2"/><polyline points="3,4 3,8.4 7.4,8.4"/><path d="M12 7.6V12l3 1.8"/>',
  ale: '<path d="M12 3l9 16H3z"/><path d="M12 9v5"/><path d="M12 17h.01"/>'
};

export const FEATURES: Feature[] = [
  { id: 'det', label: 'Detección de daños', desc: 'La IA identifica automáticamente baches, grietas y otros daños durante cada recorrido.', rgb: '0,210,255', ink: '#7FE6FF', anim: 'pulseGlow 3s ease-in-out infinite', icon: ICONS.det },
  { id: 'cls', label: 'Clasificación inteligente', desc: 'Clasifica cada deterioro según su tipo y nivel de severidad.', rgb: '61,129,227', ink: '#8FC1FF', anim: 'floatY 5s ease-in-out 0.3s infinite', icon: ICONS.cls },
  { id: 'geo', label: 'Geolocalización', desc: 'Cada daño queda ubicado geográficamente para saber exactamente dónde intervenir.', rgb: '0,210,255', ink: '#7FE6FF', anim: 'floatY 5s ease-in-out 0.6s infinite', icon: ICONS.geo },
  { id: 'ana', label: 'Análisis y predicción', desc: 'Convierte los datos de los recorridos en información útil para anticipar problemas.', rgb: '255,150,80', ink: '#FFC199', anim: 'floatY 5s ease-in-out 0.9s infinite', icon: ICONS.ana },
  { id: 'his', label: 'Seguimiento histórico', desc: 'Compara el estado de las vías a lo largo del tiempo y permite medir el avance de las intervenciones.', rgb: '61,129,227', ink: '#8FC1FF', anim: 'floatY 5s ease-in-out 1.2s infinite', icon: ICONS.his },
  { id: 'ale', label: 'Alertas de severidad', desc: 'Los daños críticos generan alertas para priorizar rápidamente las zonas que requieren atención.', rgb: '248,113,113', ink: '#FCA5A5', anim: 'pulseGlow 3s ease-in-out 0.6s infinite', icon: ICONS.ale }
];
