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
  return memo[currentKey];
}

const rob = function(nums) {
  if (nums.length === 1) {
      return nums[0]
  }
  return Math.max(maxMoney(nums.slice(0, -1), 0, {}), maxMoney(nums, 1, {}))
};

console.log(rob([2,5,10]));