/**
 * @param {number[]} nums
 * @return {boolean}
 */

 const isPossible = (nums, currentIndex, targetSum) => {
  if (targetSum === 0) {
      return true; 
  }
  
  if (currentIndex >= nums.length) {
      return false;
  }
  
  let consider;
  
  if (nums[currentIndex] <= targetSum)
      consider = isPossible(nums, currentIndex + 1, targetSum - nums[currentIndex]);
  
  const notConsider = isPossible(nums, currentIndex + 1, targetSum);
  
  return consider || notConsider;
}

var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, num) => {
      acc += num;
      return acc;
  }, 0);
  
  if (totalSum % 2 !== 0) {
      return false;
  }
  
  return isPossible(nums, 0, totalSum / 2);
};

console.log(canPartition([1,5,11,5]));