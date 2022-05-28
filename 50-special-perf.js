import { performance } from 'perf_hooks';
const startTime = performance.now()
/* CODE - START
*/


// ~13
for(let i = 0; i < 10000000; i++) {
  i / 2;
}


/* CODE - END
*/
const endTime = performance.now()
console.log(endTime - startTime);  // .01 for nothing

// ~3.5
const arr = new Array(100000);
for(let i = 0; i < arr.length; i++) {
  arr[i] = 1;
}

// ~3.5
const arr_fixed = new Int16Array(100000);
for(let i = 0; i < arr_fixed.length; i++) {
  arr_fixed[i] = 1;
}

// ~9.5
// instead of simple array math, a hash uses a hash function to access an element at key
const hash = {};
for(let i = 0; i < 100000; i++) {
  hash[i] = 0;
}
for(let key in hash) {
  hash[key] = 1;
}


// ~13
for(let i = 0; i < 10000000; i++) {
  i >>> 1;
}

// ~13
for(let i = 0; i < 10000000; i++) {
  i / 2;
}

