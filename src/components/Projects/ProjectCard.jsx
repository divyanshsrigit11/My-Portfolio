// ProjectCard.jsx
import React, { useState } from 'react';
import bannerImg from "../../assets/projects.png";

const ProjectCard = ({ title, main }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='p-5 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl text-center'>
        <img className='p-4 mx-auto' src={bannerImg} alt={title} />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>
            {expanded ? main : main.substring(0, 100) + "..."} 
            {!expanded && main.length > 100 && (
              <span className='text-blue-400 cursor-pointer' onClick={() => setExpanded(true)}> Read more</span>
            )}
        </p>
        <div className='mt-4 p-2 flex justify-center gap-4'>
            <button className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl 
            bg-[#465697]'>Demo</button>

            <button className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl 
            bg-[#465697]'>Source Code</button>
        </div>
    </div>
  );
}

export default ProjectCard;
