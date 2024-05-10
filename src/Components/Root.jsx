import { Outlet } from "react-router-dom"
import NavBar from "./HomePage/NavBar/NavBar"
import FooterSection from "./HomePage/Footer/FooterSection"


function Root() {
  return (
   <>
   <NavBar></NavBar>
   <Outlet></Outlet>
    <FooterSection></FooterSection>
   </>
  )
}

export default Root