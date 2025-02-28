import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";




function OurTechnology() {
  return (
    <>
    <hr />
    <h1 className=' text-slate-500 text-center p-6'> OUR  TECHNOLOGY </h1>
    <div className='flex justify-between'>
       <div>
       <TiHtml5 className=' text-9xl' />
       </div>
      <div>
      <BiSolidFileCss className=' text-9xl' />
      </div>
      <div>
      <RiJavascriptFill className=' text-9xl'/>
      </div>      
    </div>
    </>
  )
}

export default OurTechnology