import React, { useState, useEffect } from 'react';
import logo from './asset/m.png';
import '../App.css';
import '../darkMode.css';
import {Link} from 'react-router-dom';
import {Sun, Moon} from 'phosphor-react';

function Navbar() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar px-2 sm:px-20 py-4">
      <div className="nav-container flex flex-wrap items-center rounded-xl sm:justify-between justify-between mx-auto">
        <a href="https://mangeshrex.tech" className="sm:flex  m-1 px-2 items-center">
          <img className="w-10 animate-pulse rounded-full h-10" src={logo} alt="avatar" />
        </a>
        <div className="sm:hidden block transition-all z-40" onClick={() => setShowMenu(!showMenu)}>
          <div className="space-y-2 bg-black p-2 rounded-lg">
            <span className="block w-5 h-0.5 bg-white-400"></span>
            <span className="block w-8 h-0.5 bg-white-400"></span>
            <span className="block w-3 h-0.5 bg-white-400"></span>
          </div>
          <>
            {showMenu && (
              <ul className="trnsition-all px-4 dark:bg-black bg-white-200 dark:text-white block -ml-12 m-2 p-2 absolute flex-col md:flex-row d:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                  <a href="#home" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded  ">Home</a>
                </li>
                <li>
                  <a href="#about" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded md:border-0 ">About</a>
                </li>
                <li>
                  <a href="https://blog.mangesh.xyz" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded md:border-0 ">Blog</a>
                </li>
                <li>
                  <a href="#projects" className="hidden sm:flex py-2 pl-2  hover-underline-animation  rounded md:border-0 ">Projects</a>
                </li>
                <li>
              <Link to="/gallery" className="hidden sm:flex py-2 pl-2  hover-underline-animation  rounded md:border-0 ">Gallery</Link>
            </li>
                <li>
                  <>
                    {theme === 'light' &&
                      (
                        <div className='p-2 bg-white-600 py-2 rounded-full'>
                          <Moon size={20} weight='fill' onClick={() => setTheme('dark')} />
                        </div>
                      )}
                    {theme === 'dark' &&
                      (
                        <div className='p-2 bg-white-600 py-2 dark:bg-blue-700 w-auto rounded-full'>
                          <Sun size={20} weight='fill' onClick={() => setTheme("light")} />
                        </div>
                      )}
                  </>
                </li>
              </ul>
            )}
          </>
        </div>
        <div className="hidden w-full sm:w-auto sm:flex-grow sm:flex sm:justify-end sm:items-center" id="navContent" aria-labelledby="navToggle">
          <ul className="flex uppercase  flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a href="#home" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded  ">Home</a>
            </li>
            <li>
              <a href="#about" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded md:border-0 ">About</a>
            </li>
            <li>
              <a href="https://blog.mangesh.xyz" className="hidden sm:flex py-2 pl-2 hover-underline-animation  rounded md:border-0 ">Blog</a>
            </li>
            <li>
              <a href="#projects" className="hidden sm:flex py-2 pl-2  hover-underline-animation  rounded md:border-0 ">Projects</a>
            </li>
            <li>
              <Link to="/gallery" className="hidden sm:flex py-2 pl-2  hover-underline-animation  rounded md:border-0 ">Gallery</Link>
            </li>
            <li>
              <>
                {theme === 'light' &&
                  (
                    <div className='p-2 bg-black text-white-200 py-2 rounded-full'>
                      <Moon size={20} weight='fill' onClick={() => setTheme('dark')} />
                    </div>
                  )}
                {theme === 'dark' &&
                  (
                    <div className='p-2 bg-white-600 py-2 dark:bg-white-400 dark:text-black rounded-full'>
                      <Sun size={20} weight='fill' onClick={() => setTheme("light")} />
                    </div>
                  )}
              </>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
