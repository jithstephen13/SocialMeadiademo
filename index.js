const express= require("express")
const cors=require("cors")
const { connection } = require("./confliq/db")
const { Allroutes } = require("./routes/Allroutes")
require("dotenv").config()


const app=express()

app.use(cors())
app.use(express.json())
app.use("/",Allroutes)



app.listen(process.env.PORT,async()=>{

    try {
       await connection
       console.log("db connected")
        
    } catch (error) {
        console.log(error.message)
        
    }
    console.log(`port lisern ${process.env.PORT}` )

})

