
import { useLoaderData, useNavigate,Link} from 'react-router-dom'

import {  Label, Select ,Button, Card, Checkbox,  TextInput } from "flowbite-react";
import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import Swal from 'sweetalert2';
import bgimg from "../../../public/add.jpg"



function UpdateBlog() {
    const bloginfo=useLoaderData();
    // const {user}=useContext(AuthContext);
    // console.log("user is up",user)
    const {image, category,email,title, shortDescription, longDescription}=bloginfo;
    console.log(bloginfo)
    const navigate = useNavigate();
    const formRef = useRef(null);
    

   const handleUpdateBlog = async (event) => {
    event.preventDefault();
    // const form = event.target;
    // const title = form.title.value;
    // const image = form.photoURL.value;
    // const category = form.category.value;
    // const longDescription = form.longDescription.value;
    // const shortDescription = form.shortDescription.value;

    // const data = {email:user.email,category,image,longDescription,shortDescription, title }

    // console.log('data is ',data)
    // fetch('http://localhost:5000/allblogs', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     formRef.current.reset();
    //     Swal.fire({
    //                 title: 'Blog added Success',
    //                 text: 'Thanks for your dedication',
    //                 icon: 'success',
    //                 confirmButtonText: 'OK'
    //               })
    //   })
  };

  return (
    <>
        <div className="flex justify-center p-8 " style={{ backgroundImage: `url(${bgimg})` }}>
        <Card className=" w-4/5 md:w-2/5 bg-[#F9F9F9]">

          <form ref={formRef}  onSubmit={handleUpdateBlog} className="flex flex-col gap-4">
            <div>
              <h2 className=" text-center font-bold text-lg text-zinc-950">Update Blog</h2>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Title" />
              </div>
              <TextInput id="name1" defaultValue={title} name="title" type="text" placeholder="Title" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="img1" value="Image" />
              </div>
              <TextInput id="img1" name="photoURL" type="url" placeholder="Photo URL" required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select Category" />
              </div>
              <Select id="category" name="category" required>
                <option> General Purpose Programming Languages</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Server Side</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large" value="Short Description" />
              </div>
              <TextInput name="shortDescription" id="large" type="text" placeholder=" Short Description" sizing="lg" required />
            </div>
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large" value="Long Description" />
              </div>
              <TextInput name="longDescription" id="large" type="text" placeholder="Long Description" sizing="lg" required />
            </div>
            

            <Button type="submit" >Add</Button>

          </form>
        </Card>
      </div>
    </>
  )
}

export default UpdateBlog
