const secondLargest = (arr) => {
  if (arr.length < 2) return "Array should have at least two numbers";
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? "No second largest found" : second;
}
console.log(secondLargest([0, 3, 5, 2, 7, 9])); // 7

// Time Complexity: O(n)
// Space Complexity: O(1) — Constant space

// QUESTIONS TO ASK
// 1. What if array is empty ?
// 2. What if array has only one element ?
// 3. What if all elements are the same ?