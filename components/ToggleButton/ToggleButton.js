"use client"
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleButtonClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <button
      className="relative w-10 h-5 flex justify-around top-1 bg-[#e8b4b8] rounded-full outline-none transition-all duration-300"
      onClick={handleButtonClick}
    >
      <div
        className={`absolute flex justify-around top-0 ${
          isOn ? 'left-0' : 'right-0'
        }  bg-gray-600 w-5 h-5 rounded-full transition-all duration-300`}
      />
    </button>
  );
};

export default ToggleButton;