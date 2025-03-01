function countUniqueNumbers(arr) {
  const unique = [];
  let hashMap = {};
  for (let num of arr) {
    if (hashMap[num]) {
      hashMap[num]++;
    } else {
      hashMap[num] = 1;
    }
  }
  for (key in hashMap) {
    unique.push(key);
  }
  return unique.length;
}
console.log(countUniqueNumbers([1, 2, 2, 3, 4, 4, 5, 6, 7, 8]));
console.log(countUniqueNumbers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueNumbers([10, 20, 20, 30, 30, 40, 40, 50]));
console.log(countUniqueNumbers([5, 5, 5, 5, 5]));
console.log(countUniqueNumbers([100, 200, 200, 300, 300, 300, 400]));
console.log(countUniqueNumbers([1, 1, 2, 3, 3, 4]));
