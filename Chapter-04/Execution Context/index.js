const x = 10;
const y = 20;

function sum(a, b) {
const sum = a + b;
return sum;
}
console.log(sum(x, y));

function first() {
  second();
  console.log("First");
}
function second() {
  third();
  console.log("Second");
}
function third() {
  console.log("Third");
}

first();
