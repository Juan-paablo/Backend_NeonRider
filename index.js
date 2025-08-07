const express = require('express')
const connetDB = require('./config/db')
const router = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use('/api', router )


app.use('/api/health', (req,res) =>{
    res.json({msj:"API is health"})
})
connetDB()
app.listen(PORT, ()=> {
    console.log(`Server running on PORT : ${PORT}`);
})