/**
 * @param {number[]} cost
 * @return {number}
 */

 const minCost = (cost, currentIndex) => {
  if (currentIndex === cost.length) {
      return 0;
  }
  
  if (currentIndex > cost.length) {
      return 1001;
  }
  
  const oneJump = cost[currentIndex] + minCost(cost, currentIndex + 1);
  const twoJumps = cost[currentIndex] + minCost(cost, currentIndex + 2);
  
  return Math.min(oneJump, twoJumps);
}

const minCostClimbingStairs = function(cost) {
  return Math.min(minCost(cost, 0), minCost(cost, 1));
};

console.log(minCostClimbingStairs([10, 15, 20]));