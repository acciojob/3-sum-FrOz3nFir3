function threeSum(arr, target) {
  //brute force approach O(N^3)Time and O(1) Space
  let closeSum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let currentSum = arr[i] + arr[j] + arr[k];

        let currentDifference = Math.abs(target - currentSum);
        let previousDifference = Math.abs(target - closeSum);
        if (currentDifference < previousDifference) {
          closeSum = currentSum;
        }
      }
    }
  }
  return closeSum;
}

module.exports = threeSum;
