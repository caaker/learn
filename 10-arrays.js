/* looping
*/


const arr = [0, 1, 2, 3];
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
const arr_fixed = new Int16Array(1000);
for(let i = 0; i < arr_fixed.length; i++) {
  console.log(arr_fixed[i]);
}


/* cloning, slicing, inserting, deleting, assigning
*/


const clone0 = arr.slice(0);
const clone1 = [ ...arr ];

// slicing
const mid = Math.round((arr.length - 1) / 2);
const left = arr.slice(0, mid); // does not include mid
const right = arr.slice(mid);   // includes mid

// arrays are assign by reference not by value
let arr1 = [0, 1, 2, 3];
let arr2 = ['a', 'b', 'c'];
arr1 = arr2;
arr2.push('new_value');

// deleting
let res = arr.splice(0, 1); // removes 1 value at index 0 and returns it as an array
console.log(res);

// arr has been updated as well and no longer contains the value sliced,
// length has been updated as well
console.log(arr);


