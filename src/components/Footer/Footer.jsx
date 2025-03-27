import React from 'react';
import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-black text-white p-4 px-10'>
      <span className='text-sm'>&copy; 2025, All Rights Reserved</span>
      <h1 className='text-lg font-bold'>Divyansh Srivastava</h1>
      <div className='flex space-x-4'>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram size={20} /></a>
        <a href='https://www.linkedin.com/in/divyansh-srivastava-34894b219/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={20} /></a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FaXTwitter size={20} /></a>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook size={20} /></a>
      </div>
    </div>
  );
}

export default Footer;