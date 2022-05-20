import { performance } from 'perf_hooks';

/*  CHECKLIST
    - Remember to set spacing to 2
    - Remember to check the debug output before reading the question
    - Remember to determine if the input is the actual input to your method or if you need to add arguments
*/

// test type
function typeOf(test) {
  let ret;
  if(Array.isArray(test)) {      // array fix
    ret = 'array';
  } else if (test === null) {    // null fix
    ret = 'null';
  } else {                       // number, string, object, function, undefined work correctly
    ret = typeof test;
  }
  return ret;
}

console.log(test, typeOf(test));
