/**
 * @param {number[]} nums
 * @return {number}
 */

 const maxMoney = (nums, currentHouse) => {
  if (currentHouse >= nums.length) {
      return 0;
  }
  
  const rob = nums[currentHouse] + maxMoney(nums, currentHouse + 2);
  const noRob = maxMoney(nums, currentHouse + 1);
  
  return Math.max(rob, noRob);
}

var rob = function(nums) {
  return maxMoney(nums, 0)
};

console.log(rob([2,5,10]));