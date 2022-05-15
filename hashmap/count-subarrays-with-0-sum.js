const countSubarraysWith0sum = (arr) => {
  const memo = {
    0: 1
  }
  let ans = 0;
  let prefixSum = 0;
  arr.forEach(item => {
    prefixSum += item;
    if (memo[prefixSum] === undefined) {
      memo[prefixSum] = 1;
    } else {
      ans += memo[prefixSum];
      memo[prefixSum] += 1;
    }
  })
  return ans;
}

console.log(countSubarraysWith0sum([15,-2,2,-8,1,7,10,23,-23]))