import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="lg:px-16 px-4 bg-secBg text-gray-300 flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <Link to="/" className="text-2xl font-extrabold uppercase text-white">Task Management</Link>
            </div>

            {/* Hamburger Icon */}
            <div className="block md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="focus:outline-none text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <div className={`md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`} id="menu">
                <nav className="w-full">
                    <ul className="md:flex items-center justify-between text-base text-gray-300 space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                        <li>
                            <Link className="md:p-4 py-2 px-4 rounded-md block text-gray-100 hover:bg-green-600 transition-colors duration-300" to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 px-4 rounded-md block bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-lg transition-all duration-300" to="/register">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
