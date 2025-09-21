/**
 * @param {string} s
 * @return {number}
 */
// Dont use this in interview
// TC - O(N)
// SC - O(N)
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

var lengthOfLastWordAlt = function (s) {
  let newCount = 0;
  let oldCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      oldCount++;
      newCount = oldCount;
    } else {
      oldCount = 0;
    }
  }

  return newCount;
};
console.log(lengthOfLastWordAlt("Hello World"));
console.log(lengthOfLastWordAlt("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt("luffy is still joyboy"));

var lengthOfLastWordAlt1 = function (s) {
  let count = 0;

  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      count++;
    } else {
      count = 0;
    }
  }

  return count;
};
console.log(lengthOfLastWordAlt1("Hello World"));
console.log(lengthOfLastWordAlt1("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt1("luffy is still joyboy"));

// optimal way
var lengthOfLastWordAlt2 = function (s) {
  let count = 0;

  s = s.trim();
  const n = s.length - 1;

  for (let i = n; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }

  return count;
};
console.log(lengthOfLastWordAlt2("Hello World"));
console.log(lengthOfLastWordAlt2("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt2("luffy is still joyboy"));

var lengthOfLastWordAlt3 = function (s) {
  let count = 0;

  s = s.trim();
  const n = s.length - 1;

  for (let i = n; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }

  return count;
};
console.log(lengthOfLastWordAlt3("Hello World"));
console.log(lengthOfLastWordAlt3("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt3("luffy is still joyboy"));

// Optimal algorithm
// TC - O(n)
// SC - O(1)
var lengthOfLastWordAlt4 = function (s) {
  let count = 0;

  let n = s.length - 1;

  // trim all the spaces at the end
  // while (s[n] === " " && n >= 0) {
  //   n -= 1;
  // }

  while (n >= 0) {
    if (s[n] !== " ") {
      break;
    }
    n -= 1;
  }

  // count the character till you reach a space
  // while (s[n] !== " " && n >= 0) {
  //   count += 1
  //   n -= 1;
  // }
  while (n >= 0) {
    if (s[n] === " ") {
      break;
    }
    count += 1;
    n -= 1;
  }

  return count;
};
console.log(lengthOfLastWordAlt4("Hello World"));
console.log(lengthOfLastWordAlt4("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt4("luffy is still joyboy"));

// Best algorithm
// TC - O(n)
// SC - O(1)
var lengthOfLastWordAlt5 = function (s) {
  let count = 0;

  let n = s.length - 1;

  // for (let i = n; i >= 0; i--) {
  //   if (count === 0 && s[i] === " ") {
  //     continue;
  //   }

  //   if (s[i] === " ") {
  //     break;
  //   }

  //   count += 1;
  // }

  while (n >= 0) {
    if (s[n] !== " ") {
      count += 1;
    } else if (count > 0) {
      break;
    }
    n -= 1;
  }

  return count;
};
console.log(lengthOfLastWordAlt5("Hello World"));
console.log(lengthOfLastWordAlt5("   fly me   to   the moon  "));
console.log(lengthOfLastWordAlt5("luffy is still joyboy"));
