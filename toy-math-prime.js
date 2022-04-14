function prime(n) {

  // first prime is 2
  const primes = [2];

  // iterate all odd numbers checking for prime
  not_a_prime: for(let i = 3; i <= n; i += 2) {

    // beginning with 2 check for factors up to the square root of i
    for(let j = 2; j * j <= i; j++) {

      // if the odd number we are checking has a factor it is not a prime
      if(i % j === 0) {
        continue not_a_prime;
      }
    }
    primes.push(i);
  }
  return primes;
}

const res = prime(50);
console.log(res);

/*

Time Complexity
--------------------
Time complexity is O(n^1.5).  The outer loop is reduced by a constant of 1/2 not included in Big O
The inner loop is reduced by the square root of n.

*/
