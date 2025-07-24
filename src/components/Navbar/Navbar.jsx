import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#171d32]/80 border-b border-white/10 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 text-white relative">
        {/* Logo */}
        <span className="text-2xl font-extrabold tracking-tight hover:tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap">
          Divyansh Srivastava
        </span>

        {/* Hamburger Icon */}
        <div className="md:hidden z-30">
          {menuOpen ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer text-white hover:text-blue-400"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 font-semibold">
          <li><a href="#About" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#Experience" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Experience</a></li>
          <li><a href="#Projects" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Projects</a></li>
          <li><a href="#Contact" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Contact</a></li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <ul
        className={`md:hidden fixed top-16 left-0 w-full bg-[#0f1323]/95 border-t border-white/10 py-6 flex flex-col items-center gap-6 font-semibold transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
        } z-20 text-white`}
      >
        <li><a href="#About" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>About</a></li>
        <li><a href="#Experience" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Experience</a></li>
        <li><a href="#Projects" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Projects</a></li>
        <li><a href="#Contact" className="hover:text-blue-400 transition" onClick={handleNavLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
