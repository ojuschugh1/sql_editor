import React from 'react';

function Table({ csvData, isLoading, currentPage, resultsPerPage }) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full text-gray-600 dark:text-blue-300">
        Loading Results... Please wait.
      </div>
    );
  }

  if (!csvData) {
    return (
      <div className="flex justify-center items-center h-full text-gray-600 dark:text-blue-300">
        Run a Query to Display Data
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="text-gray-800 dark:text-blue-300 border-collapse border border-hidden text-sm w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-blue-700">
            <th className="py-2 px-4 border border-gray-300 dark:border-blue-600">#</th>
            {Object.keys(csvData[0]).map((header, index) => (
              <th className="py-2 px-4 border border-gray-300 dark:border-blue-600" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr
              className={rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-blue-800' : 'bg-white dark:bg-blue-900'}
              key={rowIndex}
            >
              <td className="py-2 px-4 border border-gray-300 dark:border-blue-600">
                {rowIndex + 1 + (currentPage - 1) * resultsPerPage}
              </td>
              {Object.values(row).map((value, cellIndex) => (
                <td
                  className="py-2 px-4 border border-gray-300 dark:border-blue-700"
                  key={cellIndex}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
