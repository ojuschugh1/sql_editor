import React from 'react';
import Papa from 'papaparse';
import Split from 'react-split';

import QueryRunner from './QueryRunner';
import QueryEditor from './QueryEditor';
import QueryResults from './QueryResults';
import useAppStore from '../store/useAppStore';

function QueryPanel({ tabId, initialQueryName, initialQuery }) {
  const fullScreen = useAppStore((store) => store.fullScreen);
  const activeTab = useAppStore((store) => store.activeTab);

  const [query, setQuery] = React.useState(initialQuery);
  const [loading, setLoading] = React.useState(false);
  const [csvData, setCSVData] = React.useState(null);
  const [executionTime, setExecutionTime] = React.useState(0);

  const [splitSize, setSplitSize] = React.useState([100, 0]);

  const isActiveTab = activeTab === tabId;

  const handleQueryReset = () => {
    const userConfirmed = window.confirm(
      'Are you sure you want to reset the query?'
    );
    if (!userConfirmed) return;
    setQuery(initialQuery);
  };

  const handleRunQuery = async () => {
    setLoading(true);

    // Fetching Demo Data
    try {
      const startTime = performance.now();
      let tableName;
      if (query.toLowerCase().trim() === 'select * from customers;')
        tableName = 'customers.csv';
      else if (query.toLowerCase().trim() === 'select * from order_details;')
        tableName = 'order_details.csv';
      else tableName = 'products.csv';
      const response = await fetch(tableName);
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          setCSVData(results.data);
          setLoading(false);
          const endTime = performance.now();
          setExecutionTime(endTime - startTime);
          setSplitSize([40, 60]);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          setLoading(false);
          setExecutionTime(0);
        },
      });
    } catch (error) {
      console.error('Error fetching CSV:', error);
      setLoading(false);
      setExecutionTime(0);
    }
  };

  return (
    <div className={`border border-gray-300 shadow-md p-4 rounded-md ${isActiveTab === false && 'hidden'}`}>
      <QueryRunner
        onRunQuery={handleRunQuery}
        initialQueryName={initialQueryName}
        query={query}
        setQuery={setQuery}
        loading={loading}
        handleQueryReset={handleQueryReset}
      />

      <Split
        className={
          fullScreen ? 'h-[calc(100vh-109px)]' : 'h-[calc(100vh-59px)]'
        }
        direction='vertical'
        minSize={0}
        snapOffset={30}
        sizes={splitSize}
      >
        <div className='overflow-auto dark:bg-gray-800 text-base p-2 rounded-md'>
          <QueryEditor query={query} setQuery={setQuery} />
        </div>

        <div className='overflow-auto relative dark:bg-blue-600 p-2 rounded-md'>
          <QueryResults
            csvData={csvData}
            isLoading={loading}
            executionTime={executionTime}
            setSplitSize={setSplitSize}
          />
        </div>
      </Split>
    </div>
  );
}

export default QueryPanel;
