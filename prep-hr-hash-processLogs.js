const hash = {};

function init(person1, person2) {
  if(!hash[person1]) {
    hash[person1] = 0;
  }
  if(!hash[person2]) {
    hash[person2] = 0;
  }
}

// array of strings
function processLogs(logs, threshold) {
  for(let i = 0; i < logs.length; i++) {
    let arr = logs[i].split(' ');
    init(arr[0], arr[1]);
    if(arr[0] !== arr[1]) {
      hash[arr[0]] += 1;
      hash[arr[1]] += 1;
    } else {
      hash[arr[0]] += 1;
    }
  }
  let ret = [];

  Object.keys(hash).forEach((key, i) => {
    const val = hash[key];
    if(val >= threshold) {
      ret.push(key);
    }
  });

  console.log(hash);
  return ret.sort();
}

let arr = [
  '1 2 50',
  '1 7 70',
  '1 3 20',
  '2 2 17',
  '0 0 4',
  '0 -1 4',
  '-1 0 4'
];

console.log(processLogs(arr, 2));

/*

Time Complexity
--------------------
  - O(n)

Notes | Links
--------------------

*/
