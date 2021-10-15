const express = require('express')
const {port} = require('./config')

const app = express()

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
const PORT = port || 3000
app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})