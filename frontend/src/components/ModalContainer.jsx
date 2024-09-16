import React from 'react';

const ModalContainer = ({ showModal, setShowModal, children }) => {
  return (
    <>
       {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800  bg-opacity-50">
          <div className=" p-6 text-gray-300 rounded-lg shadow-lg w-96 relative z-60">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalContainer;
