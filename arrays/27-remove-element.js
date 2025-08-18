/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    // shift elements to left if it is not equal to val
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++
    }
  }
  return x;
};

console.log(removeElement([3,2,2,3], 3)) // [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) // [0,1,4,0,3,_,_,_]