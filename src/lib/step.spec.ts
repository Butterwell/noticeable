import test from 'ava';
import * as d3 from 'd3-color';

import { step } from './step';

test('max lab.l', (t) => {
  const lab = d3.lab('white');
  t.is(lab.l, 100);
});

test('white', (t) => {
  const lab = d3.lab('white');
  const labMod = d3.lab(lab.l - step.l, lab.a, lab.b);
  t.is(labMod.toString(), 'rgb(225, 225, 225)');
});

test('black', (t) => {
  const lab = d3.lab('black');
  const labMod = d3.lab(lab.l + step.l, lab.a, lab.b);
  t.is(labMod.toString(), 'rgb(29, 29, 29)');
});

test('grey', (t) => {
  const lab = d3.lab('grey');
  const lighter = d3.lab(lab.l + step.l, lab.a, lab.b);
  t.is(lighter.toString(), 'rgb(155, 155, 155)');
  const darker = d3.lab(lab.l - step.l, lab.a, lab.b);
  t.is(darker.toString(), 'rgb(102, 102, 102)');
});

// test('reddish', (t) => {
//   const lab = d3.lab('rgb(120, 90, 60)');
//   const lighter = d3.lab(lab.l + step.l, lab.a, lab.b);
//   t.is(lighter.toString(), 'rgb()');
//   const darker = d3.lab(lab.l - step.l, lab.a, lab.b);
//   t.is(darker.toString(), 'rgb()');
// });
