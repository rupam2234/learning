const { useEffect } = require("react");

console.log("first");

setTimeout(
  (input) => {
    console.log(input);
  },
  3000,
  "third",
); // runs the console once the timer has expired

console.log("second");

useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Hello world");
  }, 3000);

  return () => clearTimeout(timer);
}, []); // we use sideEffect on react in such cases because react will re-run the function on each render causing loop
