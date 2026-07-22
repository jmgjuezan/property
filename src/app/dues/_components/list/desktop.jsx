"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { sort } from "@/lib/utility";
import Rent from "./desktop/rent";
import Utility from "./desktop/utility";

const GENERATE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_GENERATE_DUE === "true";
const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_PAYMENT === "true";
const VIEW_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VIEW_PAYMENT === "true";
const EDIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_EDIT_PAYMENT === "true";
const DELETE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DELETE_PAYMENT === "true";

const COLUMNS = [
  { key: "dueDate", label: "Due Date" },
  { key: "name", label: "Name" },
  { key: "property", label: "Property" },
  { key: "dueFor", label: "Type" },
  { key: "totalAmount", label: "Amount" },
];

if (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) {
  COLUMNS.push({ key: "actions", label: "" });
}

export default function Desktop({ dues, generated }) {
  const [sortKey, setSortKey] = useState("dueDate");
  const [sortDirection, setSortDirection] = useState("desc");

  if (generated) {
    delete COLUMNS[COLUMNS.length - 1];
  }

  const sortedDues = useMemo(() => {
    if (!dues) return [];
    return sort(dues, sortKey, sortDirection);
  }, [dues, sortKey, sortDirection]);

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
        <tr>
          <td colSpan={COLUMNS.length} align="right" className="pb-5">
            { GENERATE_ENABLED && !generated && (
              <Link
                href="/dues/generate"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white mr-2"
              >
                Generate
              </Link>
            )}
            { ADD_ENABLED && !generated && (
              <Link
                href="/dues/new"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add
              </Link>
            )}
          </td>
        </tr>
        <tr>
          { COLUMNS.map((column) => (
            <th key={ column.key } className="bg-gray-800 p-5 text-xs md:text-base">
              { column.key === "actions" ? (
                column.label
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-1 font-semibold"
                  onClick={() => handleSort(column.key)}
                >
                  { column.label }
                  <span className="text-[10px] text-gray-400">
                    { sortKey === column.key ? (sortDirection === "asc" ? "▲" : "▼") : "◄►" }
                  </span>
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { sortedDues.map((due, index) => (
          due.dueFor === "Rent" ?
            <Rent key={ due._id ?? (`r-${index}`) } due={ due } /> :
            <Utility key={ due._id ?? (`u-${index}`) } due={ due } />
        ))}
      </tbody>
    </table>
  </div>);
}
