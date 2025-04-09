import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { query } from './db/postgres.js'

// create the app
const app = express()
// set the port number
app.set('port', 3000)
// set up some middleware
// set up some can read the body requests
app.use(express.json())
// middleware to make requests happen from client
app.use(cors())

// base route
app.get('/', (req, res) => {
    res.send("Welcome to the Budget Tracker")
})

// health check route
app.get('/up', (req, res) => {
    res.json({status: 'up'})
})

// GET to grab all transactions from our database
app.get('/transactions', (req, res) => {
    try {
        const qs = `Select * from budget_thc225`
        query(qs).then(data => {res.send(data.rows)})
    } catch (err) {
        res.send('error', err)
    }
})

app.put('/transactions', (req, res) => {
    try {
        let body = req.body
        console.log(body)
        let qs = `Insert into budget_thc225 (description, type, amount, date) values ('${body.description}', '${body.type}', ${body.amount}, '${body.date}')`
        query(qs).then(data => res.send(`${data.rowCount} row inserted`))
    } catch (err) {
        res.send('error', err)
    }
})

app.delete('/transaction/:id', (req, res) => {
    try {
        const transactionID = req.params.id
        let qs = `DELETE FROM budget_thc225 WHERE id = ${transactionID}`
        query(qs).then(data => res.send(`${data.rowCount} row deleted`))
    } catch (error) {
        res.send(error)
    }
})

app.post('transaction/:id', (req, res) => {
    try {
        const transactionID = req.params.id
        const body = req.body
        let qs = `UPDATE budget_thc225 SET "description" = '${body.description}', 
        "type" = '${body.type}', "amount" = ${body.amount}, "date" = '${body.date}'`
        query(qs).then(data => res.send(`${data.rowCount} rows updated`))
    } catch (error) {
        res.send(error)
    }
})

app.listen(app.get('port'), () => {
    console.log("App listening on http://localhost:3000")
    console.log("Press CTRL-C to stop/n")
})
