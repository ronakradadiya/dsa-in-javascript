const sumOfOddNumbersInArray = (n, arr) => {
  const isOdd = arr[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  if (isOdd) {
    return arr[n] + sumOfOddNumbersInArray(n - 1, arr);
  }

  return sumOfOddNumbersInArray(n - 1, arr);
};

const arr = [5, 4, 3, 2, 1];
console.log(sumOfOddNumbersInArray(arr.length - 1, arr));
