/* looping
*/


const str = 'i am a string';
for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}


/* rest
*/


// 3 types of string literals
const string1 = 'single quote';
const string2 = 'double quote';
const string3 = `back tick ${ string1 }`

// concatenate strings
const string4 = string1 + string2;

// first and last character, string 1 does not change as strings are immutable
const first = string1.slice(0, 1);
const last = string1.slice(( string1.length - 2, string1.length - 1 ));
const last_same = string1.slice(( string1.length - 1 ));
// console.log(first, last, last_same);

// convert the type from string to number
const number = parseInt('99');
//console.log(number, typeof number)

// ascii values for characters
const ascii = 'z'.charCodeAt(0);
console.log(ascii);