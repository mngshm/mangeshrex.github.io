import React from 'react';
import '../App.css';
import Rxfetch from './asset/card-1.png';
import Dotfiles from './asset/card-2.png';
import Everblush from './asset/card-3.png';

function Projects() {
    return (
        <div id="projects" className="visible xl:min-h-screen xl:max-w-screen-2xl">
            <div className="pb-6 pt-4">
                <h1 className="sm:text-4xl flex justify-center p-5 mb-2 sm:mt-6 text-2xl">Projects</h1>
                <div className="sm:justify-center px-4 sm:my-4 sm:mt-6 sm:pb-22 mb-12 grid sm:grid-cols-3 sm:gap-2 grid-cols-1 gap-2 place-items-center">
                    <div className="max-w-sm  card-1 rounded-lg overflow-hidden shadow-xl">
                        <img className="rounded-lg" height="600px" width="500px" alt='thumbnail' src={Rxfetch} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rxfetch</div>
                            <p className="text-white-700 mb-2 text-base">
                                Rxfetch is a system info program with some bling in it.
                            </p>
                            <button className="button text-black bg-blue-300 hover:bg-blue-400 hover:transition-all p-2 rounded-md">
                                <a className="flex" href="https://github.com/Mangeshrex/rxfetch">
                                    <h4 className="text-black">source</h4>
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm card-2  rounded-lg overflow-hidden shadow-xl">
                        <img className="rounded-lg" alt="thumbnail" height="500px" width="500px" src={Everblush} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Everblush</div>
                            <p className="text-white-700 mb-2 text-base">
                                Everblush is a dark, beautiful and vibrant colorscheme supporting various programs.
                            </p>
                            <button className="button text-black bg-blue-300 hover:bg-blue-400 hover:transition-all p-2 rounded-md">
                                <a className=" flex justify-end" href="https://github.com/Mangeshrex/rxfetch">
                                    <h4 className="text-black">source</h4>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm card-3  rounded-lg overflow-hidden shadow-xl">
                        <img className="rounded-lg" height="500px" width="500px" alt='thumbnail' src={Dotfiles} />
                        <div className="px-6 py-4">
                            <div className="font-bold  text-xl mb-2">Dotfiles</div>
                            <p className="text-white-700 mb-4 text-base">
                                These are my ArchLinux Dotfiles, it's not a project but yeah you can check it.
                            </p>
                            <button className="button text-black bg-blue-300 hover:bg-blue-400 hover:transition-all p-2 rounded-md">
                                <a className="flex justify-end" href="https://github.com/Mangeshrex/rxfetch">
                                    <h4 className="text-black">source</h4>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;