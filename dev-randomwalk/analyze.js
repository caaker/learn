/*
 *
 * Analysis
 *
*/

// Data Point Instance Array
const DPIA = [];

// Data Point
function DP(value, change, trendup, trenddown) {
  this.value = value;
  this.change = change;
  this.trendup = trendup;
  this.trenddown = trenddown;
  
  // currently only looking at the sign for random walk, not the change
  this.sign = Math.sign(change);
}

function analyze(arr) {
  const change = [];
  for(let i = 1; i < arr.length; i++) {
    const change = (arr[i] - arr[i-1]).toFixed(4);
    let DPI = new DP(arr[i], change, 0, 0);
    DPIA[i] = DPI;
    if(!DPIA[i-1]) {
      continue;
    }
    checkRandomWalk(i);
  }
  logResults();
}

function checkRandomWalk(i) {

  // negative to positive || negative
  if(DPIA[i-1].sign === -1 && DPIA[i].sign === 1) {
    DPIA[i].trendup = 1;
  } else if(DPIA[i-1].sign === -1 && DPIA[i].sign === -1) {
    DPIA[i].trendup = -1;

  // positive to negative || positive
  } else if(DPIA[i-1].sign === 1  && DPIA[i].sign === -1) {
    DPIA[i].trenddown = 1;
  } else if(DPIA[i-1].sign === 1 && DPIA[i].sign === 1) {
    DPIA[i].trenddown = -1;
  }
}

function logResults() {
  console.table(DPIA);
  let trendup = 0;
  let trenddown = 0;
  DPIA.forEach((val) => {
    trendup += val.trendup;
    trenddown += val.trenddown;
  })
  console.log(trendup);
  console.log(trenddown);
}

module.exports = analyze;
