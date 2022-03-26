/**
 * @param {number[]} nums
 * @return {number}
 */

 const maxMoney = (nums, currentHouse, memo) => {
  if (currentHouse >= nums.length) {
      return 0;
  }
  
  const currentKey = currentHouse;
  
  if (memo[currentKey]) {
      return memo[currentKey];
  }
  
  const rob = nums[currentHouse] + maxMoney(nums, currentHouse + 2, memo);
  const noRob = maxMoney(nums, currentHouse + 1, memo);
  
  memo[currentKey] = Math.max(rob, noRob);
  return Math.max(rob, noRob);
}

var rob = function(nums) {
  return maxMoney(nums, 0, {})
};

console.log(rob(2,5,10));