"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import deleteExclusion from "@/api/exclusion/delete-exclusion";
import { sort } from "@/lib/utility";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_EXCLUSION === "true";
const VIEW_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VIEW_EXCLUSION === "true";
const EDIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_EDIT_EXCLUSION === "true";
const DELETE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DELETE_EXCLUSION === "true";

const COLUMNS = [
  { key: "exclusionDate", label: "Exclusion Date" },
  { key: "name", label: "Name" },
  { key: "property", label: "Property" },
];

if (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) {
  COLUMNS.push({ key: "actions", label: "" });
}

export default function ExclusionListDesktop({ exclusions }) {
  const [sortKey, setSortKey] = useState("exclusionDate");
  const [sortDirection, setSortDirection] = useState("desc");

  const sortedExclusions = useMemo(() => {
    if (!exclusions) return [];
    return sort(exclusions, sortKey, sortDirection);
  }, [exclusions, sortKey, sortDirection]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  };

  return (<div className="mb-5 hidden sm:block">
    <table className="mx-auto table-auto">
      <thead>
        { ADD_ENABLED && (<tr>
          <td
            colSpan={COLUMNS.length}
            align="right"
            className="pb-5"
          >
            <Link
              href="/exclusions/new"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
            >
              Add
            </Link>
          </td>
        </tr>)}
        <tr>
          {COLUMNS.map((column) => (
            <th key={column.key} className="bg-gray-800 p-5 text-xs md:text-base">
              {column.key === "actions" ? (
                <span className="flex items-center gap-1 font-semibold">{column.label}</span>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-1 font-semibold"
                  onClick={() => handleSort(column.key)}
                >
                  {column.label}
                  <span className="text-[10px] text-gray-400">
                    {sortKey === column.key ? (sortDirection === "asc" ? "▲" : "▼") : "◄►"}
                  </span>
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedExclusions.map((exclusion) => (
          <tr key={exclusion._id} className="border-t border-solid border-gray-800">
            <td className="p-5 text-xs md:text-base">
              {
                exclusion.exclusionDateFrom !== "-" ? 
                  `${exclusion.exclusionDateFrom} to ${exclusion.exclusionDateTo}` :
                  exclusion.exclusionDate
              }
            </td>
            <td className="p-5 text-xs md:text-base">{exclusion.name}</td>
            <td className="p-5 text-xs md:text-base">{exclusion.property}</td>
            { (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) && (<td className="p-5 text-xs md:text-base">
              <div className="flex gap-2">
                { VIEW_ENABLED && (<Link
                  href={`/exclusions/view/${exclusion._id}`}
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                >
                  View
                </Link>)}
                { EDIT_ENABLED && (<Link
                  href={`/exclusions/edit/${exclusion._id}`}
                  className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white"
                >
                  Edit
                </Link>)}
                { DELETE_ENABLED && (<form action={deleteExclusion}>
                  <input type="hidden" name="_id" value={exclusion._id} />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white"
                  >
                    Delete
                  </button>
                </form>)}
              </div>
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>);
}
