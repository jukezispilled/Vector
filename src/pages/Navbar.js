import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './nav.css';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [onScroll, setOnScroll] = useState(false);

    const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        // Add an event listener to the window object
        window.addEventListener('scroll', handleScroll);
        
        // Remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures that the effect only runs once on mount

    function handleScroll() {
        if (window.scrollY > 0) {
            setOnScroll(true);
        } else {
            setOnScroll(false);
        }
    }

    return(
        <div className="w-screen fixed top-0 z-10">  
            <nav className="mx-10 my-4 p-2 bg-[#ffffff] rounded-lg">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="/">
                                <img className={`shrink w-25 h-16 sm:w-15 h-15 ${onScroll ? 'bf':'af'}`} src="/logo.png" alt="Workflow" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center md:block md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center my-5 md:my-0 space-y-8 md:flex md:space-x-3 lg:space-x-6 md:space-y-0">
                                <li className="text-xl transition ease-in-out duration-500 hover:bg-slate-200 p-2 h-full rounded-lg font-semibold">
                                    <a href="/services">Services</a>
                                </li>
                                <li className="text-xl transition ease-in-out duration-500 hover:bg-slate-200 p-2 rounded-lg font-semibold">
                                    <a href="/projects">Projects</a>
                                </li>
                                <li className="text-xl transition ease-in-out duration-500 hover:bg-slate-200 p-2 rounded-lg font-semibold">
                                    <a href="about">About</a>
                                </li>
                                <li className="text-xl transition ease-in-out duration-500 hover:bg-slate-200 p-2 rounded-lg font-semibold">
                                    <a href="employment">Employment</a>
                                </li>
                                <li className="text-xl transition ease-in-out duration-500 hover:bg-slate-200 p-2 rounded-lg font-semibold">
                                    <a href="contact">Contact</a>
                                </li>
                                <li>
                                {isAuthenticated ? (
                                    <button className="bg-red-300 hover:bg-red-400 text-xl transition ease-in-out duration-500 p-2 rounded-lg font-semibold" onClick={() => logout()}>Logout</button>
                                ) : (
                                    <button className="bg-slate-200 hover:bg-slate-300 text-xl transition ease-in-out duration-500 p-2 rounded-lg font-semibold" onClick={() => loginWithRedirect()}>Login</button>
                                )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}