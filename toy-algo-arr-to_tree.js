function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
  let ret = [];
  let left = 0;
  let right = nums.length - 1;
  function recurse(left, right, node) {
    let mid = Math.round((left + right) / 2)
    let node = new TreeNode(nums[mid], null, null);

  }
};




// var sortedArrayToBST = function(nums) {
//   let ret = [];
//   let left = 0;
//   let right = nums.length - 1;
//   while(left <= right) {
//     let mid = Math.round((left + right) / 2);
//     ret.push(nums[mid]);
//     left = 0;
//     right = mid - 1;
//   }
//   return ret;
// };