require('dotenv').config();

const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('./data/database')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded ({
    extended:true
}))
app.use(cors())

// CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Routes
app.use('/', require('./routes'))

// Handling Errors
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error."
    res.status(err.statusCode).json({
        message: err.message
    })
})

// Initialize MongoDB and start the server
mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    } else {
        app.listen(port, () => {
            console.log(`Database is listen and node Running on port ${port}`)
        })
    }
})