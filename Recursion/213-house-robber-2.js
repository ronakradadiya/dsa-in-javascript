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

const rob = function(nums) {
  if (nums.length === 1) {
      return nums[0]
  }
  return Math.max(maxMoney(nums.slice(0, -1), 0), maxMoney(nums, 1))
};

console.log(rob([2,5,10]));