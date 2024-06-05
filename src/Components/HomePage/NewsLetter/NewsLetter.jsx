import { useContext, useRef } from 'react';
import { Banner, BannerCollapseButton, Button, Label, TextInput } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useState } from "react";





function NewsLetter() {
  
    const [openModal, setOpenModal] = useState(false);
    const formRef = useRef(null);

    const handleSubmit=event=>{
        event.preventDefault();
        
        setOpenModal(true);
        formRef.current.reset();
    
    }
    return (
        <>
            <Banner className=" py-5">
                <div className="flex w-full items-center justify-between bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <div className=" text-center font-bold text-3xl text-[#6B7280] ">
                            <h2> Suscribe To Our</h2>
                            <h1 className=' p-3' >Newsletter</h1>
                            <p>To be updated with all latest post</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <form ref={formRef}  onSubmit={handleSubmit} className="flex w-full justify-center items-center flex-row gap-x-3">
                            <TextInput id="email" name="email"  placeholder="Enter your email" required type="email" />
                            <Button type="submit" >Subscribe</Button>
                        </form>
                    </div>

                </div>
            </Banner>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                {/* <Modal.Header /> */}
                <Modal.Body className=" bg-[#657960]">
                    <div className="text-center p-10 ">
                       
                        <h3 className="mb-5 text-lg font-extrabold text-stone-50 dark:text-gray-400">
                        Thank you for subscribing to our newsletter !
                        </h3>
                        <div className="flex justify-center gap-4">
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