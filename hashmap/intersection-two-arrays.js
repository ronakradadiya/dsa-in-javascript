/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const obj = {}
    for (let i = 0; i < nums1.length; i++) {
        if (!obj[nums1[i]]) {
            obj[nums1[i]] = true
        }
    }
    
    const arr = [];
    for (let j = 0; j < nums2.length; j++) {
        if (obj[nums2[j]] && obj[nums2[j]] === true) {
            arr.push(nums2[j]);
            obj[nums2[j]] = false;
        }
    }
    
    return arr;
};

console.log(intersection([1,2,2,1], [2,2]))