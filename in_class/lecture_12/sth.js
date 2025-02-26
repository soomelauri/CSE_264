// // go back in time to monday
// // if there are long running opertaions in the sunc code, the async queue will just wait

// console.log('start')

// setTimeout(() => console.log('Timeout done'), 100) // this is going to sit in the queue until
// // the sync code is done

// for (let i = 0; i <1e10; i++) {} // long running for loop

// // console.log('end')


// // Promise.all let's you watch multiple promises at once and do something when they are all finished
// const promiseAll1 = Promise.resolve('First Task')
// const promiseAll2 = Promise.resolve('Second Task')
// // const promiseAll3 = Promise.resolve('Third Task')

// // Promise.all([promiseAll1, promiseAll2, promiseAll3])
// //     // results are returned in the same order of the promise array
// //     .then(results => {
// //         console.log(results[0])
// //         console.log(results[1])
// //         console.log(results[2])
// //     }
// //     )
// //     .catch(error => console.error(error))


// // // Promise.race resolves or rejects once one promise is 
// // const promiseRace1 = new Promise(resolve => setTimeout(resolve, 1000, 'first task done'))
// // const promiseRace2 = new Promise(resolve => setTimeout(resolve, 500, 'second task done'))

// // Promise.race([promiseRace1, promiseRace2])
// //     // Does not return an array of promises, only the promise that finished
// //     .then(result => {
// //         console.log(result)
// //     })


// // ASYNC/AWAIT Functions!!!
// const myPromise = new Promise((resolve, reject) => {
//     const success = true // always resolving
//     setTimeout(() => {
//         if(success) {
//             resolve('Task Complete')
//         } else {
//             reject('Task Failed')
//         }
//     }, 1000)
// })

// // on monday we did .
// myPromise
//     .then(result => {
//         console.log('Result')
//     })


// async function waitForMyPromise(myPromise) {
//     const result = await myPromise
//     console.log('waiting for my promise in the function')
//     console.log(result)
// }

// waitForMyPromise(myPromise)


// // multiple async tasks now

// async function processTasks(task1, task2) {
//     const result1 = await task1
//     const result2 = await task2
//     console.log(result1)
//     console.log(result2)
// }

// processTasks(promiseAll1, promiseAll2)

// // parallel

// async function processTasksBetter(task1, task2) {
//     const [result1, result2] = await Promise.all([task1, task2])
// }

// Promises are special for a couple of reasons, but one reason is that we can set up multiple listeners
// for one promise

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("data fetch successful!"), 1000)
// })

// // listener 1
// promise.then(result => console.log('listener 1:', result))
// // listener 2
// promise.then(result => console.log('listener 2:', result))
// // listener 3
// promise.then(result => console.log('listener 3:', result))


// let's go get some real life data from an API
// let's use fetch to go get users from jsonplaceholder.typicode.com

// fetch returns a promise that can be resolved or rejected

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log('this is all user data')
//         data.forEach(el => console.log(el.name))
//         // console.log(data)
//     })


// turn into an async function
// async function fetchUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json
//     return data
// }

// fetchUsers()

// we can also attach listeners to this as well

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

userPromise.then(data => console.log(data.name))
userPromise.then(data => console.log(data.email))
