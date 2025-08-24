// Binary search works only on sorted arrays.

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle
    }

    if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1;
    }
  }

  return -1
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([5], 5))
console.log(search([2, 5], 5))

// Time complexity - O(log n)
// Space complexity - O(1)


// Questtions to be asked:
// 1. What if array has duplicates?
// 2. What if array has only one element ?
// 3. What if array is empty?