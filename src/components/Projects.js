
import React from 'react';
import '../App.css';
// import { Icon } from '@iconify/react';

function Projects() {
    return (
        <section className='h-full sm:h-full'>

            <div id="projects" className=" -skew-y-3 mb-14 mt-6 dark:bg-[#060607] bg-white-300 visible">
                <div className="skew-y-3  py-12 ">
                    <div className='flex justify-center m-2 p-4 flex-col projects'>
                        <h1 className="sm:text-4xl flex font-bold justify-left sm:ml-44 p-5 mb-2 text-2xl">Projects</h1>
                        <a href="https://github.com/mangeshrex/rxfetch" className='p-4 m-2'>
                            <div className="flex justify-around ">
                                <h1 className='sm:text-3xl text-xl 2xl:text-4xl text-bold'>
                                    01/
                                </h1>
                                <p className='sm:text-xl font-thin sm:max-w-[500px] max-w-auto px-4 sm:p-0'>
                                    <span>Rxfetch</span> is a system info program with some bling in it.
                                    Being my first github repo it was very fun.
                                </p>
                            </div>
                        </a>
                        <a href="https://github.com/Everblush" className='p-4 m-2 '>
                            <div className="flex justify-around ">
                                <h1 className='sm:text-3xl text-xl 2xl:text-4xl text-bold'>
                                    02/
                                </h1>
                                <p className='sm:text-xl font-thin sm:max-w-[500px] max-w-auto px-4 sm:p-0'>
                                    <span>Everblush</span> is a beautiful yet vibrant theme, which I worked on for a couple of months
                                    and successfully got it on platforms like Neovim, Obsidian, VSCode, Emacs, and many others.
                                </p>
                            </div>
                        </a>
                        <a href="https://github.com/mangeshrex/rxfetch" className='p-4 m-2'>
                            <div className="flex justify-around ">
                                <h1 className='sm:text-3xl text-xl 2xl:text-4xl text-bold'>
                                    03/
                                </h1>
                                <p className='sm:text-xl font-thin sm:max-w-[500px] max-w-auto px-4 sm:p-0'>
                                    This 'Lil Website of Mine, which I made while learning ReactJS.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;