'use strict';

const bench = require('fastbench');

const ARR = ['a', 'b', 'c', 'd'];

console.log('======== array-to-object ========');

bench([
  function objectAssign (done) {
    const res = Object.assign({}, ARR);
    process.nextTick(done);
  },

  function objectSpread (done) {
    const res = ({ ...ARR });
    process.nextTick(done);
  }
], 1000000)();
