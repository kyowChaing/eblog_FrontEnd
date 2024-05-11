import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


function LogIn() {
  return (
   <>
   <div className="flex justify-center border-2">
   <Card className=" w-4/5 md:w-2/5">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Log In</Button>
        <div className="flex justify-center pb-2"> Or SignUp Using </div>
          <div className="social-login flex justify-center gap-8">
            <Link><button type="button" onClick=''> <FcGoogle className=" w-10 h-10" /> </button></Link>
            <Link><button type="button" onClick=''><BsGithub className=" w-10 h-10" /></button></Link>
          </div>
          <div className="register-link">
            Don't have an account?
           
            <Link to="/register"><button type="button" className=" text-xl font-medium pl-3 text-lime-800"> Register here</button> </Link>
          </div>
      </form>
    </Card>
   </div>
     
   </>
  )
}

export default LogIn