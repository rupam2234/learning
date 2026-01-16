// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverse(input) {
  if (input.length < 2) {
    return input;
  }

  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    [input[left], input[right]] = [input[right], input[left]];
    left++;
    right--;
  }

  return input;
}

console.log(reverse(["h", "e", "l", "l", "o"]));
