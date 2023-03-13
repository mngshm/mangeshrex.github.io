import React from 'react';
import Avatar from '../bruh.jpg';

export default function Service() {
    return (
        <div id="home" className="2xl:w-sm">
            <div className="grid grid-rows-2 gap-4 justify-center align-middle">
                <div className="grid justify-center items-center">
                    <img src={Avatar} alt="your bro" className="rounded-full shadow-xl w-52 h-52" />
                </div>
                <div className="justify-center p-2">
                    <h1 className="text-center sm:text-center text-2xl font-regular">Let's Talk</h1>
                    <p className="text-center sm:text-center text-lg font-light">I'm more active on <span>Telegram</span>.
                    But, <a className="underline font-bold "href="mailto:mangeshrex@tutanota.com">email's</a> are also replied.</p>
                </div>
            </div>
        </div>
    );
}