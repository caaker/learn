// function definition
function funcDef(a) {
  return a;
};

// function expression
const funcExpr = function(a) {
  return a;
};

// arrow function expression
const funcArrow = (a) => {
  return a;
};

// reduced arrow function expression will return argument a
const funcArrowReduced = a => a;

// functions have arguments built in
function funcArguments() {
  return arguments;
}

// functions have this built in
function funcThis() {
  return 'title: ' + this.process.title + '\n' + 'version: ' + this.process.version;
}

// chained arrow functions
const funcChained = moo => foo => moo + foo;
const func2 = funcChained('moo');

// functions can have added properties
function funcProp() {
}
funcProp.arg0 = 'arg0';
