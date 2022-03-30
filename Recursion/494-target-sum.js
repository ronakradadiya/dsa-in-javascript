/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const totalWays = (nums, currentIndex, target) => {
  if (currentIndex === nums.length && target === 0) {
      return 1;
  }
  
  if (currentIndex === nums.length && target !== 0) {
      return 0;
  }
  
  const posSign = totalWays(nums, currentIndex + 1, target - nums[currentIndex]);
  const negSign = totalWays(nums, currentIndex + 1, target + nums[currentIndex]);
  
  return posSign + negSign;
}

const findTargetSumWays = function(nums, target) {
  return totalWays(nums, 0, target)
};

console.log([1,1,1,1,1], 3);