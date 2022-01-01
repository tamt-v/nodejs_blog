const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

//Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

//Setup the logger
app.use(morgan('tiny', {stream: accessLogStream}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})