// Check if Two Strings are Anagrams

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram is a word or phrase formed by rearranging the letters of another word or phrase,
// typically using all original letters exactly once.

const item1 = "akhil";
const item2 = "lakhi";

const seen = {};

if (item1.length !== item2.length) {
  console.log(false);
  return false;
} else {
  for (let i = 0; i < item1.length; i++) {
    seen[item1[i]] = (seen[item1[i]] || 0) + 1;
  }

  for (let i = 0; i < item2.length; i++) {
    if (!seen[item2[i]]) {
      console.log(false);
      return false;
    }

    seen[item2[i]]--;
  }

  console.log(true);
  return true;
}
