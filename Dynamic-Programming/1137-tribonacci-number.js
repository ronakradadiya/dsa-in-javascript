/**
 * @param {number} n
 * @return {number}
 */
 const tribo = (n, memo) => {
  if (n === 0) {
      return 0;
  }
  
  if (n === 1) {
      return 1;
  }
  
  if (n === 2) {
      return 1;
  }
  
  const currentKey = n;
  
  if (memo[currentKey]) {
      return memo[currentKey];
  }
  
  const firstTribo = tribo(n-1, memo);
  const secondTribo = tribo(n-2, memo);
  const thirdTribo = tribo(n-3, memo);
  
  memo[currentKey] = firstTribo + secondTribo + thirdTribo;
  return firstTribo + secondTribo + thirdTribo;
}

const tribonacci = function(n) {
  return tribo(n, {})
};

console.log(tribonacci(4));