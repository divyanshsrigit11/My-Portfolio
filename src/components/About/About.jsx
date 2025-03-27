import React from 'react';
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center 
    bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About Me</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={AboutImg} alt="About Section" />

          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Full-Stack Web Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  Passionate about building dynamic and responsive web applications using MERN, Java, and .NET technologies.
                  Skilled in React, Node.js, Express, and MongoDB with a strong foundation in both frontend and backend development.
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Java & .NET Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  Experienced in developing scalable applications using Java (Spring Boot) and .NET frameworks.
                  Proficient in database management, API development, and software architecture for enterprise-level solutions.
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Problem Solver & Innovator</h1>
                <p className='text-sm md:text-md leading-tight'>
                  Strong problem-solving abilities with a keen interest in optimizing performance and enhancing user experience.
                  Adept at debugging, troubleshooting, and implementing efficient solutions for complex software challenges.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
