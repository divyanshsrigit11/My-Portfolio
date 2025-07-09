import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-6 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <ProjectCard 
          title="Flick Mania" 
          main="This Movie Search Website is a dynamic platform built to showcase popular and trending movies. Developed with a clean and responsive design, 
          the project offers users an intuitive way to explore and learn more about their favorite films. This project highlights skills in front-end 
          development, API integration, and responsive design, making it an excellent demonstration of real-world web development capabilities." 
          demoLink="https://flickmania.vercel.app/"
          codeLink="https://github.com/divyanshsrigit11/flicksearch"
        />

        <ProjectCard 
          title="Panchayat Khabar-Online News Portal" 
          main="This is a Full-Stack Web Application created in .Net. A web-based news platform built with ASP.NET, offering categorized local 
          to international updates. Designed for instant publishing, user-friendly navigation, and secure, responsive access to timely news content." 
          demoLink=""
          codeLink="https://github.com/divyanshsrigit11?tab=repositories"
        />

        <ProjectCard 
          title="Darpan-Admin Web App" 
          main="The Darpan admin web app is a centralized platform designed to efficiently manage the database and all administrative functionalities 
          of my online news website Panchayat Khabar. It empowers you to oversee and control content, users, and site operations, ensuring smooth operation 
          and up-to-date news delivery." 
          demoLink="https://darpan-admin-web.vercel.app/"
          codeLink="https://github.com/divyanshsrigit11/Darpan-AdminWeb"
        />

        <ProjectCard 
          title="Tic-Tac-Toe Game" 
          main="A web-based Tic Tac Toe game developed using HTML, CSS, and JavaScript. It offers a clean, responsive interface where two players can compete, 
          with dynamic updates reflecting the game state and determining the winner." 
          demoLink="https://tic-tac-toe-game-beryl-ten.vercel.app/"
          codeLink="https://github.com/divyanshsrigit11/TIC-TAC-TOE-Game"
        />
      </div>
    </div>
  );
};

export default Projects;
