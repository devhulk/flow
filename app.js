const express = require('express')
let router = express.Router()
const flow = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
let notificationRouter  = require('./routes/notificationroutes')
require('dotenv').config()

let db = mongoose.connect(process.env.DB)

flow.use(bodyParser.urlencoded({extended:true}))
flow.use(bodyParser.json())
let NRoutes = new notificationRouter
 NRoutes.getRoutes(express,router)
flow.use('/flow/',router)

flow.get('/', (req,res) => {
  res.send('welcome to flow api')
})


flow.get('/flow', (req,res) => {
  
})


flow.listen(process.env.PORT, () => {
    console.log('flow listening on port 3000')
})


