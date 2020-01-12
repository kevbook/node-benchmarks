'use strict';

const bench = require('fastbench');
console.log('======== string-concat ========');

const STR1 = 'The quick brown fox jumps over the lazy dog. A cat is walking on the street.';
const STR2 = 'Welcome to the jungle.';

bench([
  function simpleConcat (done) {
    const res = STR1 + ' ' + STR2 + ' ' + STR1;
    process.nextTick(done);
  },

  function arrayJoin (done) {
    const res = [STR1, ' ', STR2, ' ', STR1].join('');
    process.nextTick(done);
  },

  function templateConcat (done) {
    const res = `${STR1} ${STR2} ${STR1}`;
    process.nextTick(done);
  }
], 10000000)();
