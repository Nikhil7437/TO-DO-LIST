const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/TodoRoute')
const cors = require("cors")
require('dotenv').config()
const port =process.env.port || 5000;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('connect to the data base'))
.catch((err)=>console.log(err))



app.use(routes)

app.listen(port,(req,res)=>
{
    console.log(` app listning at port localhost:${port}`)
})