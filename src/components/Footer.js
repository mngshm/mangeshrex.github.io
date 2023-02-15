import React from 'react';
import { CaretRight, CaretLeft } from 'phosphor-react';
export default function Footer() {
    return (
        <>

            <footer className="thanks visible ">

                <div className='gli '>
                    <div className='flex sm:justify-around flex-col sm:flex-row space-y-2 sm:space-y-0 p-4'>
                        <div className='flex flex-col'>
                            <h1>Mangesh Mane</h1>
                            <h1>Front End Enthusiast</h1>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <a className="hover-underline-animation p-0" href="https://github.com/Mangeshrex">Github</a>,
                            <a className="hover-underline-animation p-0" href="https://discord.com/users/854017461958869023">Discord</a>,
                            <a className="hover-underline-animation p-0" href="https://t.me/mangeshrex">Telegram</a>,
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <a className="hover-underline-animation p-0" href="https://gnulinuxindia.org/direct.html?name=mangeshrex&dir=prev"><CaretLeft size={20}/> </a>
                            <a className="hover-underline-animation p-0" href="https://gnulinuxindia.org/members.html/">WEBRING</a>
                            <a className="hover-underline-animation p-0" href="https://gnulinuxindia.org/direct.html?name=mangeshrex&dir=next"><CaretRight size={20}/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
