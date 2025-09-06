let arr = [5, 4, 9, 1, 0];

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr;
}

console.log(selectionSort(arr));
console.log(selectionSort([1,2,3,4,5]));
