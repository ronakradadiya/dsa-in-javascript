/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // n - no of strs
  // m - max length of characters of each string
  let map = {}

  for (let i = 0; i < strs.length; i++) { // O(n)
    const sortedKey = strs[i].split("").sort().join(""); // O(mlogm)

    if (!map[sortedKey]) {
      map[sortedKey] = [strs[i]]
    } else {
      map[sortedKey].push(strs[i])
    }
  }

  return Object.values(map)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

// Time complexity - O(n * mlogm)
// Space complexity - O(n * m)

/*
Input - ["eat","tea","tan","ate","nat","bat"]
Output - {
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}

Step 1: There are at most n entries total across all arrays inside the map.

["eat", "tea", "ate"] → 3 strings
["tan", "nat"] → 2 strings
["bat"] → 1 string

If you count all strings stored in the map’s arrays, that’s 6 strings total, which is exactly n.
✅ So across the whole map, you never store more than n strings total — each string appears once inside one of the arrays.

Step 2: Each string itself can have up to m characters, but we only count how many strings — not their content.
Each string, like "eat", "tea", "tan", etc., has m = 3 characters.
We don’t measure individual characters in Big-O — instead, we say:

1. 2Each string takes O(m) space to store.
2. There are n strings total stored in the map.

So total space to store all strings ≈ n × m.

✅ Example:
6 strings × 3 characters each = 18 character units → scales as O(n × m).
*/