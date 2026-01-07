import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-6 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

        <ProjectCard 
          title="SpellBound - AI Background Remover" 
          main="SpellBound is a full-stack AI-powered SaaS application that allows users to instantly 
          remove backgrounds from images with high precision. Designed with a credit-based system, 
          users receive free credits upon signing up and can purchase additional top-ups via a secure payment gateway. 
          The app features a seamless, responsive user interface and a robust backend to handle image processing and 
          transaction management. Built using React, Node.js, Clerk (Auth), and Razorpay." 
          demoLink="https://spell-bound-bg-remover-zpl6.vercel.app/" 
          codeLink="https://github.com/divyanshsrigit11/SpellBound-BG-Remover"
        />

        <ProjectCard 
          title="Blog Platform" 
          main="A dynamic full-stack content management system that empowers users to 
          create, publish, and interact with articles across various categories. Designed 
          with a secure authentication architecture, the platform features a responsive 
          interface for seamless reading and writing experiences. It includes robust 
          functionality for image uploading, category-based filtering, and real-time 
          interactive commenting, supported by a scalable backend handles complex data 
          relationships and media storage. Tech Stack: React.js, Material UI (MUI), Context API, Node.js, Express.js, JWT, Bcrypt, 
          MongoDB (Mongoose), GridFS" 
          demoLink="https://blog-client-seven-omega.vercel.app/" 
          codeLink="https://github.com/divyanshsrigit11/Blog"
        />

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
      </div>
    </div>
  );
};

export default Projects;