'use strict';

const bench = require('fastbench');
const fSStringify = require('fast-safe-stringify');
const fJSStringify = require('fast-json-stable-stringify');

const OBJ = { a: 'a', b: 'b', c: { c: 'c' } };

console.log('======== json-stringify ========');

bench([
  function fastSafeStringify (done) {
    const res = fSStringify(OBJ);
    process.nextTick(done);
  },

  function fastJsonStableStringify (done) {
    const res = fJSStringify(OBJ);
    process.nextTick(done);
  },

  function JSONStringify (done) {
    const res = JSON.stringify(OBJ);
    process.nextTick(done);
  }
], 1000000)();
