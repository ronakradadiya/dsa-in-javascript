/**
 * @param {number} n
 * @return {number}
 */
 const tribo = (n) => {
  if (n === 0) {
      return 0;
  }
  
  if (n === 1) {
      return 1;
  }
  
  if (n === 2) {
      return 1;
  }
  
  const firstTribo = tribo(n-1);
  const secondTribo = tribo(n-2);
  const thirdTribo = tribo(n-3);
  
  return firstTribo + secondTribo + thirdTribo;
}

const tribonacci = function(n) {
  return tribo(n);
};

console.log(tribonacci(4));