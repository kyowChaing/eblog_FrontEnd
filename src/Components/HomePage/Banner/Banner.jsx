
import "./style.css";


function Banner() {
  return (
    <>
        <div className="text-white bgimg " >
     <div className="container mx-auto flex px-2 py-20 items-center flex-col ">
       <div className="text-center lg:w-5/12 w-full">
         <h1 className="my-4 text-5xl font-bold leading-tight">
         Unlock the language of the future.
         </h1>
         <p className="text-2xl mb-7">
         Learn how to code in your own digital destiny.!
         </p>
         <div className="flex justify-center mx-auto">
           <button
             className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-4">
             View Projects
           </button>
           <button
             className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-4">
             Plugins
           </button>
         </div>
       </div>
     </div>
   </div >
    </>
  )
}

export default Banner