const grid = [
  'mpxz',
  'abcd',
  'wlmf'
];


function gridChallenge(grid, n) {
  for(let i = 0; i < n; i++) {
    grid[i] = grid[i].split('').sort();
    console.log(grid);
    for(let j = 0; j < n - 1; j++) {
      if(grid[j][i] > grid[j + 1][i]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

console.log(gridChallenge(grid, 3));
