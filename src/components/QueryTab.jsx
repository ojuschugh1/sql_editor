import React from 'react';
import QueryPanel from './QueryPanel';
import DarkModeSwitch from './DarkModeSwitch';
import useAppStore from '../store/useAppStore';

const QueryTab = () => {
  const fullScreen = useAppStore((state) => state.fullScreen);
  const activeTab = useAppStore((state) => state.activeTab);
  const changeActiveTab = useAppStore((state) => state.changeActiveTab);
  const addNewTab = useAppStore((state) => state.addNewTab);
  const tabs = useAppStore((state) => state.tabs);
  const removeTab = useAppStore((state) => state.removeTab);

  return (
    <div className="flex flex-col w-full divide-y dark:divide-slate-700">
      <div
        className={`${
          fullScreen ? '' : 'hidden'
        } flex justify-between dark:bg-slate-900 dark:text-slate-300 p-4`}
      >
        <div className="flex gap-x-1 max-w-[calc(100vw-350px)]">
          <div className="flex overflow-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`hover:border-b-blue-500 dark:hover:border-b-blue-400 mr-1 flex justify-between items-center whitespace-nowrap px-4 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white-100 border-b-2 border-b-blue-500'
                    : 'bg-blue-200 dark:border-blue-800 border-b-2 dark:bg-blue-800 '
                }`}
                onClick={() => changeActiveTab(tab.id)}
              >
                <span className="text-black-700 dark:text-blue-300">
                  {tab.title}
                </span>

                <button
                  className="flex items-center justify-center ml-2 text-black-400 hover:text-black-900 dark:hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTab(tab.id);
                  }}
                >
                  <span className="-mr-1 material-symbols-outlined">Close</span>
                </button>
              </div>
            ))}
          </div>
          <button
            className="min-w-[50px] h-[50px] bg-black-200 text-blue-600 dark:bg-blue-800 flex items-center justify-center hover:bg-black-300 dark:hover:bg-blue-700 dark:text-blue-400 rounded-full"
            onClick={() => addNewTab()}
          >
            <span className="material-symbols-outlined">Add</span>
          </button>
        </div>
        <DarkModeSwitch />
      </div>

      {tabs.map((tab) => (
        <QueryPanel
          key={tab.id}
          tabId={tab.id}
          initialQueryName={tab.queryName}
          initialQuery={tab.query}
        />
      ))}
    </div>
  );
};

export default QueryTab;
