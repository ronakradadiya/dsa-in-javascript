const countDigits = (num) => {
  if (num === 0) {
    return 1
  }

  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10)
    count ++;
  }
  return count;
}

let num = 0;
let result = countDigits(num);
console.log(result)

// Each loop iteration reduces num by a factor of 10. So the number of iterations is approximately:
// Time Complexity: O(log n)
// Space Complexity: O(1)

// QUESTIONS TO ASK
// 1. What if the number is negative?
// 2. What if the number is zero?