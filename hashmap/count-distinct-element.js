const countDistinctElements = (nums) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  let count = 0;

  for (let key in obj) {
    if (obj[key] === 1) {
      count += 1;
    }
  }

  return count;
}

console.log(countDistinctElements([1,2,3,1,2,3,4,5]))