const express = require('express')
const connetDB = require('./config/db')

const app = express()
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use('/api', require('./routes/producto.routes') )

app.use('/api/health', (req,res) =>{
    res.json({msj:"API is health"})
})
connetDB()
app.listen(PORT, ()=> {
    console.log(`Server running on PORT : ${PORT}`);
})