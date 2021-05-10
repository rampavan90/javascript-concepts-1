// Javascript's implicit coercion simply refers to Javascript attempting to coerce an unexpected value type to the expected type. 
// pass a string when number is expected, object where string is expected
// Please aware of it and try to avoid if you can

/*-----examples-------*/
// console.log(3 * "3");
// console.log(1 + "2" + 1);
// console.log(true + true);
// console.log(10 - true);
// console.log(false - 10);
// const foo = {
//     valueOf: () => 2
//   }
// console.log(3 + foo);
//JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

// const bar = {
//     toString: () => " promise is a boy :)"
//   }
// console.log(1 + bar) // "1 promise is a boy :)"
// console.log(4 * []);
// console.log(4 * [2]);
// console.log(4 + [2]);
// console.log(4 + [1, 2]);
// console.log(4 * [1,2]);

/*--------Rules-------*/
// Whenever you pass a string as an operand in a numeric expression involving either of these operators: -, *, /, %, the number's conversion process is similar to calling the in-built Number function on the value. 

//example

// 3 * "3" // 3 * 3
// 3 * Number("3") // 3 * 3
// Number("5") // 5
// console.log(Number("%^%"));

// The case for the + operator

// concatenation
// 1 + "2" // "12"
// 1 + "js" // "1js"


// addition
// 1 + 2 // 3
// 1 + 2 + 1 // 4

//addition, then concatenation
// 1 + 2 + "1" // "31"
// console.log((1 + 2) + "1") // "31"

//concatenation all through
// 1 + "2" + 1 // "121"
// (1 + "2") + 1 // "121"

//Objects

// console.log("name" + {});
//Every javascript Object inherits a toString method, that is called whenever an Object is to be converted to a string. 

// const foo = {};
// console.log(foo.toString());

// const baz = {
//     toString: () => "I'm object baz"
//   }
  
//   baz + "!" // "I'm object baz!"


//Arrays
//The inherited toString method of Arrays work abit differently, it works in a way similar to calling the join method of an array without any arguments.

// console.log([1,2,3].toString());
// console.log([1,2,3].join());
// console.log([].toString());
// console.log([].join());
// console.log("me" + [1,2,3]);
// 4 + [1,2,3] // "41,2,3"
// 4 * [1,2,3] // NaN

//True and false and ""
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(""));
// 4 + true // 5
// 3 * false // 0
// 3 * "" // 0
// 3 + "" // "3"

//Tip for using null
//checking if your variable has some value => not null or undefined

// let x = null;
// let x;
// if(x == null){ // not === // avoid ugly (x === null || x === undefined)
//     console.log('x is null');
// }


