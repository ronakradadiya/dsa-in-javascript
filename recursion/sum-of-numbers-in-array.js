// const sumOfNumbersInArray = (arr) => {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   return arr[0] + sumOfNumbersInArray(arr.slice(1));
// };

// console.log(sumOfNumbersInArray([5, 4, 3, 2, 1]));

const sumOfNumbersInArray = (n, arr) => {
  if (n === 0) {
    return arr[0];
  }

  return arr[n] + sumOfNumbersInArray(n - 1, arr);
};

const arr = [5, 4, 3, 2, 1];
console.log(sumOfNumbersInArray(arr.length - 1, arr));
