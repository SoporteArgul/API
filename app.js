require('dotenv').config
const express=require('express')
const cors=require('cors')
const app = express()
const PORT=process.env.PORT || 3000
const {dbConnect}=require('./config/mongo')
const morgan=require("morgan")
const path=require("path")

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/app/views"));
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/v1',require('./app/routes'))
dbConnect()
app.listen(PORT, ()=>{
    console.log(`API lista por el puerto ${PORT}`)
})