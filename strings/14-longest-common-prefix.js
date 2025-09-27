/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let output = "";
  let pointer = 0;

  while (true) {
    let isBreak = false;

    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];

      if (!output[pointer]) {
        output += str[pointer];
      } else if (output[pointer] !== str[pointer]) {
        output = output.slice(0, pointer);
        isBreak = true;
        break;
      }
    }

    if (isBreak) {
      break;
    }

    pointer++;
  }

  return output;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"])); // Edge case - Please recheck this when you revisit
console.log(longestCommonPrefix([""])); // Edge case - Please recheck this when you revisit

var longestCommonPrefix1 = function (strs) {
  let x = 0;

  while (x < strs[0].length) {
    const ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (ch !== strs[i][x] || x === strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    x += 1;
  }

  return strs[0]; // Edge case 2
};
console.log(longestCommonPrefix1(["flower", "flow", "flight"]));
console.log(longestCommonPrefix1(["dog", "racecar", "car"]));
console.log(longestCommonPrefix1(["a"]));
console.log(longestCommonPrefix1([""]));

// Edge case to handle -
// 1. if any string except first has shorter length, then handle that case eg - flower, fl, flow
// 2. if length of first string has exhausted even without going inside if block -> fl, flow, flower

// If sum of length of all strings is length S
// Time complexity - O(S)