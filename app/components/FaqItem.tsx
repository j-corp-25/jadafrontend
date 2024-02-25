'use client'
// Import React and useState hook
import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const collapsibleStyle = isOpen ? { maxHeight: 'none', transition: 'max-height' } : { maxHeight: '0', overflow: 'hidden', transition: 'max-height' };

    return (
      <div className='mb-8 p-4 rounded-lg shadow-lg bg-jada-yellow-base'>
        <button
          className='w-full  bg-transparent border-none py-2 font-bold cursor-pointer text-jada-text-base text-center'
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          Q:{question}
        </button>
        <div style={collapsibleStyle} className="overflow-hidden text-jada-text-base font-bold  bg-jada-tertiary-base rounded-xl ">
          <div className='py-2 px-2 h-16'>
            A:{answer}
          </div>
      </div>
        </div>
    );
  };

export default FaqItem;
