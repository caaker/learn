// use shorter names to keep typing to a minimal
// use a while loop for flexibility, don't use forEach in coding problems
// have paper and pen near by
const repo = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
const query = 'mouse';

const output = [
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad']
];

// must have at least two characters
// must not return more than 3 hints
// must be lowercase
function searchSuggestions(repo, query) {
  const matrix = [];

  // sort repo
  const sorted = repo.sort();
  // console.log(sorted);

  for(let i = 1; i < query.length; i++) {
    let sub = query.slice(0, i + 1);
    let j = 1;
    let count = 0;
    let arr = []
    while(j < repo.length && count < 3 ) {
      if(sub === repo[j].slice(0, i + 1)) {
        console.log('match', sub, repo[j].slice(0, i + 1));
        arr.push(repo[j]);
        count++
      }
      j++;
    }
    matrix.push(arr);
  }

  console.log(matrix);

  // return an array of arrays
  return matrix;
}
searchSuggestions(repo, query);