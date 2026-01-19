// Max Sum of Two Elements
// Given an array of integers nums, choose two different indices i and j. Return the maximum value of nums[i] + nums[j].

const nums = [-2, -3, -1];

function maxSum(array) {
  if (array.length < 2) {
    return array[0];
  }

  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }

  return max1 + max2;
}

console.log(maxSum(nums));
