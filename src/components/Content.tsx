'use client';

import { FormEvent, useState } from 'react';
import { loadDataBySite } from '@root/api/loadDataBySite';
import { SearchResult } from '@root/interfaces/api';
import { Table } from '@root/components/Table';
import { DataPieChart } from '@root/components/PieChart';

export const Content = () => {
  const [domain, setDomain] = useState('');
  const [count, setCount] = useState(1);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchResult(null);
    setErrorMessage('');
    const data = await loadDataBySite(domain, count);
    console.log('data ->', data)
    if ( typeof data === 'string') {
      setErrorMessage(data);
      return;
    }
    setSearchResult(data);
  };
  return (
    <>
      <form className="mx-auto max-w-sm" onSubmit={onSubmit}>
        {errorMessage && <div className="mb-5 text-red-600">Error: {errorMessage}</div>}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your domain
          </label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your site"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Count
          </label>
          <input
            min={1}
            max={100}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your site"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {searchResult && (
        <>
          <DataPieChart data={searchResult?.data} />
          <Table data={searchResult.data} />
        </>
      )}
    </>
  );
};
