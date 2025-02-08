import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 w-full fixed top-0 left-0 z-10 shadow-md">
      <nav className="bg-gray-900 text-white flex items-center justify-between h-[60px] px-6 md:px-10">
        <p className="px-6 py-3 text-lg font-medium border border-white text-white rounded-lg transition duration-300 shadow-md">
          Eng-Mohamed
        </p>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        
        <ul
          className={`lg:flex ${
            isOpen ? "flex flex-col absolute top-[60px] left-0 w-full bg-gray-900" : "hidden"
          } lg:static lg:w-auto lg:flex-row lg:space-x-6`}
        >
          <li className="border-b lg:border-none">
            <a
              href="#hero"
              className="block px-6 py-3 text-lg font-medium hover:text-blue-500 text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#about"
              className="block px-6 py-3 text-lg font-medium text-gray-100 hover:text-blue-500 transition duration-300"
            >
              About Me
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#skills"
              className="block px-6 py-3 text-lg font-medium hover:text-blue-500 text-gray-100 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-6 py-3 text-lg font-medium text-gray-100 hover:text-blue-500 transition duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
