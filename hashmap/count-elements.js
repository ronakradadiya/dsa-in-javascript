const countElements = (nums) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return obj;
}

console.log(countElements([1,2,3,1,2,3,4,5]))