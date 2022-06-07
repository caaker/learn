// equality, not allowed in google spec
const res1 = (1 == '1'); // evaluates to true
// console.log(res1);

// strict equality, specified by Google
const res2 = (1 === '1'); // evaluates to false
// console.log(res2);

const res3 = 1 + 4 * 4 / 4; // evaluates to 5
// console.log(res3);

// equality has precedence over logical operations, evaluates to true
console.log( false === true || true );

// use parentheses to evaluate logic first
console.log( false ===  ( true || true ) );

