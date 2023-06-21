import React from 'react';
import '../App.css';
import arrow from './asset/arrow.svg';

export default function Welcome() {
  return (
    <React.Fragment>

      <div id="home" className="welcome sm:h-screen 2xl:w-sm">
        <div className="m-auto sm:bloc flex flex-col h-screen top-0 bottom-0 justify-center sm:px-24 sm:py-24 p-4 sm:justify-start absolute sm:bottom-0">
          <div className="greet sm:text-left text-left">
            <h1 className='sm:text-8xl text-5xl'>Hello, I'm Mangesh! </h1>
            <h1 className='sm:text-8xl text-5xl'>A Student and Geek</h1>
          </div>
          <h4 className="sm:p-0 text-xl p-2  dark:text-white-200 text-black font-light"><a className="hover-underline-animation" href="#projects">see my works <i className="ph-arrow-right-thin"></i></a></h4>
        </div>
        <div class="bottom-0 flex flex-row justify-end">
          <a href="#about">
            <img src={arrow} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}





          // <div className="font-bold  items-centerbe">
          //   <h1 className="sm:text-8xl  2xl:text-[200px] ">Hi, I am <span style={{ 'background-color': '#a2bed5', 'color': '#121213' }}>Mangesh</span>.</h1>
          //   <h1 className='sm:text-8xl  2xl:text-[200px] '>A <span>Geek</span> and <span>Explorer</span></h1>
          // </div>