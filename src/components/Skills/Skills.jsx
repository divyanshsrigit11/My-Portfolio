import React from 'react';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaCuttlefish,
  FaGitAlt,
  FaPython,
  FaAws
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiSpringboot,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiClerk,
  SiJsonwebtokens,
  SiOpenai
} from 'react-icons/si';

const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-white bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 my-10"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Skills</h1>

      <div className="md:flex md:flex-wrap md:justify-center gap-12">

        {/* Programming Languages */}
        <SkillCategory title="Programming Languages">
          <SkillItem icon={<FaCuttlefish color="#239120" size={40} />} label="C#" />
          <SkillItem icon={<FaJava color="#007396" size={40} />} label="Java" />
          <SkillItem icon={<span className="text-xl font-bold">C</span>} label="C" />
          <SkillItem icon={<span className="text-xl font-bold">C++</span>} label="C++" />
          <SkillItem icon={<span className="text-xl font-bold">Python</span>} label="" />
        </SkillCategory>

        {/* Web Development */}
        <SkillCategory title="Web Development">
          <SkillItem icon={<FaHtml5 color="#E34F26" size={40} />} label="HTML" />
          <SkillItem icon={<FaCss3 color="#1572B6" size={40} />} label="CSS" />
          <SkillItem icon={<FaJs color="#F7DF1E" size={40} />} label="JavaScript" />
          <SkillItem icon={<FaReact color="#61DAFB" size={40} />} label="React.js" />
          <SkillItem icon={<SiNextdotjs className="text-black dark:text-white" size={40} />} label="Next.js" />
          <SkillItem icon={<FaNodeJs color="#83CD29" size={40} />} label="Node.js" />
          <SkillItem icon={<SiExpress color="#FFFFFF" size={40} />} label="Express.js" />
          <SkillItem icon={<SiDotnet color="#512BD4" size={40} />} label="ASP.NET" />
          <SkillItem icon={<SiSpringboot color="#6DB33F" size={40} />} label="Spring Boot" />
          <SkillItem icon={<span className="text-xl font-bold">Tailwind</span>} label="Tailwind CSS" />
          <SkillItem icon={<span className="text-xl font-bold">Bootstrap</span>} label="Bootstrap" />
        </SkillCategory>

        {/* Version Control */}
        <SkillCategory title="Version Control">
          <SkillItem icon={<FaGitAlt color="#F05032" size={40} />} label="Git" />
          <SkillItem icon={<span className="text-xl font-bold">GitHub</span>} label="GitHub" />
        </SkillCategory>

        {/* Databases */}
        <SkillCategory title="Databases">
          <SkillItem icon={<SiMysql color="#00758F" size={40} />} label="MySQL" />
          <SkillItem icon={<SiMongodb color="#47A248" size={40} />} label="MongoDB" />
          <SkillItem icon={<FaDatabase color="#A4373A" size={40} />} label="MS Access" />
          <SkillItem icon={<FaDatabase color="#F29111" size={40} />} label="SQL Server" />
        </SkillCategory>

        {/* Tools & Platforms (New Section) */}
        <SkillCategory title="Tools & Platforms">
          {/* Deployment */}
          <SkillItem icon={<SiVercel className="text-black dark:text-white" size={40} />} label="Vercel" />
          <SkillItem icon={<SiNetlify color="#00C7B7" size={40} />} label="Netlify" />
          
          {/* Auth */}
          <SkillItem icon={<SiClerk color="#6C47FF" size={40} />} label="Clerk" />
          <SkillItem icon={<SiJsonwebtokens color="#D63AFF" size={40} />} label="JWT" />
          
          {/* AI */}
          <SkillItem icon={<SiOpenai className="text-black dark:text-white" size={40} />} label="OpenAI" />
          
          {/* Testing */}
          <SkillItem icon={<SiPostman color="#FF6C37" size={40} />} label="Postman" />
        </SkillCategory>
      </div>
    </div>
  );
};

// Section wrapper for each skill category
const SkillCategory = ({ title, children }) => (
  <div className="mb-10 md:w-[45%] lg:w-[30%] bg-zinc-900 rounded-xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">{children}</div>
  </div>
);

// Skill Icon + Label
const SkillItem = ({ icon, label }) => (
  <div className="flex flex-col items-center text-white gap-1">
    <div className="p-3 bg-zinc-800 rounded-2xl shadow-md">{icon}</div>
    <span className="text-sm text-center">{label}</span>
  </div>
);

export default Skills;
