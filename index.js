const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./routes")
const bodyParser = require("body-parser");
const app=express();
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const mongoAtlas = "mongodb+srv://rahmanekhlaqur:rahman123456@cluster0.clzcel2.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoAtlas,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to db")
})
app.listen(8000, () => console.log("App listening on port 8000"))