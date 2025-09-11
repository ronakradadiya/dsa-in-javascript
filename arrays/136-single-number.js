/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]] += 1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i]
    }
  }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));

var singleNumberAlt = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]
  }
  return xor
};

console.log(singleNumberAlt([2,2,1]));
console.log(singleNumberAlt([4,1,2,1,2]));
