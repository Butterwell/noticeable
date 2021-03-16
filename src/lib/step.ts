// See https://research.tableau.com/sites/default/files/2014CIC_48_Stone_v3.pdf

const lAxis = { A: 10.16, B: 1.5 };
const aAxis = { A: 10.68, B: 3.08 };
const bAxis = { A: 10.7, B: 5.74 };

const p = 0.8; // Eighty percent of people
const s = 0.5; // 0.5 degree (size)

const l = p * (lAxis.A + lAxis.B / s);
const a = p * (aAxis.A + aAxis.B / s);
const b = p * (bAxis.A + bAxis.B / s);

/**
 * Noticeable color differences in Lab color space
 *
 * ### Example (es module)
 * ```js
 * import { step } from 'noticeable'
 * import { lab } from 'd3-color'
 *
 * const color = d3.lab("rgb(120, 90, 60)")
 * const lighter = d3.lab(color.l + step.l, color.a, color.b)
 * console.log(lighterColor.toString)
 * // => rgb()
 * ```
 */

export const step = {
  l,
  a,
  b,
};

export const whiter = +l;
export const blacker = -l;
export const redder = +a;
export const greener = -a;
export const yellower = +b;
export const bluer = -b;
