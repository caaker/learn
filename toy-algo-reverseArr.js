function reverseArray(arr) {
  for(let index = 0; index < arr.length / 2; index++) {
    const temp = arr[index];
    arr[index] = arr[arr.length - index - 1];
    arr[arr.length - index - 1] = temp;
  }
  return arr;
}

console.log(reverseArray([0]));
console.log(reverseArray([0, 1]));
console.log(reverseArray([0, 1, 2]));
console.log(reverseArray([0, 1, 2, 3]));
console.log(reverseArray([0, 1, 2, 3, 4]));
/*

Time Complexity
--------------------
O(n)

*/
