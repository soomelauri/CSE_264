// Lecture 7 continued JavaScript

// JS 2

// let's look at logical operators

let a = 5
console.log(a == '5') // loose equality, converts to common type and evals 
console.log( a === '5') // strict equality, no type conversion


let isAdult = true
let hasID = false

console.log( isAdult && hasID) // both need to be true for this to be true
console.log( isAdult || hasID) // one needs to be true for this to be true
console.log(!isAdult) // not operator

// if else statement
let score = 85
if (score >90) {
    console.log('An A')
} else if (score >=85) {
    console.log('A B')
} else {
    console.log('Not an A')
}

// ternary operator
let age = 17
let canVote = (age > 18) ? "Yes":"No"
console.log(canVote)

// basic for loop
for (let i = 0; i < 5; i++) {
    console.log(`i is ${i}`)
}

// more loop stuff


// Data Structures:


// Arrays

let fruits = ['apple', 'banana', 'orange']
console.log(fruits)
fruits.push('berry') // adds the element to the last position
console.log(fruits)
fruits.pop() // removes the last element
console.log(fruits)
fruits.shift() // removes the first element
console.log(fruits)
fruits.unshift('apple')
console.log(fruits)
