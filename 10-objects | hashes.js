/* looping
*/
const hash = {a:10, b:11, c:12};
Object.keys(hash).forEach((key, i) => {
});

for(let key in hash) {
  if(hash.hasOwnProperty(key)) {
  }
}

/* isEmpty
*/
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/* setting
*/
const hash1 = {};
const keyc = 'c';
hash1.a = 'prop a';
hash1['b'] ='prop b';
hash1[keyc] = 'props c';

/* assignment
*/
const hash2 = {a:1, b:2, c:{aa: 1, bb: 2, cc:3}};
const ref = hash2;
hash2.a = 100;
// console.log('ref: ', ref);


/* Map()
*/
const users = new Map();
users.set(1, 'billy');
users.set(2, 'bobby');
// console.log(users.get(1));
