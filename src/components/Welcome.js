import React from 'react'; 
import '../App.css';

export default function Welcome(){
  return (
    <div id="home" className="welcome sm:h-screen h-full xl:w-sm">
      <div className="flex justify-center m-auto items-center sm:px-24 sm:py-24 p-4 sm:justify-start absolute sm:bottom-0">
        <div className="sm:text-left text-center">
          <div className="font-bold">
            <h1 className="sm:text-8xl">Hi, I am <span style={{'background-color': '#a2bed5','color': '#121213'}}>Mangesh</span>.</h1>
            <h1 className='sm:text-8xl'>A <span>Geek</span> and <span>Explorer</span></h1>
            <h4 className="p-0 sm:text-2xl text-xl hover-underline-animation font-light"><a href="#projects">See my
                Works <i className="ph-arrow-right-thin"></i></a></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
