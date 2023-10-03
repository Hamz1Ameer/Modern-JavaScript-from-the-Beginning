// OBJECTS:
// const obj1 = {
//   name: "John",
//   age: 30,
// };
// console.log(obj1);

// const obj2 = new Object({ name: "John", age: 25 });
// console.log(obj2);
//
// const obj3 = new Object();
// obj3.name = "John";
// obj3.age = 30;
// console.log(obj3);

//

// const obj = {
//   name: "Ameer",
//   age: 23,
//   course: ["JS", "HTML", "CSS", "React JS"],
//   isActive: true,
//   "score count": 91,
//   adress: {
//     city: "HYD",
//     country: "INDIA",
//   },
//   getDetails() {
//     console.log(`My name is ${this.name} and my course is ${this.course[0]}`);
//   },
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.course);
// console.log(obj.course[0]);
// console.log(obj["score count"]);
// console.log(obj.isActive);
// console.log(obj["adress"]);
// console.log(obj["adress"].city);
// obj["adress"].State = "Telangana";
// console.log(obj["adress"]);

// obj.getDetails();

//

// const person = {
//   adress: {
//     cords: { lat: 42.9384, lon: -71.3232 },
//   },
// };

// x = person;
// console.log(x);

// //

// var obj1 = {
//   a: 10,
//   b: 20,
// };
// var obj2 = {
//   c: 30,
//   d: 40,
// };
// // x = { ...obj1, ...obj2 };

// x = Object.assign({}, obj1, obj2);
// console.log(x);

//

// const todos = [
//   {
//     id: 1,
//     task: "Breakfast",
//   },
//   {
//     id: 2,
//     task: "Lunch",
//   },
//   {
//     id: 3,
//     task: "Dinner",
//   },
// ];

// console.log(todos[1].id);
// console.log(Object.keys(todos));
// console.log(Object.values(todos));
// console.log(Object.entries(todos));

//

//

// const firtName = "Ameer";
// const lastName = "Hamza";
// const age = 23;
// const person = {
//   firtName: firtName,
//   lastName: lastName,
//   age: age,
// };

// console.log(person);

// const firtName = "Ameer";
// const lastName = "Hamza";
// const age = 23;
// const person = {
//   firtName,
//   lastName,
//   age,
// };

// console.log(person);

//

//Destructuring:

// const person = {
//   firtName: "Ameer",
//   lastName: "Hamza",
//   age: 23,
// };

// const { firtName, lastName, age } = person;
// console.log(firtName, lastName, age);

// const person = {
//   firtName: "Ameer",
//   lastName: "Hamza",
//   age: 23,
// };

// const { ...rest } = person;
// console.log(rest);

// const { firtName, ...rest } = person;
// console.log(firtName, rest);

//

//

//
//JSON:
// const post = {
//   id: 1,
//   title: "My First Post",
//   body: "This is my first blog",
// };

// let str = JSON.stringify(post);

// console.log(str); // {"id":1,"title":"My First Post","body":"This is my first blog"}

// let obj = JSON.parse(str);
// console.log(obj); //{...}

//

//

// const post = {
//   id: 1,
//   title: "My First Post",
//   body: "This is my first blog",
// };
// const { title: front } = post;
// console.log(front);
