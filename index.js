/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return 'UP2277697';
}

function fn() {
  return 'Adam';
}

function sn() {
  return 'Morris';
}

function add(a, b ) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  //if (typeof obj.data === 'object' && obj.data !== null) {
  //  obj.data.checked = true;
  //}
  if (obj.data) {
    checkObject(obj.data);
  }
}


function arraySet(arr, i, n) {
  if (arr[i] !== null && i < arr.length && Number.isInteger(i)) {
    arr[i] = n;
  }
}

function addAll(arr) {
  // let total = 0
  // for (const numb of arr) {
  //   total += numb;
  // }
  // return total;
  return arr.reduce((sum, n) => sum + n, 0);
}

function larger(a, b) {
  // if (a > b) {
  //   return a;
  // } else {
  //   return b;
  // }
  return a > b ? a : b;
}


function largest(arr) {
  //   let max = arr[0];
  // for (let numb of arr) {
  //   if (numb > max) {
  //     max = numb;
  //   }
  // }
  // if (max === undefined) {
  //   return null;
  // } else {
  //   return max;
  // }
   return arr.length === 0 ? null : Math.max(...arr);
}

function compareAttempt(a, b) {

}
function compare(a, b) {
    // let ident = true;

  // if (a.length !== b.length) {
  //   return false;
  // }

  // for (let i = 0; i<a.length; ++i) {
  //   if (a[i] !== b[i]) {
  //     ident = false;
  //   }
  // }

  // return ident;
  // return a.length === b.length && a.every((val, i) => val === b[i]);
  return a.length === b.length && JSON.stringify(a) === JSON.stringify(b);
}


function addToAll(arr, n) {
  // for (let i = 0; i < arr.length; i++){
  //   arr[i] += n;
  // }
  // return arr;
  arr.forEach((_, i) => arr[i] += n);
  return arr;
}

let remembered;
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  // const arr = [];
  // for (let i = 1; i<=n; i++) {
  //   arr.push(i);
  // }
  // return arr;
  return Array.from({length: n}, (_, index) => index + 1);
}

function addAllOpt(arr) {
  // if (arr.length == 0 || !Array.isArray(arr)) {return 0;}
  // let sum = 0;
  // for (let i = 0; i<arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;
  if (!arr || !arr.length) return 0;
  return addAll(arr);
}

function divisors(arr, div) {
  return arr.filter((num) => !(num % div));
}

function multiples(n, m) {
  return Array.from({length:n}, (_, index) => (index + 1) * m);
}