
'use client'
import React, { memo, useState } from 'react';
import Link from 'next/link';
// import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-4">
        <img 
          src="/koinxLogo.svg" 
          alt="Company Logo" 
          className="h-10 w-auto"
        />
      </div>

      {/* Right Side - Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-2xl">X</span>  // Close icon
          ) : (
            <span className="text-2xl">☰</span>  // Hamburger icon
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center space-x-6 w-full md:w-auto mt-4 md:mt-0`}>
        <Link href="/crypto-tax" className="text-gray-700 hover:text-blue-600 transition duration-300">
          Crypto Tax
        </Link>
        <Link href="/free-tools" className="text-gray-700 hover:text-blue-600 transition duration-300">
          Free Tools
        </Link>
        <Link href="/resource-center" className="text-gray-700 hover:text-blue-600 transition duration-300">
          Resource Center
        </Link>
        <Link href="/get-started">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default memo(Navbar);
