// this is a single-line comment 
// live code for 05Feb

/* this is a block comment
spanning over
multiple lines
*/


console.log("Hello from Javascript!");


// Variables and DATA TYPES
var aLetter = 'a'
console.log(aLetter);
var aLetter = 'b'
console.log(aLetter);

let username = 'lauri'
console.log(username);
//using let and the same variable name again causes JS to become angry
//let username = 'lauri'

username = 'something_else'
console.log(username);

const somethingThatWontChange = 1
//this will cause an error in the JS runtime
//somethingThatWontChange = 2
const age = 18

// different types
let isbool = true
let isNumber = 20
let isString = "lauri's string"
let anotherString = 'this'
let emptyValues = null
let undefined;

// JS is dynamically typed
let dynVar = 'as a string'
console.log(dynVar, ':', typeof(dynVar))
dynVar = 20
console.log(dynVar, ':', typeof(dynVar))


let add = dynVar + age
console.log(add)
//assignment operator shortcut
//dynVar = dynVar + age
dynVar += age

// string templates
let name1 = 'Allan'
let message = `Hello, ${name1}!`
console.log(message)
let aMessage = `"this will let me do this''"`
console.log(aMessage)

// concat with the + operator if need
let oldMessage = "Hello, " + name1 
console.log(oldMessage)

// string prototype methods
let text = "JavaScript"
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.toLowerCase())
