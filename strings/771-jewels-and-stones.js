/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count += 1;
        break;
      }
    }
  }
  return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
// TC - O(m * n) -> m - length of jewels, n - length of stones
// SC - O(1)

var numJewelsInStonesSet = function (jewels, stones) {
  let count = 0;
  let jSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) { // O(n)
    if (jSet.has(stones[i])) { // O(1)
      count += 1;
    }
  }

  return count;
};
console.log(numJewelsInStonesSet("aA", "aAAbbbb"));
console.log(numJewelsInStonesSet("z", "ZZ"));

// TC - O(n * 1) -> O(n)
// SC - O(52) - we have unique case sensitive English alphabets - O(1)
