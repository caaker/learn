/*
    [*]  https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

function isTruthy(test) {
  if( test ) {
    return true;
  } else {
    return false;
  }
}

function isTruthy1(test) {
  return !!test;
}

// faslsy values
console.log('Falsy', '\n');
console.log(isTruthy1(null));
console.log(isTruthy1(undefined));
console.log(isTruthy1(false));
console.log(isTruthy1(0));
console.log(isTruthy1(-0));
console.log(isTruthy1(NaN));
console.log(isTruthy1(0n));
console.log(isTruthy1(''));
console.log(isTruthy1(''));
console.log(isTruthy1(``));

// truthy values
console.log('\n', 'Truthy');
console.log(isTruthy1(' '));
console.log(isTruthy1([]));
console.log(isTruthy1({}));
