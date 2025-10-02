/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - i - 1];
      s[x + n - i - 1] = temp;
    }
  }

  return s.join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
console.log(reverseStr("abc", 3));

var reverseStrAlt = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let left = x;
    let right = x + k - 1;
    right = right > s.length - 1 ? s.length - 1 : right;

    while (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left += 1;
      right -= 1;
    }
  }

  return s.join("");
};

console.log(reverseStrAlt("abcdefg", 2));
console.log(reverseStrAlt("abcd", 2));
console.log(reverseStrAlt("abc", 3));

// Time complexity - O(n)
// Space complexity - O(n) - because we are creating an array
// Space complexity - O(1) - if you are not converting to array
