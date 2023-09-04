import React from 'react';
import ExportButton from './ExportButton';

function QuerySummary({
  rowCount,
  executionTime,
  resultsPerPage,
  handleResultsPerPageChange,
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
  handlePageChange,
  csvData,
  setSplitSize,
}) {
  const formattedExecutionTime = (executionTime / 1000).toFixed(2);

  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 dark:text-blue-300 px-4 py-3 text-sm flex justify-between items-center shadow-md rounded-t-md">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSplitSize([100, 0])}
          className="flex justify-center items-center text-gray-600 hover:text-gray-900 dark:text-blue-100 dark:hover:text-blue-200"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <span>Total Rows: {rowCount}</span>
        <span>Execution Time: {formattedExecutionTime} s</span>
        <span>Results per page: </span>
        <select
          value={resultsPerPage}
          onChange={handleResultsPerPageChange}
          className="bg-transparent cursor-pointer"
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`flex justify-center items-center select-none cursor-pointer ${
            currentPage === 1
              ? 'text-gray-400 dark:text-blue-100 dark:hover:text-blue-200 cursor-not-allowed'
              : 'text-gray-700 hover:text-gray-900 dark:text-blue-200 dark:hover:text-blue-300'
          }`}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span>PAGE</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          className="bg-transparent border-b-1 border-gray-400 text-center w-12"
        />
        <span>of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex justify-center items-center select-none cursor-pointer ${
            currentPage === totalPages
              ? 'text-gray-400 dark:text-blue-100 dark:hover:text-blue-200 cursor-not-allowed'
              : 'text-gray-700 hover:text-gray-900 dark:text-blue-200 dark:hover:text-blue-300'
          }`}
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <ExportButton data={csvData} />
    </div>
  );
}

export default QuerySummary;
