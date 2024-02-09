'use client'
// Import React and useState hook
import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const collapsibleStyle = isOpen ? { maxHeight: 'none', transition: 'max-height 0.3s ease-out' } : { maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s ease-out' };

    return (
      <div className='mb-8 p-4 rounded-lg shadow-lg bg-white'>
        <button
          className='w-full text-left bg-transparent border-none py-2 font-bold cursor-pointer'
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          {question}
        </button>
        <div style={collapsibleStyle} className="overflow-hidden text-jada-purple-800">
          <div className='py-2'>
            {answer}
          </div>
        </div>
      </div>
    );
  };

export default FaqItem;
