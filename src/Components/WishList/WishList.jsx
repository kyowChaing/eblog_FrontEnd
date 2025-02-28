import { Link } from 'react-router-dom';
// import blogs from '../../JSON/blog.json';
import {Card, Button, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import Swal from 'sweetalert2';



const queryClient = new QueryClient();

function WishList() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Example />
            </QueryClientProvider>
        </>
    )
}

function Example() {

const {user}=useContext(AuthContext);
const [wishLists, setWishList]=useState();

const aurl = `http://localhost:5000/userwishlist?email=${user?.email}`;


const { isPending, error, data,refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
        fetch(aurl).then((res) =>
            res.json(),
    
        )
      
})




if (isPending) return (
    <div className="flex flex-row justify-center py-28">
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );

if (error) return 'An error has occurred ' 

const handleDelete=_id=>{

    Swal.fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!"
      }).then(result => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/wishlist/${_id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                
                Swal.fire({
                    title: "REMOVE!",
                    text: "Remove Success from WishList.",
                    icon: "success"
                  });  
                  refetch();  
            }
        })  
      }
    })
}



  return (
    <>
     <div className=" grid md:grid-cols-2 lg:grid-cols-3 mt-5 place-items-center">
                {
                    data.map(blog => (
                        <Card
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={blog.image}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {blog.title}
                            </h5>
                        
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {blog.shortDescription}
                            </p>

                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Details
                                </a>
                                </Link>
                                <button onClick={()=>{handleDelete(blog._id)}}  className="inline-flex items-center rounded-lg border border-gray-300 bg-red-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                    Remove
                                </button>
                        
                            </div>
                        </Card>
                    ))
                }

            </div>
    </>
  )
}

export default WishList