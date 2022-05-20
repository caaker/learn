
var generate = function(n) {
  const matrix = [[1], [1, 1]];

  // base case : n = 1
  if(n === 1) {
    return [[1]];
  }

  // base case : n = 2
  if(n === 2) {
    return matrix;
  }

  // first iterative case : n = 3
  // be careful of off by one error here
  // n is number of rows (3), but i is 0 based (2)
  for(let i = 2; i < n; i++) {

    // add empty row
    matrix[i] = [];

    for(let j = 0; j <= i; j++) {

      // if first or last element set to 1
      if( j === 0 || j === i ) {
        matrix[i][j] = 1;

      // internal elements are simply adding the upper elements
      } else {
        matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j]
      }
    }
  }
  return matrix;

};