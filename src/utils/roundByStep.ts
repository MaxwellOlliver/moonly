export function roundByStep(n: number, s: number): number {
  return Math.round(n / s) * s;
}

roundByStep(46, 5); // 50
