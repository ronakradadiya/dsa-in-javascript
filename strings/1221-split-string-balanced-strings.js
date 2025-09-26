/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let maxNoOfBalancedStrings = 0;

  let lCount = 0;
  let rCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      lCount += 1;
    } else {
      rCount += 1;
    }

    if (lCount === rCount) {
      maxNoOfBalancedStrings += 1;
      lCount = 0;
      rCount = 0;
    }
  }


  return maxNoOfBalancedStrings
};

console.log(balancedStringSplit('RLRRLLRLRL'))
console.log(balancedStringSplit('RLRRRLLRLL'))
console.log(balancedStringSplit('LLLLRRRR'))

// Time Complexity - O(n)
// Space Complexity - O(1)

var balancedStringSplitAlt = function(s) {
  let maxNoOfBalancedStrings = 0;

  let tempCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      tempCount += 1;
    } else {
      tempCount -= 1;
    }

    if (tempCount === 0) {
      maxNoOfBalancedStrings += 1;
    }
  }


  return maxNoOfBalancedStrings
};

console.log(balancedStringSplitAlt('RLRRLLRLRL'))
console.log(balancedStringSplitAlt('RLRRRLLRLL'))
console.log(balancedStringSplitAlt('LLLLRRRR'))