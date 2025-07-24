import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Resume from './components/Resume/Resume.jsx';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <Resume />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import About from "./components/About/About.jsx";
// import Skills from "./components/Skills/Skills.jsx";
// import Experience from "./components/Experience/Experience.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Home from "./components/Home/Home.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx"
// import Projects from "./components/Projects/Projects.jsx";
// import Resume from './components/Resume/Resume';


// function App() {
//   return (
//     <div className="bg-[#171d32] h-auto w-full overflow-hidden">
//     <Navbar/>
//     <Home/>
//     <About/>
//     <Skills/>
//     <Experience/>
//     <Projects/>
//     <Contact/>
//     <Footer/>
//     </div>
//   )
// }

// export default App;
