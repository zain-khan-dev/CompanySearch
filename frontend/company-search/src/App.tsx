import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Container/Home"
import List from "./Container/List"


const App = () => {


  return(
    <div className="bg-gray-300 h-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>

  )
}
export default App