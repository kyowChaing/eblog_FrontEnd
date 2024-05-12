import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import bgimg from "./img/loginbg.jpg"





function LogIn() {

const {user,createUser,signInUser,logOut,googleLogin,loading,setReload}=useContext(AuthContext);

  const handleLogin = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password);

  }

  const handleGoogleLogin=async (data) => {
    try {
      await googleLogin();
      // Handle successful login
      
      setTimeout(() => {
        toast.success('Login With Google successful');
        
      }, 300);

      // navigate('${locationState}'|| '/');
      navigate(location?.state || '/');
      
    } catch (error) {
      // Handle login error
      toast.error('Login failed: ' + error.message);
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