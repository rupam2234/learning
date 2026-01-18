// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

const nums = [2, 1, 3, 8, 9, 11];

function maxProduct(array) {
  if (array.length < 2) {
    return array[0];
  }

  let max1 = 0; // 2 2 3
  let max2 = 0; // 0 1 2

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }

  return (max1 - 1) * (max2 - 1);
}

console.log(maxProduct(nums));
