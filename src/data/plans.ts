export type Price = { kicker: string; amount: string; unit: string; note: string };
export type Range = { km: string; val: string };
export type Plan = {
  tag: string;
  title: string;
  short: string;
  sub: string;
  cta: string;
  prices: Price[];
  ranges?: Range[];
  features: string[];
};

export const PLANS: Plan[] = [
  {
    tag: 'PILOTO',
    title: 'Un corredor, 90 días',
    short: 'Prueba controlada de hasta 20 km',
    sub: 'Prueba controlada sobre un corredor priorizado, con informe técnico al cierre.',
    cta: 'Solicitar cotización',
    prices: [{ kicker: 'IMPLEMENTACIÓN + PILOTO', amount: '$25.000.000', unit: 'COP', note: 'pago único · 90 días' }],
    features: [
      'Hasta 20 km monitoreados en un corredor',
      'Aplicación móvil de captura de imágenes',
      'Detección y clasificación de daños con IA',
      'Panel de detección web',
      'Informe técnico final del piloto',
      'Capacitación de 1 equipo'
    ]
  },
  {
    tag: 'MUNICIPAL',
    title: 'Toda la malla vial urbana',
    short: 'Escalonado por kilómetros de red',
    sub: 'Operación continua sobre la red urbana, con precio escalonado según kilómetros.',
    cta: 'Solicitar cotización',
    prices: [
      {
        kicker: 'SUSCRIPCIÓN ANUAL + IMPLEMENTACIÓN',
        amount: 'Desde $80.000.000',
        unit: 'COP / año  +  $60.000.000 implementación',
        note: 'según kilómetros de red vial'
      }
    ],
    ranges: [
      { km: 'Hasta 100 km', val: 'desde $60M implementación · $80M anual' },
      { km: '101 a 300 km', val: 'desde $100M implementación · $150M anual' },
      { km: '301 a 700 km', val: 'desde $180M implementación · $280M anual' }
    ],
    features: [
      'Kilómetros monitoreados sin límite dentro de tu rango',
      'Priorización por severidad',
      'Histórico antes/después',
      'Exportación a reportes PDF y Excel',
      'Actualizaciones y mantenimiento incluidos',
      'Soporte técnico prioritario'
    ]
  },
  {
    tag: 'INSTITUCIONAL',
    title: 'Departamental o multi-entidad',
    short: 'Redes sobre 1.500 km o multi-municipio',
    sub: 'Alcance departamental o multi-municipio, con integración a los sistemas de la entidad.',
    cta: 'Hablar con un asesor',
    prices: [{ kicker: 'IMPLEMENTACIÓN Y SUSCRIPCIÓN', amount: 'Cotización personalizada', unit: '', note: 'redes superiores a 1.500 km o multi-municipio' }],
    features: [
      'Múltiples municipios y corredores, o redes superiores a 1.500 km',
      'API e integración con tu SIG propio',
      'Modelos ajustados al inventario vial local',
      'Acuerdos de nivel de servicio'
    ]
  }
];

export const DEFAULT_PLAN = 1;
