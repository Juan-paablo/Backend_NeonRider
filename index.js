const express = require('express')
const connetDB = require('./config/db')
const routes = require('./routes/router')
require('dotenv').config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use('/api', routes )


app.use('/api/health', (req,res) =>{
    res.json({msj:"API is health"})
})
connetDB()
app.listen(PORT, ()=> {
    console.log(`Server running on PORT : ${PORT}`);
})
