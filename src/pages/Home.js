import React, { useState } from 'react';
import AnimatedNumbers from "react-animated-numbers";
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Home.css';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {image: "/download.jpg", caption: "Slide 1"},
        {image: "/download-1.jpg", caption: "Slide 2"}
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex + 1 > slides.length - 1 ? 0 : currentIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, slides]);    
    
    return (
        <><div className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bghero.png'})` }}>
                <div className="pt-[20%] md:pt-[12%] 2xl:pt-[12%] font-semibold pl-16 md:pl-32 h-screen pr-16 md:w-1/2 md:pr-0 xl:pl-52">
                    <div className="text-6xl xl:text-8xl text-white font-extrabold">
                        Infrastructure Built to Last
                    </div>
                    <div className="text-2xl text-blue-200 font-semibold">Building strong foundations for over <span className="inline-block"><AnimatedNumbers includeComma animateToNumber={60} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }]}/></span>
                    &nbsp;years</div>
                    <a href="/employment"> 
                        <button type="button" class="py-3 px-4 mt-3 bg-blue-400 shadow-lg hover:bg-blue-500 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200 w-auto transition ease-in duration-400 text-center text-[#f0efef] text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            Join Us
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}