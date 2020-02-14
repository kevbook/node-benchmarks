'use strict';

const bench = require('fastbench');

const OBJ1 = { a: 1, b: 2 };
const OBJ2 = { b: 1, c: 1 };

console.log('======== object-assign ========');

bench([
  function objectAssign (done) {
    const res = Object.assign({}, OBJ1, OBJ2);
    process.nextTick(done);
  },

  function objectSpread (done) {
    const res = ({ ...OBJ1, ...OBJ2 });
    process.nextTick(done);
  }
], 10000000)();
