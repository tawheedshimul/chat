import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };
    return (
        <nav className="flex rounded-full justify-between items-center bg-gray-800 text-white p-4">




            <div className="relative">
                <div
                    className={`menu-button p-2 rounded-md transition duration-300 ease-in-out cursor-pointer ${isOpen ? 'open' : ''
                        }`}
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`hamburger-icon w-6 h-6`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`hamburger-icon w-6 h-6`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </div>
                <div
                    className={`menu-content absolute h-screen top-10 right-0 bg-white p-4 border shadow transform ${isOpen ? 'translate-x-full' :'collapse' 
                        } transition-transform duration-300 ease-in-out`}
                >
                    <p>mc</p>
                    <p>fjhf</p>
                </div>
            </div>



            <div class="flex items-center border-b grow border-teal-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input class="appearance-none bg-transparent border-none w-full text-whtie mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Search conversation" aria-label="Full name"></input>
            </div>
            <div className="flex items-center">
                <div className="w-6 h-6 mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        <path d="M15.5 17.5L12 20.5L8.5 17.5" />
                    </svg>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

