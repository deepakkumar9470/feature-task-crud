import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar/>
     <div className="my-2">
      <Outlet/>

     </div>
    </>
  )
}

export default App
