const array = [0, 2, 3, 4]; // find the missing number

if (array.length === 0) {
  return;
} else {
  let n = array.includes(0) ? array.length : array.length + 1;
  const nTotal = (n * (n + 1)) / 2; // gives me total till nth value

  const arrayTotal = array.reduce((acc, index) => acc + index, 0);

  const missing = nTotal - arrayTotal;

  console.log(missing);
}
