import Image from 'next/image'
import pic from "../../../assesst/bg.jpg"
import { forwardRef } from 'react';
import { CiCircleInfo, CiCircleList } from 'react-icons/ci';
import { AiOutlineCiCircle } from 'react-icons/ai';
import { FaCircle, FaGgCircle } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';

const resume = forwardRef<HTMLDivElement>((props, ref) => {

  const experience = [{
    id:"1",
    designation: "Software Developer", company: "Tech Fista", date: "Feb 2024 - Oct2024", name: "",
    detail: "Worked on a real estate web application where I implemented key UI/UX design changes using React, based on Figma designs, to enhance user experience across devices. Integrated RESTful APIs using Node.js and improved functionality for features like property listings, search filters, and user interactions.Focused on optimizing the platform for performance and responsiveness, ensuring a smooth user journey. Collaborated closely with designers and backend teams to deliver a cohesive and efficient product."
  },
  {    id:"2",
    designation: "Full Stack Developer", company: "Coderz Hunt", date: "Dec,2022 - Jan,2024", name: "Martail Karate School",
    detail: "Worked on a Martial Arts (Karate) application, building a responsive user interface using React, and integrated the frontend with a Node.js backend using NestJS for seamless API communication. Worked on a basic blog platform using Next.js and markdown integration Built small components and helped in converting Figma designs into responsive pages Gained practical knowledge of React hooks and routing"
  },

  {    id:"3",
    designation: "Associate Software Developer ", company: "Celestial Technologies", date: "Feb 2024 - Oct2024",
    projects: [{
    id:"7",  name: "Malik Oil Store", detail: " eveloped and maintained features for a oil store from UI till Receipt generator using React and Tailwind CSS Used Next.js for server-side rendering and routing Integrated RESTful APIs and handled state management using Redux.Build the simple backend using Node.js",
    },
    {    id:"4",
      name: "Xenon Store(e-commerce website)", detail: "Contributed to frontend layout improvements using React and CSS, enhancing userexperience and responsiveness.Integrated APIs for features such as product listing, cart management, and orderprocessing using Axios and RESTful endpoints. Build the backend to connect frontend components with Node.js/NestJS APIs. Participated in code reviews and used Git for version control in a team environment."
    }]
  },
  {    id:"5",
    designation: "WordPress Developer", company: "Freelancer", date: "2018 - 2020", name: "",
    detail: " Yourstartup-thinkfic,com Course website for UAE  client Findmymystry.com Blogging site for a Pakistani  client Business site Business website for US client Virtual  assistant Data entry Work related to websites searching for  Pakistani client"

  }]


  return (
    <div className=' p-8' ref={ref}>
      <p className='text-black text-2xl font-semibold'>Resume </p>
      <div className='bg-blue-400 mt-3 mb-5 h-1 w-20'></div>
      <p>I'm a passionate Full Stack Developer with 2+ years of experience developing clean, responsive, and user-focused web applications. I have hands-on experience working with React.js, Next.js, and integrating backend systems using Node.js and NestJS.

        I’m confident in using JavaScript, building reusable components, and connecting frontend interfaces with REST APIs. While I continue growing my skills in full stack development, I focus on writing maintainable code, improving performance, and delivering a better user experience.</p>
      <div className='bg-blue-400 hx-2 w-1 '></div>
      <div className='grid grid-cols-2 gap-4 mt-10'>
<div className="px-4 sm:px-6 md:px-8">
  <div className="flex items-center mb-4">
    <FaGgCircle className="text-2xl mr-3 text-[#149DDD]" />
    <h1 className="font-bold text-2xl">Experience</h1>
  </div>

  <div className="pl-2 sm:pl-5 w-full">
    {experience.map((item) => (
      <div key={item.id} className="mb-8">
        <div className="flex items-start">
          <FaCircle className="mt-1.5 text-sm text-[#149DDD] mr-2" />
          <h1 className="font-bold text-lg sm:text-xl">{item.designation}</h1>
        </div>

        <div className="ml-6 mt-1 text-sm sm:text-base w-full">
          <h2 className="font-semibold">{item.company}</h2>
          <p className="text-gray-700 mb-1">{item.date}</p>

          {item.name || item.detail ? (
            <>
              {item.name && <p className="font-semibold">{item.name}</p>}
              <ul className="list-disc pl-5 text-gray-800 break-words whitespace-normal">
                {item.detail
                  .split(".")
                  .filter(Boolean)
                  .map((sentence, idx) => (
                    <li key={idx} className="mb-1">
                      {sentence.trim()}.
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            item?.projects?.map((project, index) => (
              <div key={index}>
                <p className="font-semibold">{project.name}</p>
                <ul className="list-disc pl-5 text-gray-800 break-words whitespace-normal">
                  {project.detail
                    .split(".")
                    .filter(Boolean)
                    .map((d, i) => (
                      <li key={i} className="mb-1">
                        {d.trim()}.
                      </li>
                    ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    ))}
  </div>
</div>


        <div>
          <div className='flex'>
            <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
            <h1 className='font-bold text-2xl mb-5'>Education</h1>
          </div>

          <div className='ml-9'>
            <p className='font-semibold text-1xl '>  Masters in Computer Science </p>

            <p className='mb-3'>
              Punjab University of Information Technology
              <br />
              2018 - 2020
              <br />
              3.3/4
              <br />
              National Blood Bank System (FYP)</p>

            <p className='font-semibold text-1xl'>Bachelors in Computer Science </p>
            <p className='mb-3'>Oxford College, Lahore
              <br />
              2016 - 2018
              <br />
              First Div</p>
            <p className='font-semibold text-1xl '>Intermediate in Computer Science </p>
            <p className='mb-3'>
              Govt Degree College for women
              <br />
              2014 - 2016
              <br />
              First Div
            </p>
          </div>
          <div className='mt-8'>
            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Courses</h1></div>

            <div className='ml-9 mb-5'>
              <h1 className='font-semibold text-1xl'>React.js course </h1>
              Udemy
              <br></br>
              All essentials to become a react.js front end developer - 2020
            </div>
            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Certifications</h1></div>

            <div className='ml-9 mb-5'>
              <h1 className='font-semibold text-1xl'>Best Category At National Level

              </h1>
              Intel Scinece Fiar
              <br></br>
              Feb,2014 - Nov,2014


            </div>
            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Internship</h1></div>
            <div className='ml-9 mb-5'>
              <h1 className='font-semibold text-1xl'>Celestial Technology


              </h1>
              Sep 2021 - Nov 2021
              <br />
              During my internship, I gained hands-on experience with the React library, deepening my
              understanding of modern frontend development.
              <br />I learned how to collaborate effectively in a
              team environment, use Git for version control, and follow best practices for writing clean and
              maintainable code.<br /> This experience helped me build a strong foundation and prepared me to
              take on responsibilities as an Associate Software Developer.

            </div>

            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Volunteer Experience
              </h1></div>
            <div className='ml-9 mb-5'>
              <h1 className='font-semibold text-1xl'>
                Ad Asia Ambassador

              </h1>
              Volunteer
              <br></br>
              2019



            </div>
            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Hobbies</h1></div>

            <div className='ml-9 mb-5'>
              <ul className='list-disc'><li>Volunteering or participating in
                community events </li>
                <li>Gardening or plant care </li>

                <li>Traveling and exploring new cultures</li>
              </ul>
            </div>
            <div className='flex'>
              <FaGgCircle className='text-2xl mr-3 mt-1' color='#149DDD' />
              <h1 className='font-bold text-2xl mb-1' >Langugaes</h1></div>

            <div className='ml-9 mb-5'>
              <ul className='list-disc'><li>Urdu</li>
              <li>English</li>
              <li>Punjabi</li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default resume;