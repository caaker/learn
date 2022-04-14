/*******************************************************************************
 * because this folder is configured in package.json as type: module,
   it is in strict mode.  we do not need 'use strict';
*******************************************************************************/


const isStrict = (() => this === undefined)();
console.log('isStrict: ', isStrict);


/*******************************************************************************
 * this points to undefined
*******************************************************************************/


console.log(this);


/*******************************************************************************
 * this points to undefined in all 3 of these cases  
*******************************************************************************/


const funcExpr = function(a) {
  console.log(this);
};
const arrowFunc = () => {
  console.log(this);
};
function func() {
  console.log(this);
}
funcExpr();
arrowFunc();
func();


/*******************************************************************************
 * bind, apply, and call all set this explicitly to obj
*******************************************************************************/


const obj = {test0: 'test0'};
function funcOut() {
  console.log(this);
}
let funcB = funcOut.bind(obj);
funcB();
funcOut.apply(obj);
funcOut.call(obj);


/*******************************************************************************
 * this points to test
*******************************************************************************/


const test = {
  test: 'Test Object',
  func: function() { 
    console.log(this);
  }
};
test.func();


/*******************************************************************************
 * this points to Person in both cases
*******************************************************************************/


class Person {
  constructor() {
    console.log(this);
    this.hello1();
  }
  hello1 = () => {
    console.log(this);
  }

}
const P1 = new Person();
