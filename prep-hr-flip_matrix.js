function flippingMatrix(matrix, n) {
  let left = 0;
  let right = 0;
  for(let i = 0; i < n * 2; i++) {
    for(let j = 0; j < n * 2; j++) {
      if(j <= (n / 2)) {
        left += matrix[i][j];
      } else {
        right += matrix[i][j];
      }
    }
    console.log(left, right);
    left = 0;
    right = 0;
  }

  return getSum(matrix, n);
}

function getSum(matrix, n) {
  let sum = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

const test =  [
  [ 112, 42, 83, 119 ],
  [ 56, 125, 56, 49 ],
  [ 15, 78, 101, 43 ],
  [ 62, 98, 114, 108 ]
];

console.log(flippingMatrix(test, 2));

/*

Time Complexity
--------------------

Notes | Links
--------------------
Flip rows and columns of matrix ( 2n ) such that the inner matrix ( n ) has the largest values

*/
