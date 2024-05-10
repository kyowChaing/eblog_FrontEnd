import { Outlet } from "react-router-dom"
import NavBar from "./HomePage/NavBar/NavBar"
import Footer from "./HomePage/Footer/Footer"

function Root() {
  return (
   <>
   <NavBar></NavBar>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default Root