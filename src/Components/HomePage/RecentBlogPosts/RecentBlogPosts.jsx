
import { Link } from 'react-router-dom';
import {Card, Button, Spinner } from "flowbite-react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const queryClient = new QueryClient();


function RecentBlogPosts() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Example />
            </QueryClientProvider>
        </>
    )
}

function Example() {

   const {user} = useContext(AuthContext);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/allblogs').then((res) =>
                res.json(),
            ),
    })

  //get current date and time
    const getCurrentDateTime = () => {
        const currentDate = new Date();
        return currentDate.toLocaleString(); // Format the date and time as a string
      };

// add user wishlist 
    const addWishList=(image,title,shortDescription,longDescription,category)=>{
        if(user){
            const time = getCurrentDateTime();
        const data ={userName:user.displayName, email:user.email,image,title,shortDescription,longDescription,category,time };
        console.log('data is',data)
        fetch('http://localhost:5000/wishlist',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:  JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
        //   console.log(data);
        Swal.fire({
            title: `${title} Blog`,
            text: 'Added Success into Wishlist',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        
        })
        }else{
            Swal.fire({
                title: `You Need To Sign In `,
                text: 'To Add in your Wishlist',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
        
    }

    console.log(data)
    if (isPending) return (
        <div className="flex flex-row justify-center py-28">
          <Button color="gray">
            <Spinner aria-label="Alternate spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      );

    if (error) return 'An error has occurred ' 

    const firstSixItems = data.slice(0, 6);

    return (
        <div className=" grid border-zinc-100 p-5 rounded-lg gap-2 lg:grid-cols-3 md:grid-cols-2 justify-evenly">
            {
                firstSixItems.map(blogpost => (


                    <Card
                        className="max-w-sm"
                        imgAlt=" "
                        imgSrc={blogpost.image}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {blogpost.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {blogpost.shortDescription.slice(0, 100)}....
                        </p>
                        <h3 className=' text-lg'>Category: <span className=' font-semibold'>{blogpost.category}</span></h3>
                        

                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Details
                                </a>
                            </Link>
                            <Link onClick={()=>addWishList(blogpost.image,blogpost.title,blogpost.shortDescription,blogpost.longDescription,blogpost.category)} className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"> 
                                  Wishlist
                            </Link>
                        </div>
                    </Card>
                ))
            }

        </div>
    )
}

export default RecentBlogPosts