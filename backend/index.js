
import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteroute from './route/note.route.js'
import cors from "cors"


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
try{
   
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to Database")
}
catch(error){
    console.log("ERROR ", error)

}

app.use("/noteapp",noteroute)




app.listen(3000 , () => {
  console.log("Server running on port 3000")
})  