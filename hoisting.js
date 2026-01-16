// var supports hoisting and js compiler interprets moves the variable declearation to the top
console.log(a);
var a = 10;
// gives undefined (not referenceError)

// what happens
var a;
console.log(a);
a = 10;

// const supports hoists too, js compiler knows the variable is decleared somewhere but it remains in temporal deadzone
console.log(b);
const b = 10;
// gives referenceError

// let also supports hoisting but js compiler knows the variable is decleared somewhere but remains in temporal deadzone
console.log(c);
let c = 10;
// gives referenceError

// functions are fully hoisted
console.log(hoisted());
function hoisted() {
  return "hello world";
}
// returns hello world
