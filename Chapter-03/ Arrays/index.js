// let nums = [1, 2, 4, 5, 3, 6, 7],
//   mixed = [10, "hello", true, null, undefined, ["2d", "Array"]],
//   x;
// // x = nums;
// // x = nums[0];
// // x = nums.length;
// // x = nums[nums.length - 1];
// // x = nums[0] + nums[2];
// // x = mixed;
// // x = `this is a ${mixed[5]}`;
// // nums[0] = 10; this can assign new value at perticular index of array
// // x = nums;

// console.log(x, typeof x);

//

//

// //Array methods:

// let arr = [10, 20, 30, 40, 50],
//   x;

// // x = arr;
// // x = arr.push(60);
// // x = arr.pop();
// // x = arr.shift();
// // x = arr.unshift(60);
// // x = arr.reverse();
// // x = arr.includes(20);
// // x = arr.indexOf(30);
// // x = arr.lastIndexOf(30);
// // x = arr.slice(1, 5); // new array
// // x = arr.splice(1, 3, 2, 3, 4); //updates Original array -- start,  delete count, elements to insert(optional)

// //Methods chainings:
// x = arr.splice(1, 4).reverse().join("").charAt(2);

// console.log(x, arr);

//

// Nesting, and spread and concat arrays

// const fruits = ["apple", "banana", "grapes"],
//   berries = ["strawberry", "blueberry", "raspberry"];
// let x;
// fruits.push(berries);
// x = [fruits, berries];
// x = fruits.concat(berries);

// ... spread
// x = [...fruits, berries];

//flat()   : to flatten nested arrays: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log([1, 2, [3, 4, [5, 6], 7], 8].flat());

// x = Array.from(); //Creates an array from an iterable object.

// console.log(x);
