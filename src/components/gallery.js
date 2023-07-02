import React from "react";
import Granny from './asset/photos/granny-corns.jpg';
import Bullet from './asset/photos/bullet-flag.jpg';
import Girl from './asset/photos/girl.jpg';
import sunset from './asset/photos/sunset-look.jpg';
import Mother from './asset/photos/mother.jpg';
import Wadawala from './asset/photos/wadawala.jpg';
import Boy from './asset/photos/boy-walking.png';
import Kids from './asset/photos/kids-playing.jpg'
import Street from './asset/photos/street.jpg';
import Anna from './asset/photos/gali-ka-anna-hazare.jpg'
import Uncle from './asset/photos/uncle.jpg';

export default function Gallery() {
    return (
        <>
            <div className="container scroll-smooth mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="pb-5">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-xl sm:text-4xl">Gallery of my Memories!</h1>
                    </div>
                </div>
                <div className="-m-1 flex flex-wrap flex-row md:-m-2">
                    {/* Wide ones */}
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mother} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Girl} />
                        </div>
                    </div>

                    {/* Portraits */}
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Street} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Uncle} />
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap">
                        <div className="w-full p-2 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Anna} />
                        </div>
                    </div>
                    <div className="
                     flex flex-wrap flex-row md:-m-2">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Kids} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={sunset} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Boy} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Bullet} />
                        </div>

                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Wadawala} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Granny} />
                        </div>
                    </div>
                </div>
            </div></>
    );
}