// looping with for
const arr4 = [0, 1, 2, 3];
let output = [];
for(let i = 0; i < arr4.length; i++) {
  output.push(i);
}

// looping with for / of
let arr5 = [10, 20, 30];
const output1 = [];
for (let value of arr5) {
  output1.push(value);
}

// cloning
const arr = [0, 1, 2, 3];
const clone0 = arr.slice(0);
const clone1 = [ ...arr ];
arr.push(4);

// slicing
const mid = Math.round((arr.length - 1) / 2);
const left = arr.slice(0, mid); // does not include mid
const right = arr.slice(mid);   // includes mid

// inserting and deleting
const arr_dynamic = [0, 1, 2, 3, 4];
let res = arr_dynamic.splice(0, 1); // removes 1 value at index 0 and returns it as an array

// arrays are assign by reference not by value
let arr1 = [0, 1, 2, 3];
let arr2 = ['a', 'b', 'c'];
arr1 = arr2;
arr2.push('new_value');
