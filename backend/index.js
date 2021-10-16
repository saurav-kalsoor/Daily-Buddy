const express = require('express')
const { port } = require('./config')
const createError =require('http-errors')
const authRoute = require('./routes/auth')

require('./dbconfig')
require('./helpers/init_redis')

const app = express()
app.use(express.json()) // To parse incoming json data
app.use(express.urlencoded({extended: true})) // To parse incoming form data 

// Setting auth end points for api
app.use('/auth', authRoute)

// If route not present
app.use((req,res,next)=>{
  next(createError.NotFound())
})

// Every error will be redirected to here 
app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.send({
      error: {
          status: err.status || 500,
          message: err.message
      }
  })
})

// Setting Port to listen
const PORT = port || 3000
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})