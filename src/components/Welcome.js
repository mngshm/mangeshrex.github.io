import React from 'react';
import '../App.css';

export default function Welcome() {
  return (
    <div id="home" className="welcome sm:h-screen h-full 2xl:w-sm">
      <div className="flex m-auto items-center justify-center sm:px-24 sm:py-24 p-4 sm:justify-start absolute sm:bottom-0">
        <div className="sm:text-left text-left">
          <div className="font-bold  items-centerbe">
            <h1 className="sm:text-8xl  2xl:text-[200px]">Hi, I am <span style={{ 'background-color': '#a2bed5', 'color': '#121213' }}>Mangesh</span>.</h1>
            <h1 className='sm:text-8xl  2xl:text-[200px] '>A <span>Geek</span> and <span>Explorer</span></h1>
            <h4 className="p-0 text-xl hover-underline-animation font-light"><a href="#projects">See my
              Works <i className="ph-arrow-right-thin"></i></a></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
