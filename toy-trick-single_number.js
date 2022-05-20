function findSingle(arr) {
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}

// const test = [2, 2, 3, 4, 3];
// console.log(2 ^ 2 ^ 3 ^ 4 ^ 3)

console.log(findSingle([1, 1, 2, 4, 2, 3, 3]));

/*

Question
--------------------
Given an array of n numbers find the unique number with only one occurrence.  The rest have two occurrences.


Time Complexity
--------------------
O(n)


Notes | Links
--------------------
https://www.youtube.com/watch?app=desktop&v=eXl0HBm2RrA&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=58
https://leetcode.com/problems/single-number/

*/
