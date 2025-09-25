/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filteredString = "";

  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }

  // let reverse = filteredString.split("").reverse().join();
  let reverse = "";
  for (let i = filteredString.length - 1; i >= 0; i--) {
    reverse += filteredString[i];
  }

  return reverse === filteredString;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));

var isPalindromeAlt = function (s) {
  let filteredString = "";

  s = s.toLowerCase();
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    // if (
    //   (s[i].charCodeAt() >= "a".charCodeAt() &&
    //     s[i].charCodeAt() <= "z".charCodeAt()) ||
    //   (s[i].charCodeAt() >= "0".charCodeAt() &&
    //     s[i].charCodeAt() <= "9".charCodeAt())
    // )
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      reverse = s[i] + reverse;
    }
  }

  return reverse === filteredString;
};
console.log(isPalindromeAlt("A man, a plan, a canal: Panama"));
console.log(isPalindromeAlt("race a car"));
console.log(isPalindromeAlt(" "));
// Time complexity = O(n)
// Space complexity = O(n) + O(n) = O(n)

var isPalindromeAlt1 = function (s) {
  let filteredString = "";

  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }

  let isPalindrome = true;
  const n = filteredString.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (filteredString[i] !== filteredString[n - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};
console.log(isPalindromeAlt1("A man, a plan, a canal: Panama"));
console.log(isPalindromeAlt1("race a car"));
console.log(isPalindromeAlt1(" "));
// Time complexity = O(n)
// Space complexity = O(n)
