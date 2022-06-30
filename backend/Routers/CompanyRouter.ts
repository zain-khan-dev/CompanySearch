import express from "express"
import AppDataSource from "../config/db.config"
import Company from "../Entity/Company"
import axios from "axios"


const router = express.Router()



router.get("/", (req,res)=>{

    const companySearch = req.query.company
    const companyInfo:any = []
    axios.post("https://www.zaubacorp.com/custom-search", {filter:"company", search:companySearch})
    .then((result)=>{
        
        const companyData = result.data
        let companies = companyData.split('\n')
        companies = companies.map((company:string)=>company.trim()).filter((comp:string)=>comp != '')
        companies = companies.map((comp:string)=>comp.split('id=')[1].split('"')[1])


        companies.forEach((comp:string)=>{
            const splitCompany = comp.split("/")
            const companyName = splitCompany[1]
            const companyCIN = splitCompany[2]
            companyInfo.push({"name":companyName, "CIN":companyCIN})
        })

        return res.json(companyInfo)    
    })
    .catch((err)=>{
        console.log(err)
        return res.status(400)
    })

})


router.get("/all", async (req, res)=>{
    const repository = AppDataSource.getRepository(Company)

    const companies = await repository.find()
    res.json(companies)
})


router.post("/", async (req, res)=>{

    const companyData = req.body

    const company =  new Company()
    company.name = companyData["name"]
    company.CIN = companyData["CIN"]

    
    const companyRepo = AppDataSource.getRepository(Company)
    companyRepo.save(company)
    .then((result)=>{
        return res.json(result)
    })
    .catch((err)=>{
        console.log("Error posting data " + err)
        return res.status(400)
    })
})

export default router
