/**
 * @param {number} n
 * @return {number}
 */

 const totalWays = (currentStair, targetStair, memo) => {
    
  if (currentStair === targetStair) {
      return 1;
  }
  
  if (currentStair > targetStair) {
      return 0;
  }
  
  const currentKey = currentStair;
  
  if (memo[currentKey]) {
      return memo[currentKey];
  }
  
  const oneJump = totalWays(currentStair + 1, targetStair, memo);
  const twoJump = totalWays(currentStair + 2, targetStair, memo);
  
  memo[currentKey] = oneJump + twoJump;
  return memo[currentKey];
}

const climbStairs = function(n) {
 return totalWays(0, n, {});
};

console.log(climbStairs(2));