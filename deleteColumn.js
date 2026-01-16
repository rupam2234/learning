// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid.

// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

function deleteColumn(strings) {
  if (strings.length < 2) {
    return 0;
  }

  let deleted = 0;
  const rowLength = strings.length;
  const colLength = strings[0].length;

  for (let col = 0; col < colLength; col++) {
    for (let row = 0; row < rowLength - 1; row++) {
      if (strings[row][col] > strings[row + 1][col]) {
        deleted++;
        break;
      }
    }
  }

  return deleted;
}

console.log(deleteColumn(["abc", "bce", "cae"]));
