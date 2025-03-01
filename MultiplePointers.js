// Method 1:  using nested loops
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// sumZero([-3, -2, -1, 0, 1, 2, 3]); // call the function
// Method 2:  using nested two pointers, the array must be sorted for this method to work
function sumToZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else {
      left++;
      right--;
    }
  }
}
console.log(sumToZero([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]
console.log(sumToZero([-4, -2, 0, 2, 5])); //[-2, 2]
console.log(sumZero([1, 2, 3, 4])); //undefined
