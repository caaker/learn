// set object properties
const ob_keys = {};
const keyc = 'c';
ob_keys.a = 'i am property a';
ob_keys['b'] ='i am property b';
ob_keys[keyc] = 'i am property c';
console.log('ob_keys: ', ob_keys);

// objects are assigned by reference
const ob10 = {a:1, b:2, c:{aa: 1, bb: 2, cc:3}};
const ob_ref = ob10;
ob10.a = 100;
console.log('ob_ref: ', ob_ref);

// keys are assigned by reference
const ob_keys_ref = {a:1, b:2, c:{aa: 1, bb: 2, cc:3}};
const ob2 = {a:4, b:5, c:6};
ob2.c = ob_keys_ref.c;
ob2.c.aa = 100;
console.log('ob_keys_ref: ', ob_keys_ref);

// looping with forEach using Object.keys
const out1 = [];
const ob_foreach = {a:7, b:8, c:9};
Object.keys(ob_foreach).forEach((key, i) => {
  const val = ob_foreach[key];
  out1.push(val);
});
console.log('ob_foreach', ' ', out1);

// looping with for-in and hasOwnProperty
const out10 = [];
const ob4 = {a:10, b:11, c:12};
for(let key in ob4) {
  if(ob4.hasOwnProperty(key)) {
    const val = ob4[key];
    out10.push(val);
  }
}
console.log('out10', ' ', out10);


const users = new Map();
users.set(1, 'billy');
users.set(2, 'bobby');

console.log(Array.isArray(users.keys()))
// console.log(users.keys().toArray());


