import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 w-full fixed top-0 left-0 z-10 shadow-md">
      <nav className="bg-gray-900 text-white flex items-center justify-between h-[60px] px-6 md:px-10">
      <p href="#Eng-Mohamed" className="px-6 py-3 text-lg font-medium    border border-white
      text-white rounded-lg transition duration-300 shadow-md">
      Eng-Mohamed
</p>

        
<button
  onClick={toggleMenu}
  className="lg:hidden text-white text-3xl"
  aria-label="Toggle menu"
>
  ☰
</button>

        <ul className={`lg:flex ${isOpen ? 'flex' : 'hidden'} space-x-6`}>
          <li>
            <a
              href="#hero"
              className="px-6 py-3 text-lg font-medium   hover:text-blue-500 text-white rounded-lg transition duration-300 shadow-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-6 py-3 text-lg font-medium text-gray-100  hover:text-blue-500 rounded-lg transition duration-300 shadow-md"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="px-6 py-3 text-lg font-medium  hover:text-blue-500 text-gray-100  rounded-lg transition duration-300 shadow-md"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-medium  text-gray-100  hover:text-blue-500 rounded-lg transition duration-300 shadow-md"
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
