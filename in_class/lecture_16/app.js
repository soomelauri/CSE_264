import express from 'express'
import 'dotenv/config'

import { query } from './db/postgres.js'

// create the app
const app = express()
// set up the port info
app.set('port', 3005)
// set up the JSON Middleware to pull apart our request bodies as needed
app.use(express.json())

app.get('/tasks', (req, res) => {
    try {
        let qs = `Select * from tasks_thc225`
        query(qs).then(data => res.json(data.rows))
    } catch (err) {
        console.log(err)
    }
})

app.get('/tasks/:id', (req, res) => {
    let reqID = req.params.id
    try {
        let qs = `Select * from tasks_thc225 where id = ${reqID}`
        query(qs).then(data => res.json(data.rows))
    } catch (err) {
        console.log(err)
    }
})

app.post('/tasks', (req, res) => {
    let body = req.body
    let title = body.title || null
    let desc = body.description || null
    try {
        let qs = `Insert into tasks_thc225 (title, description) values ($1, $2)`
        let values = [title, desc]
        query(qs, values).then(data => res.json(data.rowCount))
    } catch (err) {
        console.log(err)
    }
})

app.put('/tasks/:id', (req, res) => {
    let taskID = req.params.id
    let body = req.body
    let title = body.title || null
    let desc = body.desc || null
    try {
        let qs = `Update tasks_thc225 set title = $1, description = $2 where id = ${taskID}`
        let values = [title, desc]
        query(qs, values).then(data => res.json(data.rowCount))
    } catch (error) {
        console.log(error)
    }
})

app.delete('./tasks/:id', (req, res) => {
    let taskID = req.params.id
    try {
        let qs = `DELETE from thc225 where id = ${taskID}`
        query(qs).then(data => res.json(data.rowCount))
    } catch (error) {
        console.log(error)
    }
})

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:3005')
    console.log('Press CTRL-C to stop\n')
})
