function reverseArray(arr) {
  const length = arr.length;
  for(let i = 0; i < length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[length - 1 - i]
    arr[length - 1 - i] = temp;
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
