import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 p-4 flex justify-between items-center shadow-md animate__animated animate__fadeIn animate__delay-2s">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white mr-6">Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#beranda" className="text-white hover:underline">
          Beranda
        </a>
        <a href="#tentang" className="text-white hover:underline">
          Tentang
        </a>
        <a href="#proyek" className="text-white hover:underline">
          Proyek
        </a>
        <a href="#kontak" className="text-white hover:underline">
          Kontak
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg w-48 py-4 z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-gray-300 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-4 px-4 mt-6">
            <a
              href="#beranda"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Tentang
            </a>
            <a
              href="#proyek"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Proyek
            </a>
            <a
              href="#kontak"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
