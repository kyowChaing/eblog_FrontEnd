import { Outlet } from "react-router-dom"
import NavBar from "./HomePage/NavBar/NavBar"

function Root() {
  return (
   <>
   <NavBar></NavBar>
   <Outlet></Outlet>
   </>
  )
}

export default Root