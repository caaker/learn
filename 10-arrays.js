/* looping
*/

const arr = [0, 1, 2, 3];
for(let i = 0; i < arr.length; i++) {
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
const arr_fixed = new Int16Array(1000);
for(let i = 0; i < arr_fixed.length; i++) {
}

/* cloning
*/

const clone0 = arr.slice(0);
const clone1 = [ ...arr ];

/* slicing
*/

const mid = Math.round((arr.length - 1) / 2);
const left = arr.slice(0, mid); // does not include mid
const right = arr.slice(mid);   // includes mid

/* splicing
*/

const splice1 = [0, 1, 2, 3];
const splice2 = [0, 1, 2, 3];
let res;

// inserting - inserts 'a' at 2, and removes 0 values
res = splice1.splice( 2, 0, 'a' );
console.log(splice1, res);

// inserting - inserts 'b' at 2 and removes index 2
res = splice2.splice( 2, 1, 'b' );
console.log(splice2, res);
