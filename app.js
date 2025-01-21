const express = require('express')
const cors = require('cors')
const app = express()
const fruits = require('./routes/fruits')



app.get('/', (req, res) => {
    res.send('Hello to Fruits!')
})

//Middleware
app.use(cors())
app.use(express.json())
app.use('/fruits', fruits)

module.exports = app

