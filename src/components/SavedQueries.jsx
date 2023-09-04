import React from 'react';
import useAppStore from '../store/useAppStore';

function SavedQueries() {
  const savedQueries = useAppStore((store) => store.savedQueries);
  const deleteSavedQuery = useAppStore((store) => store.deleteSavedQuery);
  const addNewTab = useAppStore((store) => store.addNewTab);

  const handleDeleteQuery = (queryName) => {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (!userConfirmed) return;
    deleteSavedQuery(queryName);
  };

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-auto">
      {Object.keys(savedQueries).map((queryName, index) => (
        <li
          className="my-2 border rounded-lg overflow-hidden shadow-md dark:bg-blue-800 hover:shadow-lg dark:hover:bg-blue-700 transition duration-300"
          key={index}
        >
          <div className="flex items-center justify-between bg-white dark:bg-blue-700">
            <div
              onClick={() => addNewTab(queryName, savedQueries[queryName])}
              className="grow px-4 py-3 leading-none cursor-pointer"
            >
              <span className="text-sm text-black-800 dark:text-blue-200">
                {queryName}
              </span>
            </div>
            <div
              onClick={() => handleDeleteQuery(queryName)}
              className="select-none rounded-full hover:bg-gray-300 dark:hover:bg-blue-700 w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-black-800 dark:text-blue-200 hover:text-black-900 dark:hover:text-blue-300">
                Delete
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SavedQueries;
