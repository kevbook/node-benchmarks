'use strict';

const bench = require('fastbench');
const lodash = require('lodash');
const dotProp = require('dot-prop');

function get (obj, pathArr, defaultVal) {
  const arr = typeof pathArr === 'string' ? pathArr.split('.') : [...pathArr];
  return g(obj, arr);

  function g (o, p) {
    const p2 = p.shift();
    return o[p2] !== undefined ? g(o[p2], p) : defaultVal;
  }
}

const OBJ = { a: { b: { c: 3 } } };

console.log('======== dot-prop ========');

bench([
  function lodashFn (done) {
    const res = lodash.get(OBJ, 'b.c');
    process.nextTick(done);
  },

  function dotPropFn (done) {
    const res = dotProp.get(OBJ, 'b.c');
    process.nextTick(done);
  },

  function getFn (done) {
    const res = get(OBJ, 'b.c');
    process.nextTick(done);
  }

], 1000000)();
