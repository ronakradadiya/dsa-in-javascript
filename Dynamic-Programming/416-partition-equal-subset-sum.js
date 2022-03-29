/**
 * @param {number[]} nums
 * @return {boolean}
 */

 const isPossible = (nums, currentIndex, targetSum, memo) => {
  if (targetSum === 0) {
      return true; 
  }
  
  if (currentIndex >= nums.length) {
      return false;
  }
  
  const currentKey = `${currentIndex}-${targetSum}`;
  
  if (memo[currentKey]) {
      return memo[currentKey]
  }
  
  let consider = false;
  
  if (nums[currentIndex] <= targetSum)
      consider = isPossible(nums, currentIndex + 1, targetSum - nums[currentIndex], memo);
  
  const notConsider = isPossible(nums, currentIndex + 1, targetSum, memo);
  
  memo[currentKey] = consider || notConsider;
  return memo[currentKey];
}

var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, num) => {
      acc += num;
      return acc;
  }, 0);
  
  if (totalSum % 2 !== 0) {
      return false;
  }
  
  return isPossible(nums, 0, totalSum / 2, {});
};

console.log(canPartition([1,5,11,5]))