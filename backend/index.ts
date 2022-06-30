import "reflect-metadata"   
import express from "express"
import dotenv from "dotenv"
import companyRouter from "./Routers/CompanyRouter"
import Company from "./Entity/Company"
import cors from "cors"


const app = express()


dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/company", companyRouter)


const PORT = process.env.PORT


app.listen(PORT, ()=>{
    console.log("The server is running at " + PORT)
})