let arr = [5, 4, 9, 1, 0];

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Optimization: Track if any swaps were made
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true
      }
    }

    if (!swapped) {
      break
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
console.log(bubbleSort([1,2,3,4,5]));
