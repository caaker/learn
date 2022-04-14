const num = 1;
const str = 'str';
const arr = ['arr'];
const obj = {obj: 'obj'};
const fun = function() {};
const nul = null;
const und = undefined;

// Note that only null and undefined will throw an error if you try to access a property on them.
num.prop;
str.prop;
arr.prop;
obj.prop;
fun.prop;
// nul.prop;
// und.prop;

// Note that arr and nul are broken and both reported as objects
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof obj);
// console.log(typeof fun);
// console.log(typeof und);
// console.log(typeof arr);
// console.log(typeof nul);

// we can replace the operator typeof with the function typeOf
// to fix the null and array issue
function typeOf(test) {
  let ret;
  if(Array.isArray(test)) {      // array fix
    ret = 'array';
  } else if (test === null) {    // null fix
    ret = 'null';
  } else {                       // number, string, object, function, undefined work correctly
    ret = typeof test;
  }

  // capitalize ? to differentiate between type and value?
  return ret;
}
console.log(typeOf(num));
console.log(typeOf(str));
console.log(typeOf(arr));
console.log(typeOf(obj));
console.log(typeOf(fun));
console.log(typeOf(nul));
console.log(typeOf(und));
