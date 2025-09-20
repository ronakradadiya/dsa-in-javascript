const fibonacci = (n) => {
  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    const sum = first + second;
    first = second;
    second = sum;
  }

  return second;
};

console.log(fibonacci(5));
