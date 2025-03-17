import express from 'express';

const app = express();
const PORT = 3000;

// standard route format is a endpoint
// and a request and a response object
app.get('/', (request, response) => {
    response.send("Welcome to my demo")  
})

const users = [
    {id:1, name: "Jim", age: 25, city: "New York"},
    {id:2, name: "Alice", age: 30, city: "Philadelphia"}
]

app.get('/users', (request, response) => {
    console.log(request

    )
    response.json(users)
})


/* Lets add some parameters
there are 2 ways to add parameters
- :params - these go in the URL and we can use :param to let express know that
these are dynamic
*/

app.get('/users/:userid', (request, response) => {
    const userid = request.params.userid;
    const user = users.find(user => user.id == userid)
    if (user) {
        response.send(user)
    } else {
        response.status(404).send("User not found")
    }
})

/*  
- query parameters - key value pairs after a ? and can be combined with &
query params allow a lot more flexibility
*/

// /users/age/?minAge & maxAge
app.get('/users/filter/age', (request, response) => {
    const minAge = request.query.minAge || 0
    const maxAge = request.query.maxAge || 100

    const filterUsers = users.filter(user => user.age >= minAge && user.age <= maxAge)
    response.json(filterUsers)
})


// /users/city/
app.get('/users/city/:city/filter', (request, response) => {
    const city = request.params.city
    const minAge = request.query.minAge || 0
    const maxAge = request.query.maxAge || 100

    let filterUsers = users.filter(user => user.city == city)
    filterUsers = filterUsers.filter(user => user.age >= minAge && user.age <= maxAge)

    if(filterUsers.length > 0) {
        response.json(filterUsers)
    } else {
        response.status(404).send("Users not found")
    }
})



// to get the server to start, "npm run dev" in terminal
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

