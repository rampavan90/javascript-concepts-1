//pass by value => Boolean, null, undefined, String and Number(Primitive types)
//pass by reference => Array, Function and Object (called a Objects)

/*----Primitives----*/
// var x = 10; // box x contains value 10, a primitve value
// var y = 'abc';
// var z = null;

//they are copied to another variable by value
// var x = 10;
// var a = x;
// var y = 'abc';
// var b = y;
// console.log(x, a, y, b);
//basically values are copied , these variables are seperate
// these variables are not linked
// x = 15;
// console.log(a, x);

/*----Objects-------*/
//Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
//Objects are given a location in memory, what variables stores is the address of the corresponding location

// var arr = [];
// arr.push(1);
// console.log(arr);

//value, the address contained by the variable is static
//change is the array in memory

//Assigning by reference
//Objects are copied by reference instead of value
// var reference = [1];
// var refCopy = reference; // address is copied
// reference.push(1);
// console.log(reference, refCopy);

// Reassigning a reference
// var obj = { first: 'reference'}; //available for garbage collection
// obj = { second: 'ref2'};
// console.log(obj);

// var person1 = {name: 'pavan', age: 25};
// var person2 = {name: 'pavan', age: 25};
// person2 = person1; //assignign the same ref
// console.log(person1 === person2);
// person2.name = 'kumar';
// console.log(person1 === person2);
// console.log(person1);
// console.log(person2);
// person1.name = 'unilog';
// console.log(person1);
// console.log(person2);
// == and === check the reference

//compare two objects if their properties are equal
// let personOne = {name: 'ram'};
// let personTwo = {name: 'ram'};
// console.log(personOne === personTwo); //false
// console.log(JSON.stringify(personOne) === JSON.stringify(personTwo)); //check if two object's properties are equal
//other way is to recursively loop throught objects and check props







/*----End-----------*/
