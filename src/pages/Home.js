import React, { useState } from 'react';
import AnimatedNumbers from "react-animated-numbers";
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Home.css';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {image: "/download.jpg", caption: "Slide 1"},
        {image: "/download-1.jpg", caption: "Slide 2"},
        {image: "https://images.unsplash.com/photo-1570387419172-6b4754c2abd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", caption: "Slide 3"},
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex + 1 > slides.length - 1 ? 0 : currentIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, slides]);    
    
    return (
        <><div className="h-screen w-screeen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bghero.png'})` }}>
                <div className="pt-[20%] md:pt-[12%] 2xl:pt-[12%] font-semibold pl-16 md:pl-32 h-screen pr-16 md:w-1/2 md:pr-0 xl:pl-52">
                    <div className="text-6xl xl:text-8xl text-slate-100 font-bold">
                        Infrastructure Built to Last
                    </div>
                    <div className="text-2xl text-blue-200 font-semibold">Building strong foundations for over <span className="inline-block"><AnimatedNumbers includeComma animateToNumber={60} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }]}/></span>
                    &nbsp;years</div>
                    <a href="/employment"> 
                        <button type="button" class="py-3 px-4 mt-3 bg-blue-300 shadow-lg hover:bg-blue-500 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-slate-800 w-auto transition ease-in duration-200 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            Join Us
                        </button>
                    </a>
                </div>
            </div>
            <div className="grid-rows-2 md:flex md:justify-center bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/arrow4.png'})` }}>
                <div className="text-2xl pt-40 font-semibold pl-16 md:pl-32 h-min pr-16 md:pr-0 md:h-screen md:w-1/2 md:pt-[12%] xl:pl-52">
                    <div className="text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl text-[#04147C] font-bold">
                        Infrastructure Built to Last
                    </div>
                    <div className="text-2xl text-blue-500 font-semibold">Building strong foundations for over <span className="inline-block"><AnimatedNumbers includeComma animateToNumber={60} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }]}/></span>
                    &nbsp;years</div>
                    <a href="/employment"> 
                        <button type="button" class="py-3 px-4 mt-3 bg-[#04147C] shadow-lg hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                            Join Us
                        </button>
                    </a>
                </div>
                <div className="text-xl font-semibold h-screen md:w-1/2 xl:pt-16 mt-20 md:mt-0 md:grid content-center">
                    <div className="flex justify-center">
                        <div className="relative h-[18pc] w-[22pc] rounded-xl  shadow-2xl md:-ml-20 md:h-[17pc] md:w-[20pc] lg:h-[21pc] lg:w-[24pc] xl:h-[29pc] xl:w-[33pc] 2xl:h-[32pc] 2xl:w-[38pc]">
                            <img key={currentIndex} src={slides[currentIndex].image} alt={slides[currentIndex].caption} className="h-full w-full object-cover rounded-lg fade" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}