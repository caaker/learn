/*
    [*] let and const have block scope
    [*] var has function scope and is disallowed in the google style guide all together
*/

const cc = 'let-cc';
function runVariables() {
  const aa = 'const-aa';
  const bb = 'let-bb';

  // make a block scope
  if(true) {
    const a = 'const-a';
    let b = 'let-b';
    var c = 'var-c';
    console.log(aa);
    console.log(bb);
    console.log(cc);
  }
  // console.log(a); // error, outside of block
  // console.log(b); // error, outside of block
  console.log(c);
}
runVariables();
// console.log(c); // error, outside of function