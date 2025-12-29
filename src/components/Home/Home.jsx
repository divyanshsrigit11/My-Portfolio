import React from 'react';
import avatarImg from "../../assets/div2.png";
import TextChanger from '../TextChanger';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className='min-h-screen w-full text-white flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 pt-10 md:pt-20'
      id="home"
    >
      {/* LEFT SECTION */}
      <div className='md:w-2/4 text-center md:text-left'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter mb-4'>
          <TextChanger />
        </h1>

        <p className="text-sm md:text-xl tracking-tight mb-6 leading-relaxed">
          <span className="hoverable">Software Developer</span> |{" "}
          <span className="hoverable">Full-Stack Web Developer</span> |{" "}
          <span className="hoverable">MERN</span> |{" "}
          <span className="hoverable">Java</span> |{" "}
          <span className="hoverable">.NET</span>
          <br />
          Proficient in{" "}
          <span className="hoverable">C</span>,{" "}
          <span className="hoverable">C++</span>,{" "}
          <span className="hoverable">C#</span>,{" "}
          <span className="hoverable">Java</span>,{" "}
          <span className="hoverable">React</span>,{" "}
          <span className="hoverable">Node.js</span>,{" "}
          <span className="hoverable">Express</span>,{" "}
          <span className="hoverable">Tailwind CSS</span>,{" "}
          <span className="hoverable">Spring Boot</span>,{" "}
          <span className="hoverable">SQL</span>, and{" "}
          <span className="hoverable">NoSQL</span> |{" "}
          <span className="hoverable">Strong Problem-Solving Abilities</span>
        </p>





        {/* BUTTON GROUP */}
        <div className="flex justify-center md:justify-start gap-4">
          <button
            onClick={() => {
              document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#465697] hover:bg-[#3b4e8e] text-white font-semibold py-2 px-4 text-sm md:text-base rounded-3xl transition duration-300"
          >
            Contact Me
          </button>

          <Link
            to="/resume"
            className="bg-[#465697] hover:bg-[#3b4e8e] text-white font-semibold py-2 px-4 text-sm md:text-base rounded-3xl transition duration-300"
          >
            My Resume
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='mb-8 md:mb-0'>
        <img className='w-60 md:w-80 rounded-xl' src={avatarImg} alt="Developer Avatar" />
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import avatarImg from "../../assets/div2.png";
// import TextChanger from '../TextChanger';

// const Home = () => {
//   return (
//     <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
//       <div className='md:w-2/4 md:pt-10'>
//         <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
//           <TextChanger />
//         </h1>
//         <p className='text-sm md:text-2xl tracking-tight'>
//           Software Developer | Full-Stack Web Developer | MERN | Java | .NET | Proficient in C, C++, C#, Java, React, Node.js, Express, Tailwind CSS, Spring Boot, SQL, and NoSQL | Strong Problem-Solving Abilities
//         </p>
//         <button 
//           onClick={() => { document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" }); }}
//           className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Contact Me
//         </button>
//       </div>

//       <div>
//         <img className='' src={avatarImg} alt="Developer Avatar" />
//       </div>
//     </div>
//   );
// };

// export default Home;