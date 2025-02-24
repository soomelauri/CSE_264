// Learning JS Async

// Some Sync
// console.log('start')
// console.log('middle')
// console.log('end')

// // Introduce a timeout
// console.log('start async')
// setTimeout(() => { // executes after 0.5s
//     console.log('this is a timeout task')
// }, 5000)
// console.log('end async')

// // let's make a callback async
// function doSomethingAsync(callback) {
//     setTimeout(() => {
//         console.log('timeout done')
//         callback() // calling the function callback after 2 seconds
//     }, 2000)
// }

// doSomethingAsync(() => {
//     console.log('Callback Executed')
// })


// Not going to make this pyramid ever again
// setTimeout(() => {
//     console.log('task 1')
//     setTimeout(() => {
//         console.log('task 2')
//         setTimeout(() => {
//             console.log('task 3')
//         }, 1000)
//     }, 1000)
// }, 1000)

// setTimeout is not popular in the real world

// Promises are popular in the real world

// PROMISES!!!

// Promise is an object representing the eventual completion (or failure) of an async operation

/*
    Promises can only be in one of the three states:
    - Pending: initial state
    - Fulfilled: resolved succesfully
    - Rejected: failed
*/

// Promises take two arguments, resolve and reject
// it is possible to write a promise with only resolve - not best practice, we tend not to do this

// New promise
// const myPromise = new Promise((resolve, reject) => {
//     const success = true // this promise will always be a success
//     setTimeout(() => {
//             if(success) {
//                 resolve('Task Completed!') // acts like a return in a normal function
//             } else {
//                 reject('Task Failed') // acts like a return in a normal function
//             }
//     }, 1000)
// })

// console.log(myPromise)
// // after myPromise resolves, do something with the return
// myPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.error(error)
//     })


// Promise Chaining
// Simple Promise that will just return the number 2
// const anotherPromise = new Promise((resolve, reject) => {
//     resolve(2) // return statement returning 2
// })

// anotherPromise
//     .then(result => {
//         return result * 2
//     })
//     .then(result2 => {
//         return result2 * 2
//     })
//     .then(result3 => {
//         console.log(result3 * 2)
//     })


// Microtask Q vs Task Q

console.log('task queue compare') // First

setTimeout(()  => console.log('set time out'), 0) // Fourth - Task Q

Promise.resolve().then(() => console.log('promise resolved')) // Third - Microtask Q

console.log('end') // Second
