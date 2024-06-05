import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import bgimg from "./img/regimg.jpeg"




function Register() {
  const { createUser,updateUserProfile,setReload } = useContext(AuthContext);
  const navigate=useNavigate();

  const  handleSignin = async (event) => {
    event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = {displayName,photoURL,email,password}
    try {
      const regexUpper = /[A-Z]/;
    const regexLower = /[a-z]/;
    const regexDigit = /[0-9]/;
    if (
      !regexUpper.test(data.password) ||
      !regexLower.test(data.password) ||
      !regexDigit.test(data.password) ||
      data.password.length < 6
    ) {
      Swal.fire({
        title: 'Opps! ',
        text: 'Password must contain at least one uppercase letter,one lowercase letter, one digit and be at least 6 characters long',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }
      await 
      createUser(data.email,data.password).then(result=>{
              updateUserProfile(data.displayName,data.photoURL).then(()=>{
                // setReload(true);
                setTimeout(() => {
                  Swal.fire({
                    title: 'Welcome to EBLOG',
                    text: 'Sing Up Success',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  
                }, 300);
                setReload(pre=>!pre); 
                navigate('/');
              })
            
          })
      
    } catch (error) {
      Swal.fire({
        title: 'Sign Up failed',
        text: 'User olrady exist',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      reset();
    }


    fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:  JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data);
        
        })
  };

  

  return (
    <>
    <div className="flex justify-center p-8 " style={{ backgroundImage: `url(${bgimg})` }}>
   <Card className=" w-4/5 md:w-2/5 bg-[#F9F9F9]">
      <form onSubmit={handleSignin} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your Name" />
          </div>
          <TextInput id="name1" name="displayName" type="text" placeholder="User Name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="img1" value="Your image" />
          </div>
          <TextInput id="img1" name="photoURL" type="url" placeholder="Photo URL" required />
        </div>
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
        <Button type="submit">Sign Up</Button>
          <div className="register-link">
            Have an account?
           
            <Link to="/login"><button type="button" className=" text-xl font-medium pl-3 text-lime-800"> Sign In</button> </Link>
          </div>
      </form>
    </Card>
   </div>
    </>
  )
}

export default Register
