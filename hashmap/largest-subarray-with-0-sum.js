class Solution {
  maxLen(arr,n){
      //code here
      let previousSum = 0;
      let ans = 0;
      const memo = {};
      for (let i = 0; i < n; i++) {
          previousSum += arr[i];
          if (previousSum === 0) {
              ans = i + 1;
          } else {
              if (memo[previousSum] === undefined) {
                  memo[previousSum] = i;
              } else {
                  const newAns = i - memo[previousSum];
                  ans = Math.max(ans, newAns);
              }
          }
      }
      
      return ans;
  }
}

const sol = new Solution();
console.log(sol.maxLen([15,-2,2,-8,1,7,10,23], 8))