// 1 - Provide examples of how you would implement inheritance using prototypes in JavaScript.

/* 
javascript is a protoype based language, the class structure is syntactic, just like async await.
we can use prototype and assign common functions to prototype to improve memory management.
*/

function Movie(name, author, img) {
  this.name = name;
  this.author = author;
  this.img = img;
}

Movie.prototype.displayMovie = function () {
  console.log(this.name + this.author + this.img);
};

let movie = new Movie("John Wick", "akin", "xyz.com");

// now all movies we create can access this function
movie.displayMovie();

// 2 - If we are using async await structure, we can do error handling in try catch blocks.

/* 
If we use async await structure, we can do error handling in try catch blocks. 
If we use promise structure without syntactic sugar, we catch the error in then catch structure. 
If we are using xhr, we can do error handling from status code
*/

// 3 - This case

// 4 - This

function checkPalindrome(string) {
  return string == string.split("").reverse().join("");
}

// 5 - Explain the difference between 'undefined' and 'null' in JavaScript and when to use each.

/* 
undefined is done by the js engine when a variable is not assigned a value. the variable exists in the memory creation phase of the execution context, but its value has not yet been assigned.
if null is assigned directly by the developer, the type is object. if undefined, the type is undefined.
*/

// 6 - Explain the purpose of the 'this' keyword in JavaScript and how its value is determined in different contexts.

/* in javascript this gives us the current context. for example in the browser this points to the window. we can use the call apply bind methods to determine where this object points. we used this extensively in class based react. */
