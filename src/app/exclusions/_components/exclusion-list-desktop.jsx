'use client';

import { useMemo, useState } from 'react';
import Link from "next/link";

export default function ExclusionListDesktop({ exclusions }) {
  const [sortKey, setSortKey] = useState('exclusionDate');
  const [sortDirection, setSortDirection] = useState('asc');

  const sortedExclusions = useMemo(() => {
    if (!exclusions) {
      return [];
    }

    return [...exclusions].sort((a, b) => {
      const valueA = String(a[sortKey] ?? '').toLowerCase();
      const valueB = String(b[sortKey] ?? '').toLowerCase();

      if (valueA < valueB) {
        return sortDirection === 'asc' ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }, [exclusions, sortKey, sortDirection]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortKey(key);
    setSortDirection('asc');
  };

  const columns = [
    { key: 'exclusionDate', label: 'Exclusion Date' },
    { key: 'exclusionDateFrom', label: 'From' },
    { key: 'exclusionDateTo', label: 'To' },
    { key: 'name', label: 'Name' },
    { key: 'property', label: 'Property' },
  ];

  return (
    <div className="mb-5 hidden sm:block">
      <table className="mx-auto table-auto">
        <thead>
          <tr>
            <td
              colSpan={columns.length}
              align="right"
              className="pb-5"
            >
              <Link
                href="/exclusions/new"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add Exclusion
              </Link>
            </td>
          </tr>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="bg-gray-800 p-5 text-xs md:text-base">
                <button
                  type="button"
                  className="flex items-center gap-1 font-semibold"
                  onClick={() => handleSort(column.key)}
                >
                  {column.label}
                  <span className="text-[10px] text-gray-400">
                    {sortKey === column.key ? (sortDirection === 'asc' ? '▲' : '▼') : '◄►'}
                  </span>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedExclusions.map((exclusion) => (
            <tr key={exclusion._id} className="border-t border-solid border-gray-800">
              <td className="p-5 text-xs md:text-base">{exclusion.exclusionDate}</td>
              <td className="p-5 text-xs md:text-base">{exclusion.exclusionDateFrom}</td>
              <td className="p-5 text-xs md:text-base">{exclusion.exclusionDateTo}</td>
              <td className="p-5 text-xs md:text-base">{exclusion.name}</td>
              <td className="p-5 text-xs md:text-base">{exclusion.property}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
