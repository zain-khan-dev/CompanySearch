import {Link, useLocation} from "react-router-dom"
import CompanyPanel from "../Component/CompanyPanel"
import { useNavigate } from "react-router-dom"
import { Company } from "../Constants/schema"


interface locationState {
    company:Company
}

const List = () => {

    const location = useLocation()

    const state  = location.state as locationState
    const newCompany = state.company


    return (
        <div className="text-center flex flex-col w-9/12 mx-auto">
            <Link to="/"><div className="px-3 py-2 mt-4 text-white rounded-xl shadow-xl  bg-teal-600 w-fit">Add Company</div></Link>
            <div className="text-2xl font-bold my-2">List Companies Added</div>
            <CompanyPanel addedCompany={newCompany} />
        </div>
    )
}

export default List