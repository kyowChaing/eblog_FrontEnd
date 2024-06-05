import { Link } from 'react-router-dom';
import { Avatar, Card, Button, Spinner, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'

import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const queryClient = new QueryClient()


function AllBlogs() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Blogs />
            </QueryClientProvider>
        </>
    )

}


function Blogs() {


    const { user } = useContext(AuthContext);

    //update with Modal
    // const [openModal, setOpenModal] = useState(false);
    // const [email, setEmail] = useState('');

    // function onCloseModal() {
    //     setOpenModal(false);
    //     setEmail('');
    // }


    //use tanstack/react-query
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

    //update with Modal
    // const handlaUpdateBlog = (image, title, shortDescription, longDescription, category) => {
    //     if (user) {
    //         const time = getCurrentDateTime();
    //         const data = { userName: user.displayName, email: user.email, image, title, shortDescription, longDescription, category, time };
    //         console.log('data is', data)
    //         fetch('http://localhost:5000/updateBlog',{
    //             method:'POST',
    //             headers:{'content-type':'application/json'},
    //             body:  JSON.stringify(data)
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //         //   console.log(data);
    //         Swal.fire({
    //             title: `${title} Blog`,
    //             text: 'Added Success into Wishlist',
    //             icon: 'success',
    //             confirmButtonText: 'OK'
    //           })

    //         })
    //     } else {
    //         Swal.fire({
    //             title: `You Need To Sign In `,
    //             text: 'To Add in your Wishlist',
    //             icon: 'error',
    //             confirmButtonText: 'OK'
    //         })
    //     }

    // }

    // add user wishlist 
    const addWishList = (image, title, shortDescription, longDescription, category) => {
        if (user) {
            const time = getCurrentDateTime();
            const data = { userName: user.displayName, email: user.email, image, title, shortDescription, longDescription, category, time };
            console.log('data is', data)
            fetch('http://localhost:5000/wishlist', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    //   console.log(data);
                    Swal.fire({
                        title: `${title} Blog`,
                        text: 'Added Success into Wishlist',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                })
        } else {
            Swal.fire({
                title: `You Need To Sign In `,
                text: 'To Add in your Wishlist',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

    }



    if (isPending) return (
        <div className="flex flex-row justify-center py-28">
            <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
            </Button>
        </div>
    );

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className=" grid border-zinc-100 p-5 rounded-lg gap-2 lg:grid-cols-3 md:grid-cols-2 justify-evenly">
            {
                data.map(blogpost => (
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

                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <Link className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                    Details
                                </Link>
                                <Link onClick={() => addWishList(blogpost.image, blogpost.title, blogpost.shortDescription, blogpost.longDescription, blogpost.category)} className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                    Wishlist
                                </Link>
                                {(user?.email === blogpost?.email) &&
                                    <Link to={`/updateblog/${blogpost._id}`} className="inline-flex items-center rounded-lg border border-gray-300  bg-[#006B79] text-white px-4 py-2 text-center text-sm font-medium  hover:bg-[#1F333F] focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                        Update Blog
                                    </Link>
                                }
                                {/* handlaUpdateBlog(blogpost.image, blogpost.title, blogpost.shortDescription, blogpost.longDescription, blogpost.category)  */}





                            </div>

                        </Card>
                ))
            }



{/* <div>

<Modal show={openModal} size="md" onClose={onCloseModal} popup>
    <Modal.Header />
    <Modal.Body>
        <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
            </div>

            <div className="w-full">
                <Button>Log in to your account</Button>
            </div>

        </div>
    </Modal.Body>
</Modal>
</div> */}




        </div>
    )
}

export default AllBlogs