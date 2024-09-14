import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from './ModalContainer'; // Assuming you have this component
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the mobile menu toggle
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [modalContent, setModalContent] = useState(''); // To handle modal content (Login or Signup)

  // Function to open modal based on type (Login or Signup)
  const handleOpenModal = (type) => {
    setModalContent(type);
    setShowModal(true);
  };

  return (
    <>
      <header className="lg:px-16 px-4 bg-secBg text-gray-300 flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold uppercase text-white">
            Task Management
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`} id="menu">
          <nav className="w-full">
            <ul className="md:flex items-center justify-between text-base text-gray-300 space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <li>
                <button
                  onClick={() => handleOpenModal('Login')}
                  className="md:p-4 py-2 px-4 rounded-md block text-gray-100 hover:bg-green-600 transition-colors duration-300"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal('Signup')}
                  className="md:p-4 py-2 px-4 rounded-md block bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal Container */}
      <ModalContainer showModal={showModal} setShowModal={setShowModal}>
        {modalContent === 'Login' && (
        <Login/>
        )}
        {modalContent === 'Signup' && (
         <SignUp/>
        )}
      </ModalContainer>
    </>
  );
};

export default Navbar;
