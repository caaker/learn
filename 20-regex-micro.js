const test =      '(:\\d+)'
const regexp =    new RegExp(test, 'g');
let url =         'http://test.com:88'
const res =       regexp.exec(url);

console.log(res);
