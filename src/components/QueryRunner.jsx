import React, { useState, memo } from 'react';
import useAppStore from '../store/useAppStore';

const QueryRunner = memo(function QueryRunner({
  initialQueryName,
  query,
  handleQueryReset,
  onRunQuery,
  loading,
}) {
  const [queryName, setQueryName] = useState(initialQueryName);
  const saveNewQuery = useAppStore((state) => state.saveNewQuery);
  const toggleFullScreen = useAppStore((state) => state.toggleFullScreen);

  return (
    <div className='bg-gray-100 dark:bg-gray-800 flex justify-between items-center px-4 py-2 rounded-md shadow-md'>
      <div className='flex gap-x-4'>
        <button
          disabled={!query || loading}
          onClick={onRunQuery}
          className={`flex justify-center items-center text-sm rounded-lg px-5 py-2 gap-1 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed text-gray-700 dark:bg-black-500 dark:text-gray-300 dark:cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 dark:bg-blue-700 dark:hover:bg-blue-600 text-white'
          }`}
        >
          <span className='-ml-2 material-symbols-outlined'>play_arrow</span>
          Run This Query
        </button>

        <button
          onClick={() => handleQueryReset()}
          className='text-sm flex justify-center items-center bg-white dark:bg-blue-600 dark:text-blue-100 dark:border-blue-600 dark:hover:bg-blue-500 hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-300 dark:border-gray-600 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>
            settings_backup_restore
          </span>
        </button>

        <button
          onClick={toggleFullScreen}
          className='text-sm flex justify-center items-center bg-white dark:bg-blue-600 dark:text-blue-100 dark:border-blue-600 dark:hover:bg-blue-500 hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-300 dark:border-gray-600 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>aspect_ratio</span>
        </button>
      </div>
      <div className='flex gap-x-4'>
        <input
          className='text-sm bg-white dark:bg-blue-700 dark:text-blue-300 dark:border-blue-700 placeholder:text-gray-500 focus:outline-blue-500 dark:focus:outline-none dark:focus:border-none px-4 py-2 rounded-lg w-[300px] border border-gray-300 dark:border-gray-600'
          placeholder='Enter query name...'
          spellCheck='false'
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
        />
        <button
          onClick={() => saveNewQuery(queryName, query)}
          className={`text-sm rounded-lg px-5 py-2 gap-1 ${
            loading
              ? 'opacity-80 cursor-not-allowed bg-gray-400'
              : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-blue-100'
          }`}
        >
          <span className='material-symbols-outlined'>Save</span>
          Save Query For Future
        </button>
      </div>
    </div>
  );
});

export default QueryRunner;
