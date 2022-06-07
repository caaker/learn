/* looping
*/

const string0 = 'i am a string0';
for(let i = 0; i < string0.length; i++) {
}

/* string literals
*/

const string1 = 'single quote';
const string2 = "double quote";
const string3 = `back tick ${ string1 }`

/* rest
*/

// concatenate strings
const string4 = string1 + string2;

// slicing
const first = string1.slice(0, 1);
const last = string1.slice(( string1.length - 1 ));

// type conversion
const number = parseInt('99');

// ascii values for characters
const ascii = 'z'.charCodeAt(0);
console.log(ascii);