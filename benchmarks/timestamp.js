'use strict';

const bench = require('fastbench');

console.log('======== timestamp ========');

bench([
  function dateNow (done) {
    const res = new Date(Date.now()).toISOString();
    process.nextTick(done);
  },

  function newDate (done) {
    const res = new Date().toISOString();
    process.nextTick(done);
  }

], 1000000)();
