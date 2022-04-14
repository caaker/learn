// no differentiation
console.log(true);
console.log('true');

// no differentiation
console.log('123');
console.log(123);

// all differentiated
console.log(function() {
  let a = 1;
});
console.log(function Foo() {
  let a = 1;
});
console.log(class {});
console.log(class Foo {});


function logC() {
  console.log(arguments);
}
logC('test1', 'test2')
