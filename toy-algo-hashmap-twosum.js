const twoSum1 = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[j] === comp) {
        return [i, j];
      }
    }
  }
  return 'not found';
};

const twoSum = function(nums, target) {
  const map = new Map();
  for( let i = 0; i < nums.length; i++) {
    let test = map.get(target - nums[i]);
    if(test !== undefined) {
      return [test, i];
    };
    map.set(nums[i], i);
  }
  return 'not found';
};


let nums = [2,7,11,15];
let target = 9;

// nums = [3, 2, 4];
// target = 6;

const res = twoSum1(nums, target);
console.log(res);