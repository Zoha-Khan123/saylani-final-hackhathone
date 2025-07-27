import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-10 shadow-inner">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Left Side - Copyright */}
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">Role-Based Dashboard</span>. All rights reserved.
        </div>

        {/* Right Side - Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a href="/" className="hover:text-gray-400 transition duration-200">Home</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-200">Contact</a>
          <a href="/privacy" className="hover:text-gray-400 transition duration-200">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
