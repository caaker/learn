// equality
const res1 = (1 == '1'); // evaluates to true
// console.log(res1);

// strict equality, specified by Google
const res2 = (1 === '1'); // evaluates to false
// console.log(res2);

const res3 = 1 + 4 * 4 / 4; // evaluates to 5
// console.log(res3);

// equality has precedence over boolean logic, parentheses are required
const res4 = ((true || false) === (1 || 2));
console.log(res4);
