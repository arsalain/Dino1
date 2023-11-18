import React from 'react';
const EnquiryForm = ({ toggleFormVisibility, handleSubmit }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg relative">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center" id="enquiryFormTitle">
            Who Is Booking?
          </h2>
          {/* Close Button */}
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="absolute top-0 right-0 mt-4 mr-4 text-yellow-400 hover:text-yellow-500 focus:outline-none"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Form Fields */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border-2 border-gray-700 bg-gray-800 text-white rounded-md focus:border-yellow-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border-2 border-gray-700 bg-gray-800 text-white rounded-md focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border-2 border-gray-700 bg-gray-800 text-white rounded-md focus:border-yellow-500"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border-2 border-gray-700 bg-gray-800 text-white rounded-md focus:border-yellow-500"
              required
            ></textarea>
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="callbackCheckbox"
              name="callbackCheckbox"
              className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="callbackCheckbox" className="ml-2 block text-sm text-gray-300">
              Expecting a Callback
            </label>
          </div>
          <button type="submit" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md w-full hover:bg-yellow-500 transition-colors duration-300">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default EnquiryForm;