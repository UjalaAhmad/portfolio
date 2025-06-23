import Image from "next/image";
import profile from "../../../assesst/WhatsApp Image 2025-05-11 at 13.50.04_4687853b.jpg";
import { BiArrowFromLeft } from "react-icons/bi";
import { CgArrowLeft, CgArrowRightO } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { forwardRef } from "react";

const aboutMe=forwardRef<HTMLDivElement>((props,ref)=>{
return (
    <div className="  mt-10 p-8 bg-gray-50" ref={ref}>
    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
    <div className=" bg-blue-400  w-20 h-1 mb-5">   </div>
    <p className="mb-4">
      

      <br/>
Hello! I'm a Full Stack Developer with over 2 years of experience working across both frontend and backend technologies. While I'm not a specialized frontend designer, I can confidently build and modify user interfaces using tools like React.js, Next.js, Tailwind CSS, and Figma-based layouts.
<br/>
<br/>
My strength lies in understanding how all the pieces fit together — integrating frontend components with backend services built using Node.js, NestJS, and REST APIs. I’ve contributed to a variety of real-world projects, including real estate and e-commerce platforms, where I focused on performance, usability, and code quality.
<br/>
<br/>

I'm continuously learning and expanding my skillset, especially in full-stack environments. I enjoy solving problems, collaborating in agile teams, and working on projects that combine logic with real-world impact.
<br/>
<br/>  </p>
   <div className="flex gap-4 m">
    <div> <Image src={profile} alt="profile image" /></div>
   
    <div> <h1 className="font-bold text-3xl mb-5">Full Stack Developer</h1>
    <p>Hello! I’m Ujala Ahmad, a passionate developer from Lahore, Pakistan,i have completed my Master’s in Computer Science student at Punjab University.
<br/>
I’m building this portfolio to share my projects, learning progress, and skills as I grow in the field of full stack development. I enjoy working with tools like React.js, Next.js, Node.js, and NestJS, and I’m especially focused on creating clean, responsive, and user-friendly web applications.
<br/>
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p><span className="font-bold text-1xl">Birthday:</span> 26 March 1998</p>
  </div>

  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p><span className="font-bold text-1xl">Degree:</span> Master's in Computer Science</p>
  </div>

  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p><span className="font-bold text-1xl">Nationality:</span> Pakistani</p>
  </div>

  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p><span className="font-bold text-1xl">Phone:</span> 03099895529</p>
  </div>

  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p>
      <span className="font-bold text-1xl">Email:</span>
      <span> jayamuzaffar123@gmail.com</span>
    </p>
  </div>

  <div className="flex gap-4">
    <CiCircleCheck className="mt-1" color="#149DDD" />
    <p><span className="font-bold text-1xl">Availability:</span> Open to Work</p>
  </div>
</div>


    </div>
   </div>

  </div>
)

});
export default aboutMe;