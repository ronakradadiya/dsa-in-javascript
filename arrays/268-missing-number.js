/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;

  const nTotal = (n * (n + 1)) / 2;

  const currentTotal = nums.reduce((num, acc) => num + acc, 0);

  return nTotal - currentTotal;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
