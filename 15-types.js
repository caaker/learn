// 7 types
const number = 1;
const string = 'string';
const array = ['array'];
const hash = {hash: 'hash'};
const fun = function() {};
const nul = null;
const und = undefined;

// Note that only null and undefined will throw an error if you try to access a property on them.
number.prop;
string.prop;
array.prop;
hash.prop;
fun.prop;
// nul.prop;
// und.prop;

// Note that array and nul are broken and both reported as hash
// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof hash);
// console.log(typeof fun);
// console.log(typeof und);
// console.log(typeof array);
// console.log(typeof nul);

// we can replace the operator typeof with the function typeOf
// to fix the null and array issue
function typeOf(test) {
  let ret;
  if(Array.isArray(test)) {      // array fix
    ret = 'array';
  } else if (test === null) {    // null fix
    ret = 'null';
  } else {                       // number, string, hash, function, undefined work correctly
    ret = typeof test;
  }
  return ret;
}
console.log(typeOf(number));
console.log(typeOf(string));
console.log(typeOf(array));
console.log(typeOf(hash));
console.log(typeOf(fun));
console.log(typeOf(nul));
console.log(typeOf(und));
