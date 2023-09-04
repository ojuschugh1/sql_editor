import React from 'react';
import TableCollection from './TableCollection';
import SavedQueries from './SavedQueries';
import useAppStore from '../store/useAppStore';

function Sidebar() {
  const fullScreen = useAppStore((state) => state.fullScreen);
  const tables = [
    {
      tableName: 'customers',
      columns: [
        { name: 'customerID', type: 'string' },
        { name: 'companyName', type: 'string' },
        { name: 'contactName', type: 'string' },
        { name: 'contactTitle', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'region', type: 'string' },
        { name: 'postalCode', type: 'integer' },
        { name: 'country', type: 'string' },
        { name: 'phone', type: 'integer' },
        { name: 'fax', type: 'integer' },
      ],
    },
    {
      tableName: 'order_details',
      columns: [
        { name: 'orderID', type: 'integer' },
        { name: 'productID', type: 'integer' },
        { name: 'unitPrice', type: 'integer' },
        { name: 'quantity', type: 'integer' },
        { name: 'discount', type: 'integer' },
      ],
    },
  ];

  return fullScreen ? (
    <div className="flex flex-col w-72 px-4 dark:bg-gray-800 bg-gray-100 text-gray-900 min-w-[300px] dark:divide-blue-700 max-h-screen overflow-auto">
      {/* Database Information */}
      <div className="py-4 text-center bg-blue-500 dark:bg-blue-900 text-white font-bold rounded-lg">
        <span className="material-icons-outlined text-4xl">database</span>
        <span className="text-xl">Open-Source SQL Editor</span>
      </div>

      {/* Saved Queries */}
      <div className="py-4">
        <h2 className="font-bold text-blue-500 dark:text-blue-400 text-xl">History</h2>
        <SavedQueries />
      </div>

      {/* Database Tables */}
      <div className="py-4">
        <h2 className="font-bold text-blue-500 dark:text-blue-400 text-xl">Database Tables (SQL)</h2>
        {tables.map((table) => (
          <div key={table.tableName} className={`my-2 ${table.tableName === 'customers' || table.tableName === 'order_details' ? 'bg-blue-100 dark:bg-blue-800' : ''}`}>
            <TableCollection key={table.tableName} table={table} />
          </div>
        ))}
      </div>

      {/* GitHub Link */}
      <div className="py-4">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-blue-500 dark:text-blue-400 text-xl">
            <a href="https://github.com/ojuschugh1/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </h2>
        </div>
      </div>

      {/* LinkedIn Link */}
      <div className="py-4">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-blue-500 dark:text-blue-400 text-xl">
            <a href="https://www.linkedin.com/in/ojus-chugh-364328201/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div className="py-4">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-blue-500 dark:text-blue-400 text-xl">
            Made with ❤️ by Ojus for the Open Source Community ("_")
          </h2>
        </div>
      </div>
    </div>
  ) : null;
}

export default Sidebar;
