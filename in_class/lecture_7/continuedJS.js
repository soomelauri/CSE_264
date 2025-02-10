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


// arrays are 0 indexed so this gets up the fruit in teh 2nd position
console.log(fruits[1])

console.log(fruits.findIndex(el => el === 'banana'))

// trad for-loop
for(let i = 0; i <fruits.length; i++) {
    console.log(fruits[i])
}

// current way to for-loop
// for each is function that allows to call another function looping through each element
// el is each fruit in my array and i just pass the el into the console.log function
fruits.forEach(el => console.log(el))

// objects 
let person = {
    name: "Tom",
    age: 25,
    city: "New York",   
}

console.log(person)

console.log(person.zip)
person.age = 29
console.log(person)

for(let key in person) {
    console.log(`${key}: ${person[key]}`)
}


let person2 = {
    name: "Scott",
    age: 35,
    city: "Philadelphia",
}

// people is now an array of objects (JSON)
let people = [person, person2]

console.log(people)

console.log(people[0].name)

// for looping through the people array to get the names of each person
people.forEach(person => console.log(person.name))
// since people is an array of objects, we can use push, pop, shift and unshift all on the object array
