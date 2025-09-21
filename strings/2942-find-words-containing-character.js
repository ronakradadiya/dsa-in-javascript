/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const indices = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // if (word.includes(x)) {
    //   indices.push(i);
    // }
    for (let j = 0; j < word.length; j++) {
      if (word[j] === x) {
        indices.push(i)
        break;
      }
    }
  }

  return indices;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));

// m - no of words
// n - max length of each word

// TC - O(n * m)
// SC - O(1) - Why ? Though I am using extra space over here, this is not used in my logic, this is just to store ans
