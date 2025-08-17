const palindrome = (n) => {
  if (n < 0) {
    return false
  }

  let rev = 0;
  let nCopy = n;

  while (n > 0) {
    const rem = n % 10;
    rev = (rev * 10) + rem
    n = Math.floor(n / 10);
  }

  return rev === nCopy
}

let result = palindrome(121);
console.log(result)

console.log(palindrome(1212));