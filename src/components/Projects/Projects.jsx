// Project.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard 
            title="Online News Portal" 
            main="This is a Full-Stack Web Application created in .Net." 
            demoLink=""
            codeLink="https://github.com/divyanshsrigit11?tab=repositories"
        />

        <ProjectCard 
            title="Movie Website" 
            main="This Movie Website is a dynamic platform built to showcase popular and trending movies. Developed with a clean and responsive design, 
            the project offers users an intuitive way to explore and learn more about their favorite films. This project highlights skills in front-end 
            development, API integration, and responsive design, making it an excellent demonstration of real-world web development capabilities" 
            demoLink=""
            codeLink="https://github.com/divyanshsrigit11?tab=repositories"
        />

        <ProjectCard 
            title="Tic-Tac-Toe Game" 
             main="A web-based Tic Tac Toe game developed using HTML, CSS, and JavaScript. It offers a clean, responsive interface where two players can compete, 
             with dynamic updates reflecting the game state and determining the winner." 
             demoLink=""
             codeLink="https://github.com/divyanshsrigit11/TIC-TAC-TOE-Game.git"
        />

        <ProjectCard 
            title="Banking System" 
            main="A comprehensive banking system developed in JAVA using JDBC CRUD operations.
            This project enables efficient management of customer accounts, transactions, and balance inquiries by connecting a 
            Java application to a database for seamless data handling." 
            demoLink=""
            codeLink="https://github.com/divyanshsrigit11?tab=repositories"
        />

        </div>
    </div>
  );
}

export default Projects;
