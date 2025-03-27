import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;
