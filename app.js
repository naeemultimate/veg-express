const express = require('express')
const app = express()
const veges = require('./routes/veges')

app.get('/', (req, res) => {
    res.send('Hello to Veges!')
})

app.use(express.json())
app.use('/veges', veges)

module.exports = app

