import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaCuttlefish } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSpringboot, SiDotnet } from "react-icons/si";

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'> 
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color='#E34F26' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color='#1572b6' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color='#F7DF1E' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color='#61DAFB' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaNodeJs color='#83CD29' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiExpress color='#FFFFFF' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color='#47A248' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJava color='#007396' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiSpringboot color='#6DB33F' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiDotnet color='#512BD4' size={50}/>
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCuttlefish color='#239120' size={50}/> {/* Representing C# */}
              </span>

              <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaDatabase color='#F29111' size={50}/>
              </span>
            </div>
        </div>
    </div>
  );
};

export default Experience;


// import React from 'react';
// import {FaCss3, FaFigma, FaHtml5, FaJs, FaReact} from "react-icons/fa"
// import{SiRedis} from "react-icons/si"
// import { FaGoogle } from 'react-icons/fa';
// import { SiMongodb } from 'react-icons/si';
// import { SiNetflix } from "react-icons/si";
// import { FaAmazon } from 'react-icons/fa';

// const Experience = () => {
//   return (
//     <div id='Experience' className='p-10 md:p-24 '> 
//         <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
//         <div className='flex flex-wrap items-center justify-around'>
//             <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <FaHtml5 color='#E34F26' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <FaCss3 color='#1572b6' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <FaReact color='#61DAFB' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <FaJs color='#F7DF1E' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <FaFigma color='#F24E1E' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <SiMongodb color='#47A248' size={50}/>
//               </span>

//               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl '>
//                 <SiRedis color='#FF4438' size={50}/>
//               </span>
//             </div>

//         <div>
//             <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center '>
//                 <FaGoogle color='#4285F4' size={50}/>
//                 <span className='text-white'>
//                     <h2 className='leading-tight'>Software Engineer, Google</h2>
//                     <p className='text-sm leading-tight font-thin'>Sept 2022 - Present</p>
//                     <ul className='text-sm p-2'>
//                         <li>- Work as Software developer</li>
//                         <li>- Senior SDE Developer</li>
//                     </ul>
//                 </span>
//             </div>

//             <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center '>
//             <SiNetflix color='#E50914' size={50}/>
//                 <span className='text-white'>
//                     <h2 className='leading-tight'>Software Engineer, Netflix</h2>
//                     <p className='text-sm leading-tight font-thin'>Sept 2021 - Sept 2022</p>
//                     <ul className='text-sm p-2'>
//                         <li>- Work as Software developer</li>
//                         <li>- Senior SDE Developer</li>
//                     </ul>
//                 </span>
//             </div>

//             <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center '>
//                 <FaAmazon color='#FF9900' size={50}/>
//                 <span className='text-white'>
//                     <h2 className='leading-tight'>Software Engineer, Amazon</h2>
//                     <p className='text-sm leading-tight font-thin'>July 2020 - Sept 2021 </p>
//                     <ul className='text-sm p-2'>
//                         <li>- Work as Software developer</li>
//                         <li>- SDE Developer</li>
//                     </ul>
//                 </span>
//             </div>
//         </div>

//         </div>
//     </div>
//   )
// }

// export default Experience;