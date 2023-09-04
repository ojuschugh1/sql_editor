import React, { useState, useEffect } from 'react';
import './index.css';
import AppLayout from './layout/AppLayout';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay (you can remove this in production)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center"
      style={{ transition: 'background-color 0.3s' }}
    >
      {isLoading ? (
        <div className="text-3xl font-semibold text-blue-500 dark:text-blue-300">
          Loading...
        </div>
      ) : (
        <AppLayout />
      )}
    </div>
  );
}

export default App;
