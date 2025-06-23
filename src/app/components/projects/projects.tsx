import { forwardRef, useState } from "react";
import Image from "next/image";
import pic from '../../../assesst/bg.jpg';
import bmjm from '../../../assesst/bmjjmain.png';
import bmj from '../../../assesst/bmjj.png';
import glm from '../../../assesst/globalmain.png';
import gl from '../../../assesst/gobal.png';
import glba from '../../../assesst/global1.png';
import m from '../../../assesst/maik.png';
import ma from '../../../assesst/malik1.png';
import mb from '../../../assesst/malikl.png'
import mc from '../../../assesst/malik2.png';;
import Modal from './projectModal';

const projects=forwardRef<HTMLDivElement>((props,ref)=>{
    const [openModal,setOpenModal]=useState(false);
    const [filterData,setFilteredData]=useState({});
    const projects=[{id:"3",project:mb},{id:"1",project:glm},{id:"2",project:bmjm},
    //     {id:"4",project:glba,

    // }
    // ,{id:"5",project:ma,

    // },{id:"6",project:mb,

    // },{id:"7",project:mc,

    // },{id:"8",project:bmj,

    // },{id:"9",project:glm,

    // }
]
    const data=[
      {id:"1",image:[{pic:glm},{pic:glba}]},
    {id:"2",image:[{pic:bmjm},{pic:bmj}]},
     {id:"3",image:[{pic:ma},{pic:mb},{pic:mc}]},
]

const handleModal=(id:string)=>{
  const result=data.filter(v=>v.id==id)
setFilteredData(result);
    setOpenModal(true);
}
const closeModal=()=>{
  setOpenModal(false);
}
console.log("open modal",openModal,filterData)

return(<div className=" p-8 bg-gray-50" ref={ref} >
    <p className="font-semibold text-3xl">Projects</p>
<div className="grid grid-cols-2 gap-5 mt-10 rounded-xl">
  {projects.map((item) => (
    <div key={item.id} className="relative group rounded-xl overflow-hidden shadow-l">
      
      {/* Image with light effect on hover */}
      <Image
       onClick={()=>handleModal(item.id)} 
        src={item.project}
        alt="project"
        className="rounded-xl transition duration-300 group-hover:brightness-50"
      />

      {/* Plus sign in the center on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-white text-7xl drop-shadow-lg" >more</span>
      </div>

    </div>
  ))}
</div>
 {openModal && <Modal close={closeModal} projects={filterData}/>}


</div>)
})
export default projects;