const express = require('express')
const { port } = require('./config')
const createError =require('http-errors')
const cors = require('cors')
const authRoute = require('./routes/auth')
const transRoute = require('./routes/transaction')

require('./dbconfig')

const app = express()
app.use(cors())
app.use(express.json()) // To parse incoming json data
app.use(express.urlencoded({extended: true})) // To parse incoming form data 

// Setting end points for api
app.use('/api/auth', authRoute)
app.use('/api/transaction', transRoute)

// If route not present
app.use((req,res,next)=>{
  next(createError.NotFound())
})

// Every error will be redirected to here 
app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.send({
      success: false,
      error: {
          status: err.status || 500,
          message: err.message
      }
  })
})

// Setting Port to listen
const PORT = port || 5000
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})