// three sum using two pointers

const array = [-1, 0, 1, 2, -1, -4];
const target = 0;

function threeSum(array, target) {
  const result = [];
  const n = array.length;

  if (n < 3) {
    return [];
  } else {
    array.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && array[i] === array[i - 1]) continue;

      const min = array[i] + array[i + 1] + array[i + 2];
      if (min > target) break;
      const max = array[i] + array[n - 1] + array[n - 2];
      if (max < target) continue;

      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = array[i] + array[left] + array[right];

        if (sum === target) {
          result.push([array[i], array[left], array[right]]);

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

    return result;
  }
}

console.log(threeSum(array, target));
