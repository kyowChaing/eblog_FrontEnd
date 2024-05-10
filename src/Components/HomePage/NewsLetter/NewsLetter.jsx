import { Banner, BannerCollapseButton, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

// const notify = () =>toast.success("Thank you for subscribing to our newsletter !");



function NewsLetter() {
    const [openModal, setOpenModal] = useState(true);

    const handleSubmit=(event)=>{
        event.preventDefault();
        setOpenModal(true);
    }
    return (
        <>
            <Banner className=" py-5">
                {/* <ToastContainer /> */}
                <div className="flex w-full items-center justify-between bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <div className=" text-center">
                            <h2> Suscribe To Our</h2>
                            <h1 >Newsletter</h1>
                            <p>To be updated with all latest post</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <form onSubmit={() => handleSubmit} className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
                            <TextInput id="email" placeholder="Enter your email" required type="email" />
                            <Button type="submit" >Subscribe</Button>
                        </form>
                    </div>

                </div>
            </Banner>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center p-8">
                        {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Thank you for subscribing to our newsletter !
                        </h3>
                        <div className="flex justify-center gap-4">
                            {/* <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                            </Button> */}
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Go Back
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewsLetter