export type Marker = {
  key: string;
  style: Record<string, string>;
  dotStyle: Record<string, string>;
};

/** Marcadores deterministas del mapa del dashboard (misma semilla que el diseño original). */
export function roadMarkers(): Marker[] {
  let s = 20260908;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return (s >>> 8) / 8388608;
  };
  const sev: [string, string, number][] = [
    ['#F87171', 'rgba(248,113,113,0.22)', 16],
    ['#F5A524', 'rgba(245,165,36,0.20)', 30],
    ['#2DD4A7', 'rgba(45,212,167,0.18)', 22]
  ];
  const out: Marker[] = [];
  let i = 0;
  sev.forEach(([color, halo, count], si) => {
    for (let k = 0; k < count; k++) {
      const t = rnd();
      const along = rnd();
      const near = si === 0 ? 0.55 : 0.2;
      const cx = along * 100;
      const cy = 96 - Math.pow(along, 0.72) * 78 + (rnd() - 0.5) * (1 - near) * 70;
      out.push({
        key: 'm' + i++,
        style: {
          position: 'absolute',
          left: Math.max(2, Math.min(97, cx + (t - 0.5) * 12)) + '%',
          top: Math.max(3, Math.min(95, cy)) + '%',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: halo,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(-50%,-50%)'
        },
        dotStyle: { width: '7px', height: '7px', borderRadius: '50%', background: color }
      });
    }
  });
  return out;
}
