/**
 * @param {number} n
 * @return {number}
 */
 const fibo = (n) => {
    
  if (n === 0) {
      return 0;
  }
  
  if (n === 1) {
      return 1;
  }
  
  const firstFibo = fibo(n-1);
  const secondFibo = fibo(n-2);
  
  return firstFibo + secondFibo;
}

const fib = function(n) {
  return fibo(n)
};

console.log(fib(4));