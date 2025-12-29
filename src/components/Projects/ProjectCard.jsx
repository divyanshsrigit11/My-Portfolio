import React, { useState } from 'react';
import bannerImg from "../../assets/projects.png";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm bg-[#0c0e19] text-white rounded-2xl shadow-xl shadow-slate-900 flex flex-col p-5">
      <img className="w-full h-48 object-contain mb-4" src={bannerImg} alt={title} />
      
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{title}</h3>
      
      <p className="text-sm md:text-md leading-relaxed mb-4 text-justify">
        {expanded ? main : `${main.substring(0, 100)}...`}
        {!expanded && main.length > 100 && (
          <span
            className="text-blue-400 cursor-pointer font-medium"
            onClick={() => setExpanded(true)}
          >
            {" "}Read more
          </span>
        )}
      </p>
      
      <div className="mt-auto flex justify-center gap-4 pt-2">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 rounded-3xl py-2 px-4 text-white text-sm md:text-base font-semibold">
              Demo
            </button>
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 rounded-3xl py-2 px-4 text-white text-sm md:text-base font-semibold">
              Source Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;