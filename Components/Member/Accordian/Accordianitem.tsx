import React, { useState } from 'react';
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-4 w-full">
      <div
        className="flex justify-between items-center bg-gray-500 p-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span>{isOpen ? '▼' : '▲'}</span>
      </div>
      {isOpen && <div className="bg-gray-100 p-2">{content}</div>}
    </div>
  );
};
export default AccordionItem;