`"use client"`
import Image from "next/image";
import pic from "../../assesst/WhatsApp Image 2025-05-11 at 13.50.04_4687853b.jpg"
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaSafari, FaHome, FaUser, FaTools } from "react-icons/fa";
import { FaMessage, FaNoteSticky, FaPhotoFilm } from "react-icons/fa6";
import Link from "next/link";


const sidebar = ({ handleAbutUsRef, handleContactRef, handleHomeRef, handleProjectsRef, handleResumeRef, handleSkillsRef, close }: any) => {
  return (
    <>
      <div onClick={close} className="fixed top-0 left-0 bg-black h-full  w-[70%] sm:w-[40%] lg:translate-x-0 lg:w-[20%] z-20" >
        <Image
          src={pic}
          alt="my portfolio"
          width={100}
          height={100}
          className="mx-auto mt-5 rounded-xl"
        />

        <p className="text-white text-center mt-10">Ujala Ahmad</p>
        <div className="flex felx-row justify-between m-10">     
              <Link href="https://github.com/UjalaAhmad" target="_blank" rel="noopener noreferrer">  <FaFacebook size={20} color="#149DDD" /></Link>
          <Link href="https://github.com/UjalaAhmad" target="_blank" rel="noopener noreferrer"><FaGithub size={20} color="white" /></Link>
          <Link href="https://github.com/UjalaAhmad" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} color="pink" /></Link>
          <Link href="https://www.linkedin.com/in/ujala-ahmad-37b385193/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={20} color="#149DDD" /></Link>
          <Link href="https://github.com/UjalaAhmad" target="_blank" rel="noopener noreferrer"><FaSafari size={20} color="skyblue" /></Link> </div>

        <ul className=" text-white mt-10 ml-10 space-y-8">
          <li className="flex flex-row" onClick={handleHomeRef}> <FaHome size={20} color="skyblue" /><p className="ml-5"> Home</p> </li>
          <li className="flex flex-row" onClick={handleAbutUsRef}><FaUser size={20} color="white" /><p className="ml-5"> About</p></li>
          <li className="flex flex-row" onClick={handleResumeRef}><FaNoteSticky size={20} color="skyblue" /><p className="ml-5"> Resume</p></li>
          <li className="flex flex-row" onClick={handleProjectsRef}><FaPhotoFilm size={20} color="white" />  <p className="ml-5"> Projects</p></li>
          <li className="flex flex-row" onClick={handleSkillsRef}><FaTools size={20} color="skyblue" /> <p className="ml-5"> Skills</p></li>
          <li className="flex flex-row" onClick={handleContactRef}><FaMessage size={20} color="white" /> <p className="ml-5"> Contact</p></li>
        </ul>
      </div></>
  );
}
export default sidebar;