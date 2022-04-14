const n = 5;
const res = factorialR(n);
console.log('Factorial value for ' + n + ' is ' + res);

// Iterative
// linear - O(n)
function factorial(n) {
  if(n === 0 || n === 1 ) {
    return 1;
  }
  let value = n;
  while(n-- >= 2) {
    value = value * n;
  }
  return value;
}

// Recursive
// linear - O(n)
// essentially behaves as a while loop
// is there additional overhead for a function?
function factorialR(n) {
  if( n === 0 || n === 1 ) {
    return 1;
  } else {
    return n * factorialR(n - 1);
  }
}


/*

Notes
--------------------
Factorial is defined recursively as fact(n) = n * fact(n - 1) and follows this pattern:
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120

Links
--------------------
https://en.wikipedia.org/wiki/Factorial

*/
