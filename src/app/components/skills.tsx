import { forwardRef } from "react";

const services=forwardRef<HTMLDivElement>((props,ref)=>{
return(<div className="  p-8" ref={ref} >

        <p className="font-bold text-3xl mt-10 ">Skills</p>
<div className="grid grid-cols-2 gap-4 mt-5 shadow-lg p-8 bg-blue-50">
  <div><p>HTML</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[90%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>CSS</p>
  <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[90%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
        <div><p>Tailwind</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[80%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>Javascript</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[80%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>React js</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[80%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>Next js</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[60%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
       <div><p>Node js</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[60%] lg:w-[90px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>Nest js</p>
  <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[50%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
        <div><p>mongoo db</p>
  <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[70%] lg:w-[90px] bg-blue-400 h-2"></div>
</div>
</div>
    <div><p>REST API'S</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[80%] lg:w-[100px] bg-blue-400 h-2"></div>
</div>
</div>
            <div><p>Problem Solving</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[70%] lg:w-[130px] bg-blue-400 h-2"></div>
</div>
</div>
            <div><p>Git (version control)</p>
 <div className="w-full bg-gray-100">
  <div className="w-full sm:w-[60%] lg:w-[90px] bg-blue-400 h-2"></div>
</div>
</div>

</div>

</div>)
})
export default services;