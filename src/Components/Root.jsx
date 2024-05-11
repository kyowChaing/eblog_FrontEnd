import { Outlet } from "react-router-dom"
import FooterSection from "./HomePage/Footer/FooterSection"
import NavBar from "./HomePage/NavBar/NavBar"




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