function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      var lowest = i;
      for(let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[lowest]) lowest = j;
      }
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
  }
  return arr
};

const arr = [64 25 12 22 11];
selectionSort(arr);