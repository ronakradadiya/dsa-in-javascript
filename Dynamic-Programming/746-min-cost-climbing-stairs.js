/**
 * @param {number[]} cost
 * @return {number}
 */

 const minCost = (cost, currentIndex, memo) => {
  if (currentIndex === cost.length) {
      return 0;
  }
  
  if (currentIndex > cost.length) {
      return 1001;
  }
  
  const currentKey = currentIndex;
  
  if (memo[currentKey]) {
      return memo[currentKey]
  }
  
  const oneJump = cost[currentIndex] + minCost(cost, currentIndex + 1, memo);
  const twoJumps = cost[currentIndex] + minCost(cost, currentIndex + 2, memo);
  
  memo[currentKey] = Math.min(oneJump, twoJumps);
  return Math.min(oneJump, twoJumps);
}

const minCostClimbingStairs = function(cost) {
  return Math.min(minCost(cost, 0, {}), minCost(cost, 1, {}));
};

console.log(minCostClimbingStairs([10, 15, 20]));