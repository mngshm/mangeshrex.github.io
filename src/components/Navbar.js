import React, { useState, useEffect } from 'react';
import logo from './asset/ma.png';
import '../App.css';
import '../darkMode.css';
import { Sun, Moon } from 'phosphor-react';

function Navbar() {
  const [theme, setTheme] = useState('dark');
  // const toggleTheme = () => {
  //   // if (theme === 'light') {
  //   //   setTheme('dark');
  //   // } else {
  //   //   setTheme('light');
  //   // }

  // };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="navbar px-2 sm:px-4 py-4">
      <div className="nav-container flex flex-wrap items-center rounded-xl sm:justify-between mx-auto">
        <a href="https://mangeshrex.tech" className="sm:flex m-1 px-2 items-center">
          <img className="w-10 animate-pulse rounded-full h-10" src={logo} />
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
            <li>
              {/* <button onClick={toggleTheme}></button> */}
              <>
                {theme === 'light' &&
                  (
                    <div className='p-2 bg-blue-600 rounded-full'>
                      <Moon size={20} weight='fill' onClick={() => setTheme('dark')} />
                    </div>
                  )}
                {theme === 'dark' &&
                  (
                    <div className='p-2 bg-blue-600 dark:bg-blue-700 rounded-full'>
                    <Sun size={20} weight='fill' onClick={() => setTheme("light")} />
                    </div>
                  )}
              </>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;