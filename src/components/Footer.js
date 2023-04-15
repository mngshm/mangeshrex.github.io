import React from 'react';
import { CaretRight, CaretLeft } from 'phosphor-react';
import Avatar from '../bruh.jpg';

export default function Footer() {
    return (
        <>
            <footer className="thanks visible">
                <div className='gli '>
                    <div className='flex p-4 sm:justify-around justify-center flex-col sm:flex-row '>
                        <div className='flex flex-col font-bold text-center'>
                            <h1 className='text-2xl'>命懸け</h1>
                            {/* <h1>Front End Enthusiast</h1> */}
                        </div>
                        <div className='flex flex-row p-2 space-x-2 justify-center'>
                            <a className="hover-underline-animation p-0" href="https://github.com/Mangeshrex">Github</a>,
                            <a className="hover-underline-animation p-0" href="https://discord.com/users/854017461958869023">Discord</a>,
                            <a className="hover-underline-animation p-0" href="https://t.me/mangeshrex">Telegram</a>
                        </div>
                        <div className='flex flex-row space-x-2 justify-center border-2 border-solid max-w-sm border-black dark:border-white-300 p-2 rounded-full'>
                            <a className="p-0" href="https://gnulinuxindia.org/direct.html?name=mangeshrex&dir=prev"><CaretLeft size={20} /> </a>
                            <a className="hover-underline-animation p-0" href="https://gnulinuxindia.org/members.html/">WEBRING</a>
                            <a className="p-0" href="https://gnulinuxindia.org/direct.html?name=mangeshrex&dir=next"><CaretRight size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
