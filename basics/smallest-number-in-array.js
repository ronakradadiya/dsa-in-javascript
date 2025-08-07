const findSmallest = (arr) => {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i];
      }
  }
  return smallest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findSmallest(arr);
console.log("Result:", result);

// Time Complexity: O(n)
// Space Complexity: O(1) – Only a single variable is used

// QUESTIONS TO ASK
// 1. What if the array is empty?
// 2. What if the array has only one element?
// 3. What if all elements are the same?
// 4. What if the array has negative numbers?
// 5. What if the array has duplicate elements?
