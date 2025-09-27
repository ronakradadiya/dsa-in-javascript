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
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix([""]));
