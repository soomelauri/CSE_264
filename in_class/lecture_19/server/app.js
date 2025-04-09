import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { query } from './db/postgres.js'

// create the app
const app = express();
// set port at 3005
app.set('port', 3005)
// set up some middleware
app.use(express.json())
// middleware to make requests happen from client
// Replace your current cors setup with this more specific configuration
app.use(cors({
    origin: 'http://localhost:5175', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));


// base route
app.get('/', (req, res) => {
    res.send('Welcome to the Budget Tracker')
})

// health check route
app.get('/up', (req, res) => {
    res.json({ status: 'up' })
})

// GET to grab all transactions from our database
app.get('/transactions', (req, res) => {
    try {
        const qs = `SELECT * FROM budget_thc225`
        query(qs).then(data=> (res.send(data.rows)))
    } catch (error) {
        res.send('error', err)
    }
})

app.put('/transactions', (req, res) => {
    try {
        let body = req.body
        let qs = `INSERT INTO budget_thc225 (description, type, amount, date) VALUES 
        ('${body.description}', '${body.type}', ${body.amount}, '${body.date}')`
        query(qs).then(data => res.send(`${data.rowCount} row insertred`))
    } catch (error) {
        res.send('error', error)
    }
})

app.listen(app.get('port'), () => {
    console.log('App listening on http://localhost:3005')
    console.log('Press ctrl + C to stop\n')
})
