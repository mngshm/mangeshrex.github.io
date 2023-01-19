import React from 'react'; 
import avatar from './logo.svg';
import '../App.css'; 

function Navbar() {
  return (
  <nav className="navbar px-2 sm:px-4 py-4">
    <div className="nav-container flex flex-wrap items-center rounded-xl sm:justify-between mx-auto">
      <a href="https://mangeshrex.tech" className="sm:flex m-1 items-center">
        <img src={avatar} alt="avatar" className="h-8 px-5 sself-center text-xl font-semibold whitespace-nowrap dark:text-white"/>
      </a>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex uppercase flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 ">
          <li>
            <a href="#home" className="block py-2 pl-2 hover-underline-animation pr-2  rounded  ">Home</a>
          </li>
          <li>
            <a href="#about" className="block py-2 pl-2 hover-underline-animation  pr-2 rounded md:border-0 ">About</a>
          </li>
          <li>
            <a href="https://mangeshrex.tech/blog" className="block py-2 pl-2 hover-underline-animation  pr-2 rounded md:border-0 ">Blog</a>
          </li>
          <li>
            <a href="#projects" className="block py-2 pl-2 pr-2  hover-underline-animation  rounded md:border-0 ">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
