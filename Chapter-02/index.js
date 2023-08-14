// Data Types:

// Primitives:
// numbers:
// var num = 10;

// string:
// var str = "Ameer";

//boolean:
// var bool = true;

//null:
// var isEmpty = null;

//undefined:
// var x;
// var y = undefined;

//symbol:
// var sym = Symbol("Hello");

//bigInt:
// var bigNum = 9097899999000000n,
// x = Number.MAX_SAFE_INTEGER;

// Array:
// var arr = [1, 2, 3, 4, 5, 6, 7];

// Object :
// var obj = {
//   name: "Ameer",
//   age: 23,
// };

// functions:
// function fun1() {
//   return "Hello world";
// }

// ===> Primitive types are value types and stores data in the "Stack",
//      whereas reference type is a pointer to an object or array stored on heap memory.

// const output = fun1;
// console.log(output(), typeof output);

// => //

// Value type vs Reference Type:

// var num = 10,
//   newNum = num;
// console.log(num, newNum);

// newNum = 20;

// console.log(num, newNum);

// var num = 10,
//   newNum = num;
// console.log(num, newNum);

// newNum = 20;

// console.log(num, newNum);

//for Non premitive types:

// var person = {
//     name: "John",
//   },
//   newPerson = person;
// console.log(person, newPerson);

// newPerson.name = "Jane";

// console.log(person, newPerson);

//Type conversions:
var num = 10;

//converting string to number:
// const output = parseInt(num);
// const output = +num;
// const output = Number(num);

//converting string to floating number:
// const output = parseFloat(num);

//convert number to String:
// const output = String(num);
// const output = "" + num;
// const output = num.toString();

// convert to Boolean:
// const output = Boolean(num); Falsy values: 0, null, undefined, '', flase, NaN;

// 5 ways which end up to NaN:  and NaN type is a number
// const output = parseInt("string"); //true
// const output = "hello" - 10; // arithmetic operators with string and number will return NaN, except for + operator:
// const output = undefined + undefined;
// const output = 100 - NaN;
// const output = Math.sqrt(-1); // square root of negatives returns NaN

// console.log(output, typeof output);

//

//Operators:
//1. Arithmetic Operators:
// x = 4 + 5;
// x = 4 - 5;
// x = 4 * 5;
// x = 4 / 5;
// x = 4 % 5;

// x = 4;

// console.log(x);

// console.log(++x);
// console.log(--x);
// console.log(x--);
// console.log(x++);
// console.log(x ** 2);

// console.log(x + "2"); // concatination

// Assignment Operator:

// let y = 10;
// // y += 3;
// // y -= 3;
// // y *= 3;
// // y /= 3;
// // y %= 3;

// console.log(y);

//comparison operators:

// let a = 2;

// // x = a == 2;
// // x = a === 2;
// // x = a > 2;
// // x = a >= 2;
// // x = a < 2;
// // x = a <= 2;
// // x = a != 2;
// // x = a !== 2;

// console.log(x);
