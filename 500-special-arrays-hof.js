// reducing
let array1 = [1, 2, 3, 4];
const initial = 0;
const output1 = array1.reduce((prev, cur, ind, src)=>{
  // console.log(prev, cur, ind, src);
  return prev + cur;
}, initial);
console.log('Reducing: ', output1);

// looping w/ forEach
const array2 = [0, 1, 2, 3, 4];
const output2 = [];
array2.forEach((val, i)=>{
  output2.push(val);
});
console.log('Looping: ', output2);

// mapping
const array3 = [0, 1, 2, 3, 4];
const output3 = array3.map((val)=>{
  return val * 2;
});
console.log('Mapping: ', output3);

// filtering
const array4 = [0, 1, 2, 3, 4];
const output4 = array4.filter((val)=>{
  if(val % 2 === 0) {
    return true;
  }
});
console.log('Filtering: ', output4);
