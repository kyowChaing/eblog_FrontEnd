
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import bgimg from "./img/loginbg.jpg"
import { AuthContext } from "../Providers/AuthProvider";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";





function LogIn() {

  const {user, signInUser,googleLogin,setReload} = useContext(AuthContext);
 
  console.log( 'user info',user)
  const navigate = useNavigate();
  const location=useLocation();

  


  const handleLogin = async(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {email,password}

    try {

      await signInUser(data.email, data.password);

      setTimeout(() => {
        
        Swal.fire({
          title: `Welcome to EBLOG`,
          text: 'Login successful',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        
      }, 300);
      navigate(location?.state || '/');

      } catch (error) {
      Swal.fire({
        title: 'Please Insert Correct User Email and Password',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      reset();
    }
  }

 
  const handleGoogleLogin=async (data) => {
    try {
      await googleLogin();

      // Handle successful login
      setTimeout(() => {
        Swal.fire({
          title: 'Welcome to EBLOG',
          text: 'Log in Success with Google',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        
      }, 300);

      
      navigate(location?.state || '/');

      // fetch('http://localhost:5000/user',{
      //       method:'POST',
      //       headers:{'content-type':'application/json'},
      //       body:  JSON.stringify(data)
      //   })
      //   .then(res=>res.json())
      //   .then(data=>{
      //     // console.log(data);
         
        
      //   })
      
    } catch (error) {
      // Handle login error
    
      Swal.fire({
        title: 'Ops Sorry!',
        text: 'Lgo in Fail .Pleas Check Connection',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };

  return (
   <>
   <div className="flex justify-center p-10 " style={{ backgroundImage: `url(${bgimg})` }}>
   <Card className=" w-4/5 md:w-2/5 bg-[#F9F9F9]">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" name="email" type="email" placeholder="user@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput name="password" id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Log In</Button>
        <div className="flex justify-center pb-2"> Or Sign In Using </div>
          <div className="social-login flex justify-center gap-8">
            <Link><button type="button" onClick={handleGoogleLogin} > <FcGoogle className=" w-10 h-10" /> </button></Link>
            
          </div>
          <div className="register-link">
            Don't have an account?
           
            <Link to="/signup"><button type="button" className=" text-xl font-medium pl-3 text-lime-800"> Register here</button> </Link>
          </div>
      </form>
    </Card>
   </div>
     
   </>
  )
}

export default LogIn