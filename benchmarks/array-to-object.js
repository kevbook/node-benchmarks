'use strict';

const bench = require('fastbench');
console.log('======== array-to-object ========');

const ARR = ['a', 'b', 'c', 'd'];

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
