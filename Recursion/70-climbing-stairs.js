const totalWays = (currentStair, targetStair) => {
    
  if (currentStair === targetStair) {
      return 1;
  }
  
  if (currentStair > targetStair) {
      return 0;
  }
  
  const oneJump = totalWays(currentStair + 1, targetStair);
  const twoJump = totalWays(currentStair + 2, targetStair);
  
  return oneJump + twoJump;
}

const climbStairs = function(n) {
 return totalWays(0, n);
};

console.log(climbStairs(2));