const array = [1, 2, 3, 4, 5];

const reduce = array.reduce((acc, index) => acc + index, 0);

// acc = 1+2+3 = 5 index = 4 => 9

// reduce function calls the specified callback function for each element in the array,
// acc holds the running total until now and index holds the current value
// 0 means we starting from 0

const map = array.map((x) => x > 2);

// when we apply > or < these returns boolean so the outputs are only true and false
// based on specific condition for each element of the array

const filter = array.filter((x) => x > 2);

// in filter we again calling the specified callback function for each element of the array
// and based on the specific conditions we get the output as a new array

const some = array.some((x) => x === 2);

// some is unique in the sense that it calls the specified callback
// when it finds the matching element it stop looping
// retuns boolean (true) for matching conditions and false when no element matched

const every = array.every((x) => x < 9);

// gives true when all of the elements agrees to the specified function
// otherwise false

console.log(every);
