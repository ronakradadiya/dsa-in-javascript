const reverse = (n) => {
  let rev = 0
  let nCopy = n;
  n = Math.abs(n)

  while (n > 0) {
    const lastDigit = n % 10;
    rev = (rev * 10) + lastDigit;
    n = Math.floor(n / 10);
  }

  // let limit = Math.pow(2, 31);
  let limit = 2 ** 31;

  const result = nCopy < 0 ? -rev : rev;

  if (result < -limit || result > limit) {
    return 0
  }

  return result
}

let result = reverse(-123)
console.log(result)

console.log(reverse(1534236469))
console.log(reverse(-1534236469))