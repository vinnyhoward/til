function selectionSort(arr) {
  const swap = (arry, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

  for (let i = 0; i < arr.length; i++) {
    let curMin = i, temp;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[curMin]) curMin = j
    }
    if (i !== curMin) swap(arr, i, curMin)
  }
  return arr
};


const arr1 = [64, 25, 12, 22, 11];
console.log(selectionSort(arr1))