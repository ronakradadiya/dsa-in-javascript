// Brute force approach
var majorityElement = function (nums) {
  const n = nums.length;
  let maxElement = -1;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }

    if (count > Math.floor(n / 2)) {
      maxElement = nums[i];
      break;
    }
  }

  return maxElement;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

var majorityElementBetter = function (nums) {
  const n = nums.length;
  const hashmap = {};

  for (let i = 0; i < n; i++) {
    if (nums[i] in hashmap) {
      hashmap[nums[i]]++;
    } else {
      hashmap[nums[i]] = 1;
    }
  }

  let maxElement = -1;
  for (let i = 0; i < n; i++) {
    if (hashmap[nums[i]] > Math.floor(n / 2)) {
      maxElement = nums[i];
      break;
    }
  }

  return maxElement;
};

// Optimal - Moore's Voting Algorithm - if a number appears greater than n/2 times, it cannot be cancelled
var majorityElementBetter = function (nums) {
  const n = nums.length;

  let count = 0;
  let element = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      element = nums[i];
      count = 1;
      continue;
    }

    if (element === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (let i = 0; i < n; i++) {
    if (element === nums[i]) {
      count++;
    }
  }

  if (count > Math.floor(n / 2)) {
    return element;
  }

  return -1;
};

console.log(majorityElementBetter([3, 2, 3]));
console.log(majorityElementBetter([2, 2, 1, 1, 1, 2, 2]));
