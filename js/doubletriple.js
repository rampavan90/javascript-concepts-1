//Js has two ways to test equality
// == and ===

//  Triple equals

// Strict equality => both the type and the value we are comparing have to be the same.

// console.log(5 === 5);
// console.log(5 === '5');
// console.log(5 == 5);

// 'hello world' === 'hello world'
// true (Both Strings, equal values)
// true === true
// true (Both Booleans, equal values)


// 77 === '77' //false

// 'cat' === 'dog'
// // false (Both are Strings, but have different values)
// false === 0
// // false (Different type and different value)

//Key: both the type and the value we are comparing have to be the same.

/*-----Double equals--------*/
// Performs type coercion
// loose equality

// 77 === '77'
// // false (Number v. String)

// console.log(77 == '77')
// // true

// false === 0
// // false (Different type and different value)

// false == 0
// // true
//six falsy values 

// false — boolean false
// 0 — number zero
// “” — empty string
// null
// undefined
// NaN — Not A Number

//Unless you’re very familiar with JavaScript, loose equality can lead to more headaches than it’s worth.

//Triple Equals is superior to double equals. Whenever possible, you should use triple equals to test equality. By testing the type and value you can be sure that you are always executing a true equality test.