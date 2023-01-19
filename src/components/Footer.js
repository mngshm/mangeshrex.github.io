import React from 'react';
import logo from './asset/ma.png';

export default function Footer() {
    return (
        <footer className="thanks visible ">
            <div className="p-4 shadow-lg md:px-6 md:py-8 ">
                <div className="sm:flex sm:mx-12 justify-evenly">
                    <div className="flex flex-nowrap sm:justify-center">
                        <a href="https://mangeshrex.tech"><img className="w-12 animate-pulse rounded-full h-12" src={logo} /></a>
                    </div>
                    <ul className="flex flex-nowrap sm:justify-end place-items-center mb-6 text-sm sm:text-md text-white-300 sm:mb-0 ">
                        <li>
                            <a href="#about" className="mr-4 hover:text-blue-400 md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="https://t.me/mangeshrex" className="mr-4 hover:text-blue-400  md:mr-6">Telegram</a>
                        </li>
                        <li>
                            <a href="https://github.com/Mangeshrex" className="mr-4 hover:text-blue-400  md:mr-6 ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.com/users/854017461958869023" className="mr-4 hover:text-blue-400 md:mr-6 ">Discord</a>
                        </li>
                    </ul>
                </div>
                <h3 className="flex sm:justify-center space-x-2  ">Copyright © 2022. Made using Tailwind CSS.</h3>
            </div>
        </footer>

    );
}