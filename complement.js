// find the complement numbers in the array of target 6. return indecies

function twoSum(array, target) {
  const seen = {};

  if (array.length < 2) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];

      if (seen[complement] !== undefined) {
        return [seen[complement], i];
      }

      seen[array[i]] = i;
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 6));
