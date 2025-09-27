/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = t[i];
    }

    if (!map2[t[i]]) {
      map2[t[i]] = s[i];
    }

    if (map1[s[i]]) {
      if (map1[s[i]] !== t[i]) {
        return false;
      }
    }

    if (map2[t[i]]) {
      if (map2[t[i]] !== s[i]) {
        return false;
      }
    }
  }

  return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));

var isIsomorphicAlt = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapStoT = {};
  const mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapTtoS[t[i]] !== s[i] || mapStoT[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};
console.log(isIsomorphicAlt("egg", "add"));
console.log(isIsomorphicAlt("foo", "bar"));
console.log(isIsomorphicAlt("paper", "title"));

// Time complexity - O(n)
// Space complexity - O(1)
