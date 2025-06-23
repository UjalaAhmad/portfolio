import { forwardRef } from "react";
import { FaAddressBook } from "react-icons/fa";
import {  FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contact=forwardRef<HTMLDivElement>((props,ref)=>{
return(
    <div  className="p-8 bg-gray-50 " ref={ref}>
        <p className="text-3xl font-semibold">Contact Us</p>
        <br/>
        <br/>
        <div className="shadow-lg p-8">
             <div className="flex  font-semibold text-2xl"><FaLocationPin color="#149DDD"/><p className="pl-4">Address</p></div>
        <p>lahore pakistan</p>
        <br/>
        <div className="flex  font-semibold text-2xl">
            <FaAddressBook color="#149DDD"/>
            <h1 className="pl-4" >Contact Us</h1>
        </div>
        
        <p>03099895529</p>
         <br/>
         <div className="flex  font-semibold text-2xl">
           <MdEmail color="#149DDD"/>
            <h1 className="pl-4">Email Us</h1>
         </div>
        
        <p>jayamuzaffar@gmail.com</p>
        </div>
       
    </div>
);
});
export default contact;