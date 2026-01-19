// Max Product of Three Elements
// Given an array of integers nums, choose three different indices i, j, and k. Return the maximum value of nums[i] * nums[j] * nums[k]

const nums = [2, 4, 5, 2, 1, -2, 4];

function maxProductOfThree(array) {
  if (array.length < 3) {
    return array[0] * array[1];
  }

  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  let min1 = Infinity;
  let min2 = Infinity;
  // we don't need min3 because when two negative (-x)*(-y) = we get (+)ve.. we multiply that with our max to get max of the array

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max3 = max2;
      max2 = array[i];
    } else if (array[i] > max3) {
      max3 = array[i];
    }

    if (array[i] < min1) {
      min2 = min1;
      min1 = array[i];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

console.log(maxProductOfThree(nums));
