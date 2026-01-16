// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

const nums = [1, 0, -1, 0, -2, 2]; // after sorting = [-2, -1, 0, 0, 1, 2]
const target = 0;

function fourSum(array, target) {
  const n = array.length;

  if (n < 4) {
    return [];
  } else {
    const result = [];

    array.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && array[i] === array[i - 1]) continue;

      const min = array[i] + array[i + 1] + array[i + 2] + array[i + 3];
      if (min > target) break;
      const max = array[i] + array[n - 1] + array[n - 2] + array[n - 3];
      if (max < target) continue;

      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && array[j] === array[j - 1]) continue;

        const min = array[i] + array[j] + array[j + 1] + array[j + 2];
        if (min > target) break;
        const max = array[i] + array[j] + array[n - 1] + array[n - 2];
        if (max < target) continue;

        let left = j + 1;
        let right = n - 1;

        while (left < right) {
          const sum = array[i] + array[j] + array[left] + array[right];

          if (sum === target) {
            result.push([array[i], array[j], array[left], array[right]]);

            left++;
            right--;

            while (left < right && array[left] === array[left - 1]) left++;
            while (left < right && array[right] === array[right + 1]) right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }

    return result;
  }
}

console.log(fourSum(nums, target));
