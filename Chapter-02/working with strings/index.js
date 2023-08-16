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
