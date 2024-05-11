import React from 'react';
import { Link } from 'react-router-dom';
import errorIMG from '../../public/404.jpg';


function Error() {
  return (
    <>
    <div className=' text-center bg-[#3B8678] text-stone-100'>
    <div className=' flex justify-center '> 
    
        <img className=' mt-7  rounded-2xl' src={errorIMG} alt="" />
    
    </div>
    <div className=' pb-5'>
    <Link to="/"> <button className=' mt-6 bg-[#49AA63] p-2 rounded-xl'> Go To Home </button></Link>
    </div>
   
</div>
</>
  )
}

export default Error