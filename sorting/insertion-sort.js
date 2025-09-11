let arr = [5, 4, 9, 1, 0];

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j+1] = arr[j];
        if (j === 0) {
          arr[j] = current
        }
      } else {
        arr[j+1] = current
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));
console.log(insertionSort([1,2,3,4,5]));

function insertionSortAlt(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    const prev = i - 1;
    while (arr[prev] > current && prev >= 0) {
      arr[prev + 1] = arr[prev]
      prev--;
    }
    arr[prev + 1] = current
  }
  return arr;
}

console.log(insertionSortAlt(arr));
console.log(insertionSortAlt([1,2,3,4,5]));
