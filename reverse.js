let str = "My name is Rupam";

const arr = str
  .split(" ")
  .map((x) => x.split("").reverse().join(""))
  .join(" ");

console.log(arr);
