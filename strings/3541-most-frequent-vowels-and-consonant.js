/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  // store all the values with freq in a map
  let map = {};

  for (let i = 0; i < s.length; i++) { // O(n)
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  // find the max vowel and consonant inside the map
  let maxVowelCount = 0;
  let maxConsonantCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  // for (let i = 0; i < s.length; i++) { // O(n)
  //   if (vowels.includes(s[i])) {
  //     const vowelCount = map[s[i]];

  //     if (vowelCount > maxVowelCount) {
  //       maxVowelCount = vowelCount;
  //     }
  //   } else {
  //     const consonantCount = map[s[i]];

  //     if (consonantCount > maxConsonantCount) {
  //       maxConsonantCount = consonantCount;
  //     }
  //   }
  // }

  const mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) { // O(26) -> O(1)
    if (vowels.includes(mapKeys[i])) { // O(5)
      const vowelCount = map[mapKeys[i]];

      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
      }
    } else {
      const consonantCount = map[mapKeys[i]];

      if (consonantCount > maxConsonantCount) {
        maxConsonantCount = consonantCount;
      }
    }
  }

  return maxVowelCount + maxConsonantCount;
};

console.log(maxFreqSum("successes"));
console.log(maxFreqSum("aeiaeia"));

// Time complexity -> O(n) + O(1) -> O(n)
// Space complexity -> O(52) -> O(1)
