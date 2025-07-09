import React, { useState } from 'react';
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { CiUser, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("bg-black");
  const [statusMessage, setStatusMessage] = useState(""); // Success/Error messages

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Submitting...");

    try {
      const response = await fetch("https://formspree.io/f/mpwpjzvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setButtonText("Submitted");
        setButtonColor("bg-green-500");
        setStatusMessage("✅ Message sent successfully!");

        setTimeout(() => {
          setButtonText("Submit");
          setButtonColor("bg-black");
          setFormData({ name: "", phone: "", email: "", message: "" });
          setStatusMessage("");
        }, 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setButtonText("Submit");
      setButtonColor("bg-red-500");
      setStatusMessage("❌ Failed to send. Try again!");
    }
  };

  return (
    <div id='Contact' className='flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div className='text-center md:text-left'>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact Me</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
      </div>
      
      <div className='flex flex-col items-center text-center space-y-3 md:w-1/3'>
        <ul className='text-sm md:text-xl space-y-3'>
          <li className='flex items-center gap-2'>
            <MdOutlineEmail size={20} />
            <span>divyanshsri1101@gmail.com</span>
          </li>
          <li className='flex items-center gap-2'>
            <MdPhone size={20} />
            <span>+91 7393988808</span>
          </li>
          <li className='flex items-center gap-2'>
            <MdLocationOn size={20} />
            <span>Lucknow, India</span>
          </li>
          <li className='flex items-center gap-2'>
            <CiLinkedin size={20} />
            <a href="https://www.linkedin.com/in/divyansh-srivastava-34894b219/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn Profile
            </a>
          </li>
          <li className='flex items-center gap-2'>
            <FaGithub size={20} />
            <a href="https://github.com/divyanshsrigit11?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>

      <form className='flex flex-col space-y-4 w-full md:w-1/3' onSubmit={handleSubmit}>
        <div className='flex items-center bg-white text-black px-4 py-3 rounded-lg'>
          <CiUser size={20} className='mr-2' />
          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' className='w-full bg-transparent focus:outline-none' required />
        </div>

        <div className='flex items-center bg-white text-black px-4 py-3 rounded-lg'>
          <MdPhone size={20} className='mr-2' />
          <input type='tel' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone' className='w-full bg-transparent focus:outline-none' required />
        </div>

        <div className='flex items-center bg-white text-black px-4 py-3 rounded-lg'>
          <MdOutlineEmail size={20} className='mr-2' />
          <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='w-full bg-transparent focus:outline-none' required />
        </div>

        <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Message' className='w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none' rows='4' required></textarea>
        
        <button type='submit' className={`${buttonColor} text-white py-3 px-6 rounded-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold`}>
          {buttonText}
        </button>

        {statusMessage && <p className="text-center text-sm mt-2">{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;
