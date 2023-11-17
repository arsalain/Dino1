const EnquiryForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
    };
    return (
      <div>
        {isFormVisible && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
              <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4" id="enquiryFormTitle">
                  Enquiry Form
                </h2>
                {/* Close Button */}
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close"
                >
                  {/* Using an SVG for the close icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                {/* Form Fields */}
                {/* ... (rest of your form code) */}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default EnquiryForm;