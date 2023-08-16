// const fName = "Ameer";
// const lName = "Hamza";
// const age = 22;

// x =
//   "Hello my name is " + fName + " " + lName + " and i am " + age + " years old";
// console.log(x);

// // template literals

// x = `My name is ${fName} ${lName} and my age is ${age} years old`;
// console.log(x);

//properties and methods:

// const str = "Hello World";
// console.log(str.__proto__);

// const str = "Hello World";
// console.log(str, str.length, typeof str); //  in this case Output will be: Hello World 11 string
//when you use its methods and properties, nehind the scenes JS creates a wraper for str String:
// const str = new String("Hello world");
// console.log(str, str.length, typeof str);  //now output will be: String {'Hello world'} 11 'object'

// // you can check all the methods we can check with prototypes:
// // const str = new String("Hello world");
// const str = "Hello World";
// console.log(str, str.__proto__, typeof str);

// const str = "Hello World";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// access charecter and getting their index numbers
// const str = "Hello World";
// console.log(str[0]);  // 'H'
// console.log(str.charAt(6)); // 'W'
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

//access part of string:
// const str = "Hello World";
// console.log(str.substring(0, 4));
// console.log(str.slice(0, 5));
// console.log(str);

//replacing charecters:
// const str = "Hello World";
// console.log(str.replace("Hello", "Hey"));
// console.log(str.includes("Hell"));
// console.log(str.valueOf());
// console.log(str.split());

// Capitalize challenge in string:

// let str = "develoPer";
// console.log(str);

//this will just convert the first character to uppercase
// console.log(str.charAt(0).toUpperCase() + str.substring(1));

//this will convert the sentence to capitalized case
// console.log(
//   str
//     .split(" ")
//     .map((ele) => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase())
//     .join(" ")
// );





//Math Object
// console.log(Math, typeof Math);

// let x = 10.134, y;

// y = Math.ceil(x);
// y = Math.floor(x);
// y = Math.pow(x, 2);
// y = Math.sqrt(x);
// y = Math.abs(x);
// y = Math.max(1, 8, 2, 4, 0, 6, -1);
// y = Math.random(); // this will give random decimal values between 0 and 1
// y = Math.random() * 10; // to get numbers between 1 -10 in decimal values
// y = Math.floor(Math.random() * 10); // it will give floor values and remove decimals

// console.log(y, typeof y);




//Numbers challenge:  // generate 2 random numbers and return their sum, prod, div, 
// x = Math.floor(Math.random() * 100 + 1);
// y = Math.floor(Math.random() * 50 + 1);
// console.log(x, y);
// console.log(`${x}+${y} = ${x + y}`);
// console.log(`${x}-${y} = ${x - y}`);
// console.log(`${x}*${y} = ${x * y}`);
// console.log(`${x}/${y} = ${x / y}`);
// console.log(`${x}%${y} = ${x % y}`);

