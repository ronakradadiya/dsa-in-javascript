/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const obj = {};
  
  nums1.forEach(num => {
      if (!obj[num]) {
          obj[num] = 1;
      } else {
          obj[num] += 1;
      }
  })
  
  const result = [];
  
  nums2.forEach(num => {
      if (obj[num] && obj[num] > 0) {
          result.push(num);
          obj[num] -= 1;
      }
  })
  
  return result;
};

console.log(intersect([4,9,5], [9,4,9,8,4]))