function whileSimple(test) {
  let i = 0;
  while(i++ < 3) {
    console.log('i: ', i);
  }
}
whileSimple();

function forLabel() {
  label: for(let i = 1; i <= 3; i++) {
    // continue label will come here
    for(let j = 1; j <= 3; j++) {
      // continue will come here
      if( j === 2) {
        // continue label
        continue;
        // break;
      }
      console.log('i: ', i, 'j: ', j);
    }
    // break will come here
    console.log('check');
  }
}
// forLabel();

// cases are in the same block
function caseSimple(test) {
  switch(test) {
    case '1':
      let foo1 = {};
    case '2':
      let foo2 = {};
  }
};

function ifSimple(val1, val2) {
  if(val1 > val2) {
    val2 = val1;
  }
  return val2;
}
//console.log(ifSimple(4,2));
