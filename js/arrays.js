//api
let postsObj ={};

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json());
const posts = postsPromise.then((json) => json);
posts.then(function(results){
    let postsArray = [];
    postsArray = Object.entries(results);
    console.log(postsArray[0]);
    //Iterate Foreach => llows to run a function for every element of the array.
    //return function is ignored
    // postsArray.forEach((post,postIndex, postArray) => { 
    //     // console.log(post[1].userId);
    //     // console.log(postIndex);
    //     // console.log(postArray);
    // });

    //Searching in array
    // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    // arr.lastIndexOf(item, from) – same, but looks for from right to left.
    // arr.includes(item, from) – looks for item starting from index from, returns true if found.

    // If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.
    // let fruits = ['Apple', 'Pear', 'Banana'];
    // console.log(fruits.includes('Apple')); //case sensitive

    //find and findIndex How do we find an object with the specific condition?
    //The find method looks for a single (first) element that makes the function return true.

    // let result = postsArray.find(post => post[1].userId === 2);
    // console.log(result);

    //findindex returns index where element is found

    // filter

    //same as find but for many items

    // let result = postsArray.filter(post => post[1].userId === 2);
    // console.log(result);

    /*--Transform an araay and reorder an array--*/
    
    // map => very useful returns new array after transforming

    // let postsStartTexts = postsArray.map(post => post[1].title.slice(0,10));
    // console.log(postsStartTexts);

    //Sort => sorts array in place || coverted to string and sort by default
    // so we have to write sort function
    // let arr = [ 15, 1, 2 ];
    // function compare(a, b) {
    //     if (a > b) return 1; // if the first value is greater than the second
    //     if (a == b) return 0; // if values are equal
    //     if (a < b) return -1; // if the first value is less than the second
    //   }

    //   arr.sort(compare);
    //   console.log(arr);

    //reverse => reverses the order of elements in arr. || returns new array

    //Split and join ?

    //reduce
    // When we need to iterate over an array – we can use forEach, for or for..of.

    // When we need to iterate and return the data for each element – we can use map.

    //reduce is used for calculating a single value based on the array

    // arguments: accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
    // item – is the current array item.
    // index – is its position.
    // array – is the array.
    // let arr = [1, 2, 3, 4 , 5];
    // let result = arr.reduce((sum, current) => sum + current, 0)
    // console.log(result);

    

});



// Arrays usage
//ordered collection || indexed data structure
//list of something: users, goods, HTML elements etc.
// insert between two elements, Objects don't provide those functionality

//Declaration

// let arr = new Array();
// let arr = []; // mostly used

// Indexed from 0 || access elements || replace el || add more items to array
// length property
//can store any type of elements || nested

// queue || Push, push appends an element to the end || shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st. || FIFO

// stack || push adds an element to the end.
// pop takes an element from the end. || LIFO
 
// let fruits = ["Apple", "Orange", "Pear"];
// let fruitPopped = fruits.pop();
// console.log(fruitPopped);

// fruits.push("Pear");
// console.log(fruits);


//Shift => Extracts the first element of the array and returns it:
//Unshift => Add the element to the beginning of the array:

//Array => special kind of obj || Object with addditional methods
// it is copied by ref

// contiguous ordered data => use arrays
// arbitrary keys => use Objects

//Don't do this even if you can like an object

// let fruits = []; // make an array
// fruits[99999] = 5; // assign a property with the index far greater than its length
// console.log(fruits);
// fruits.age = 25; // create a property with an arbitrary name

// /But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

//ways to misuse an array

//Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

//Performance

//Methods push/pop run fast, while shift/unshift are slow.

//Loops
// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// let fruits = ["Apple", "Orange", "Plum"];

// // iterates over array elements => only value
// for (let fruit of fruits) {
//   alert( fruit );
// }

//as arrays for objects

// let arr = ["Apple", "Orange", "Pear"];
// // have internal properties
// for (let key in arr) { 
//   alert(key); // Apple, Orange, Pear
// }

//The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.

//length is writable => Don't do this
//clear array length = 0
// let arr = [1, 2];
// arr.length = 0;
// console.log(arr[0]);

//Don't compare arrays with ===


// Let’s recall the rules:

// Two objects are equal == only if they’re references to the same object.

// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.

// …With an exception of null and undefined that equal == each other and nothing else.

// The strict comparison === is even simpler, as it doesn’t convert types.

// So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

// alert( [] == [] ); // false
// alert( [0] == [0] ); // false


// So, how to compare arrays?

// That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods 


/*-----------Array methods---------------*/

//Add remove items
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//splice => insert remove and replace elements

//slice create arrays => It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

//concat: new array hat includes values from other arrays and additional items.

// let arr = [1, 2];
// arr = arr.concat([3,4],[5,6], 7, 8);
// console.log(arr);

//Practical examples => top => Transform an array and search arrays

//for comparing type of arrays
//Array.isArray
// alert(Array.isArray({})); // false

// alert(Array.isArray([])); // true

// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg. => Not used that often
//we can cover probably while covering objects









/*----------End--------------------------*/
