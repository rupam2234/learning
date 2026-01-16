//Find all pairs of numbers that add up to 10 in the array:

const tagret = 5;

const array = [-3, 1, 4, 8, -1, 6, -2];
const hash = {};

const result = [];

if (array.length < 2) {
  console.log("Need atleast 2 numbers in the array");
} else {
  for (let i = 0; i < array.length; i++) {
    const complement = tagret - array[i];

    if (hash[complement] !== undefined) {
      result.push([complement, array[i]]);
    }

    hash[array[i]] = i;
  }
}

console.log(result);
