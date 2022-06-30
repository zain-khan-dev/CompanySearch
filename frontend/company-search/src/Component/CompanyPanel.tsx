import axios from "axios"
import { useEffect,useState } from "react"
import { Company } from "../Constants/schema"


interface Props{
    addedCompany:Company
}

const CompanyPanel:React.FC<Props> = ({addedCompany}) => {


    const [companies, setCompanies] = useState<Company[]>()



    useEffect(()=>{
        axios.get("http://localhost:8000/company/all")
        .then((result)=>{
            const companiesList = result.data as Company[]
            const index = companiesList.findIndex((company)=>company.name == addedCompany.name && company.CIN == addedCompany.CIN)
            if(index == -1)
            {
                console.log(addedCompany)
                console.log(companiesList)    
                companiesList.push(addedCompany)

            }
                
            setCompanies(companiesList)
        })
        .catch((err)=>{
            console.log("There was a problem fetching " + err)
        })

    }, [])


    return (
        <table className="table-auto mx-auto w-3/4 bg-white rounded-xl p-2 ">
        <thead >
            <tr >
                <th className="p-2">Company Name</th>
                <th className="p-2">CIN(Company Identification Number)</th>
            </tr>
        </thead>
        <tbody>
            {companies?.map((company)=>
                <tr key={company.id} className="mt-2 pt-2">
                    <td>{company.name}</td>
                    <td>{company.CIN}</td>
                </tr>
            )}
        </tbody>
        </table>
    )
}

export default CompanyPanel