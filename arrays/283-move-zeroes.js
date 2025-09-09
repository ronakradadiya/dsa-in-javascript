/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          let temp = nums[i];
          nums[i] = nums[x];
          nums[x] = temp;
          
          x++;
      }
  }

  return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))