const express = require('express')
const connetDB = require('./config/db')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use('/api/health', (req,res) =>{
    res.json({msj:"API is health"})
})

app.use(express.json())

connetDB()
app.listen(PORT, ()=> {    
    console.log(`Server running on PORT : ${PORT}`);
})