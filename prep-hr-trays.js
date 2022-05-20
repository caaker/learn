// note that inputs in the question do not always meet the inputs in the question
// checklist next time
function quality_control(trays, min_weight) {
  for(let i = 0; i < trays.length; i++) {
    console.log(trays[i]);
    let j = 0;
    while( j < trays[i].length ) {
      console.log(trays[i][j]);
      if(trays[i][j] < min_weight) {
        trays[i].splice(j, 1)
      } else {
        j++;
      }
    }
  }
  return trays;
}

let res = quality_control([[2,5],[4,3]], 5);
console.log(res);
