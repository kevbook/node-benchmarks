'use strict';

const bench = require('fastbench');

console.log('======== object-create ========');

bench([
  function simpleObject (done) {
    const res = {};
    res.a = 1;
    process.nextTick(done);
  },

  function objectCreate (done) {
    const res = Object.create(null);
    res.a = 1;
    process.nextTick(done);
  }
], 10000000)();
