import React from 'react';
import useAppStore from '../store/useAppStore';

const DarkModeSwitch = () => {
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  return (
    <div
      onClick={toggleDarkMode}
      className={`w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer ${
        darkMode
          ? 'bg-gray-800 text-gray-300 hover:bg-gray-600'
          : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
      }`}
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.293-4.293a1 1 0 10-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L7.414 14H13a1 1 0 000-2H7.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4-9a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default DarkModeSwitch;
