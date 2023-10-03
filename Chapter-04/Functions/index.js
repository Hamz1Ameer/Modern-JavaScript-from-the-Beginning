// //Functions:
// function sayHello() {
//   return `Hello World`;
// }
// console.log(sayHello());
//

// Add numbers :
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumbers(10, 20));
// console.log(addNumbers(22, 54));
// console.log(addNumbers(100, -50));

// function sub(num1, num2) {
//   return num1 - num2;
//   console.log(num1, num2); // after retun lines are not executed
// }
// console.log(sub(10, 4));
// console.log(sub(5, -20));

// arguments  and parameter :
// function regerterUser(user = "Bot") {
//   return user + ` is registered`;
// }
// console.log(regerterUser());

//

//rest params:

// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 100));

//

//global and fucntion scope:

// window.alert("Hello");
// alert("Hello JS");

// const x = 100;
// console.log(x, "in global");

// function run() {
//   var y = 20;
//   //   //   console.log(window);
//   //   //   console.log(window.innerWidth);
//   console.log(x, "in function");
//   console.log(y, "in function");
// }
// run();

// {
//   console.log(x, "in block");
// }

// console.log(y, "out of fnction"); // retuns error because y is out of scope in the function

//

//block scope

// let x = 10;
// {
//   let y = 20;
//   console.log(x, y);
// }
// console.log(x, y); // return error for y

// const x = 10;
// {
//   let y = 20;
//   console.log(x, y);
// }
// console.log(x, y); // return error for y

//nested scopes:
// var x=100;
// function first(){
//     var y= 200;
//     console.log(x,y);
//     function second(){
//         var z=300;
//         console.log(x,);
//     }
// }

//

//

// function declaration vs function expression
// add();
// function add() {
//   console.log("add");
// }

// var x = function () {
//   console.log("sub");
//   return "something";
// };

// console.log(x());

//

//

//Arrow Function:

// const add = () => {
//   console.log("add");
// };
// add();

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(20, 30));

// if one line of return statement:
// const add = (a, b) => a + b;
// console.log(add(20, 30));

// if one parameter we can omit ()
// const add = a => a;
// console.log(add(20));

// when one return statement and it is an object we can use () to enclose the object in them
// const add = () => ({ name: "ameer", id: 91, age: 23 });
// console.log(add(20, 30));

// we can use arrow funcitons in callbacks

// example:
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//   console.log(element); // double each value inside array using forEach callback method
// });

//

// IIFE

// (function () {
//   console.log("Tis is IIFE");
// })();

// iife  arrow funciton with 2 parameters
// ((a, b) => {
//   console.log(a + b);
// })(10, 20);

// challenges:
// 1
// function minMax() {
//   const max = Math.max(...arguments);
//   const min = Math.min(...arguments);
//   return { min, max };
// }
// console.log(minMax(10, 2, 3, 3, 100, 3, 1, 13));

//2
// ((length, width) => {
//   console.log(
//     `Area of rectangle of length ${length} and width ${width} is ${
//       length * width
//     }`
//   );
// })(10, 20);

// Fahrenheit to celcius:
// Hint: c = ((f - 32) * 5) / 9;

// function getTemp() {
//   let tempInCelcius = prompt("Enter temperature in Celcius");
//   if (!tempInCelcius || !Number(tempInCelcius))
//     alert(`Please enter a valid number`);
//   else {
//     var result = (((parseInt(tempInCelcius) - 32) * 5) / 9).toFixed();
//     console.log(`${result}`);
//   }
// }
// getTemp();
