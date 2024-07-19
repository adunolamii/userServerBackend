const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
// const adHomeModel = require("./Model/adHome")
const adHomeModel = require("./Models/adHome")
const adAboutModel = require("./Models/adAbout")
const cors = require("cors")
const app = express()

// MIDDLE WARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:["http://localhost:6001", "http://user-app.onrender.com"]
})
)


app.get("/", (req, res)=>{
    res.send(("<h2>hello world</h2>"))
})
 // CREATE adAHOMEEEEE
 app.post("/adHomes", async(req, res)=>{
    try {
      const adHome = await adHomeModel.create(req.body)
       res.status(200).json(adHome)
    } catch (error) {
        res.status(500).json({error})
    }
  }) 
  // READ adHOMEEEEE
app.get("/adHomes", async(req, res)=>{
    try {
       const adHome = await adHomeModel.find(req.body)
       res.status(200).json(adHome)
    } catch (error) {
        res.status(500).json({error})
    }
  })

 // CREATE adABOUTTTTTT
 app.post("/adAbouts", async(req, res)=>{
    try {
      const adAbout = await adAboutModel.create(req.body)
       res.status(200).json(adAbout)
    } catch (error) {
        res.status(500).json({error})
    }
  }) 

   // READ adABOUT
app.get("/adAbouts", async(req, res)=>{
    try {
       const adAbout = await adAboutModel.find(req.body)
       res.status(200).json(adAbout)
    } catch (error) {
        res.status(500).json({error})
    }
  })

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(("data connected"))
})
.catch((error)=>{
    console.log(("error"))   
})


const PORT = process.env.PORT || 6001;
app.listen(PORT, ()=>{
    console.log(`hey! listen on the port ${PORT}`);
})




