import AutoComplete from "../Component/AutoComplete"
import { Company } from "../Constants/schema"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const [selected, setSelected] = useState<Company|null>(null)


    const navigate = useNavigate()

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {   
        event.preventDefault()
        axios.post("http://localhost:8000/company", selected)
        .then((result)=>{
            console.log("Posted data succesfully")
        })
        .catch((err)=>{
            console.log("Facing error posting "+ err)
        })
        navigate("/list", {"state":{"company":selected}})
    }

    return (
        <form className="flex flex-col items-center bg-gray-300 mt-2" onSubmit={handleSubmit}>
            <div className="text-xl font-bold my-2">Search for the Company</div>
            <AutoComplete selected={selected} setSelected={setSelected} />
            <button className="bg-teal-600 text-white rounded-xl px-3 py-2 my-2" type="submit">Submit</button>
        </form>
  )
}

export default Home