/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let right = num.length - 1;
  while (right >= 0) {
    if (parseInt(num[right]) % 2 !== 0) {
      return num.slice(0, right + 1);
    }

    right--;
  }

  return "";
};

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
console.log(largestOddNumber("10133890"));
console.log(largestOddNumber("239537672423884969653287101"));

// Time complexity: O(n)
// Space complexity: O(1)
