const union = (nums1, nums2) => {
  const obj = {};

  for (let i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = true;
  }

  for (let j = 0; j < nums2.length; j++) {
    obj[nums2[j]] = true;
  }

  const result = [];
  for (let key in obj) {
    result.push(key);
  }

  return result;
}

console.log(union([1,2,3,4,5], [1,2,3]))