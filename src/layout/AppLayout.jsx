import React from 'react';
import Sidebar from '../components/Sidebar';
import QueryTab from '../components/QueryTab';

import useAppStore from '../store/useAppStore';

function AppLayout() {
  const darkMode = useAppStore((state) => state.darkMode);

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header className=" py-4 text-blue">
        <div className="container mx-auto flex justify-center items-center"> {/* Center the content */}
          <h1 className="text-3xl font-semibold text-blue">Personal SQL Editor</h1>
        </div>
      </header>
      
      <main className="container mx-auto mt-6 p-4">
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <QueryTab />
        </div>
      </main>

      <footer className="py-2 text-blue text-center">
        <p>&copy; Personal SQL Editor {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default AppLayout;
