const express= require("express")
const connect = require("./src/config/db")
const app= express();
const cors = require("cors")

const sofacontroller= require("./src/controller/sofa_controller")
const chaircontroller= require("./src/controller/chair_controller")
const bedcontroller= require("./src/controller/bed_controller")
const lightcontroller= require("./src/controller/light_controller")
const cartController= require("./src/controller/cart_controller")
const port= process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use("/sofa",sofacontroller)
app.use("/beds",bedcontroller )
app.use("/lights",lightcontroller)
app.use("/chairs",chaircontroller)
app.use("/carts", cartController)


const start = async ()=>{
    await connect();
    app.listen(port, ()=>{
        console.log("Listening on port: ",port)
    })

}
start();