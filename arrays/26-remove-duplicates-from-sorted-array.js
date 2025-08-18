const removeDuplicates = (nums) => {
  // let i = 0;
  // let j = 1;
  // let k = 0;

  // while (j < nums.length) {
  //   if (nums[i] === nums[j]) {
  //     j++;
  //   } else {
  //     i++;
  //     k++;
  //     nums[i] = nums[j];
  //     if (j < nums.length - 1) {
  //       j++;
  //     }
  //   }
  // }

  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {      // nums[i] > nums[x] 
      x++;
      nums[x] = nums[i]
    }
  }

  return x + 1;
};

console.log(removeDuplicates([1, 1, 2])); // [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4]
