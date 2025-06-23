"use client";
import Image from "next/image";
import pic from "../../../assesst/bg.jpg"
import Sidebar from "../sidebar";
import About from '../about us';
import Resume from "../resume";
import Contact from "../contact";
import Projects from "../projects/projects";
import Skills from "../skills";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
const portfolio = () => {
   const [isOpen, setIsOpen] = useState(false);
   
  const aboutUs=useRef<HTMLDivElement | null>(null);
  const projects=useRef<HTMLDivElement | null>(null);
  const skills=useRef<HTMLDivElement | null>(null);
    const resume=useRef<HTMLDivElement | null>(null);
      const conatct=useRef<HTMLDivElement | null>(null);
   const home=useRef<HTMLDivElement | null>(null);

       const handleHomeRef=()=>{
    window.scrollTo({
       top: home.current?.offsetTop,
      behavior: "smooth",
      
    })
  }

  const handleAboutUsRef=()=>{
    window.scrollTo({
       top: aboutUs.current?.offsetTop,
      behavior: "smooth",
      
    })
  }
  
  const handleProjectsRef=()=>{
    window.scrollTo({
       top: projects.current?.offsetTop,
      left: 0,
      behavior: "smooth",
      
    })
  }
  
  const handleResumeRef=()=>{
    window.scrollTo({
       top: resume.current?.offsetTop,
      left: 0,
      behavior: "smooth",
      
    })
  }
  
  const handleSkillsRef=()=>{
    window.scrollTo({
       top: skills.current?.offsetTop,
      left: 0,
      behavior: "smooth",
      
    })
  }
  
  const handleContactRef=()=>{
    window.scrollTo({
       top: conatct.current?.offsetTop,
      left: 0,
      behavior: "smooth",
      
    })
  }

    return (
        <>
         {/* Mobile Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiMenu size={28} />
      </button>
    
  {isOpen && (
    <div className="lg:hidden" >
    <Sidebar 
      close={() => setIsOpen(false)}
      handleAbutUsRef={handleAboutUsRef}
      handleProjectsRef={handleProjectsRef}
      handleHomeRef={handleHomeRef}
      handleResumeRef={handleResumeRef}
      handleContactRef={handleContactRef}
      handleSkillsRef={handleSkillsRef}
    /></div>
  )}


<div className="hidden lg:block" >
  <Sidebar 
    close={() => {}} // No-op, since we don't need to close on large screen
    handleAbutUsRef={handleAboutUsRef}
    handleProjectsRef={handleProjectsRef}
    handleHomeRef={handleHomeRef}
    handleResumeRef={handleResumeRef}
    handleContactRef={handleContactRef}
    handleSkillsRef={handleSkillsRef}
  />
</div>



        <section
        ref={home}
        className="relative p-8 h-[600px] lg:ml-[20%] overflow-hidden"
      >
        <Image
          src={pic}
          alt="my portfolio"
          fill
          className="z-0 opacity-80 object-cover"
        />
        <div className="absolute z-10 top-1/2 left-8 transform -translate-y-1/2 text-black text-5xl font-bold">
          <p>Ujala Ahmad</p>
        </div>
      </section>
     
 
  
        {/* Main Content */}
          <div className="mt-10  lg:ml-[20%] overflow-hidden " >
                <About ref={aboutUs} />
         
   
       <Resume ref={resume}/>
       <Projects ref={projects}/>
       <Skills ref={skills}/>
       <Contact  ref={conatct}/>
        </div>
      </>
    );

}

export default portfolio;