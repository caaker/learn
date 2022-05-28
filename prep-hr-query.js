const hold = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
const query = 'mouse';

const output = [
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad']
];

// must have at least two characters
// must not return more than 3 hints
function searchSuggestions(hold, query) {
  const matrix = [];
  const sorted = hold.sort();
  for(let i = 1; i < query.length; i++) {

    // sub will hold - mo, mou, mous, mouse
    let sub = query.slice(0, i + 1);
    let j = 1;
    let hints = 0;
    let arr = []
    while(j < hold.length && hints < 3 ) {
      if(sub === hold[j].slice(0, i + 1)) {
        arr.push(hold[j]);
        hints++
      }
      j++;
    }
    matrix.push(arr);
  }

  // return an array of arrays
  return matrix;
}
console.log(searchSuggestions(hold, query));


/*

Time Complexity
--------------------

Notes | Links
--------------------
  - this problem suggest words as the user types, i.e. word completion

*/



























/*

Time Complexity
--------------------
  - O(n)

Notes | Links
--------------------
Takes and array of strings representing user to user financial transactions and finds
users that exceed a number of transactions limit.

*/
