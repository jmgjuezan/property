"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import deleteProperty from "@/api/property/delete-property";
import { sort } from "@/lib/utility";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_PROPERTY === "true";
const VIEW_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VIEW_PROPERTY === "true";
const EDIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_EDIT_PROPERTY === "true";
const DELETE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DELETE_PROPERTY === "true";

const COLUMNS = [
  { key: "name", label: "Name" },
];

if (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) {
  COLUMNS.push({ key: "actions", label: "" });
}

export default function PropertyListDesktop({ properties }) {
  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedProperties = useMemo(() => {
    if (!properties) return [];
    return sort(properties, sortKey, sortDirection);
  }, [properties, sortKey, sortDirection]);

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
          <td colSpan={COLUMNS.length} align="right" className="pb-5">
            <Link
              href="/properties/new"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
            >
              Add
            </Link>
          </td>
        </tr>)}
        <tr>
          { COLUMNS.map((column) => (
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
        {sortedProperties.map((property) => (
          <tr key={property._id} className="border-t border-solid border-gray-800">
            <td className="p-5 text-xs md:text-base">
              {property.name}
            </td>
            { VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED && (<td className="p-5 text-xs md:text-base">
              <div className="flex gap-2">
                { VIEW_ENABLED && (<Link
                  href={`/properties/view/${property._id}`}
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                >
                  View
                </Link>)}
                { EDIT_ENABLED && (<Link
                  href={`/properties/edit/${property._id}`}
                  className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white"
                >
                  Edit
                </Link>)}
                { DELETE_ENABLED && (<form action={deleteProperty}>
                  <input type="hidden" name="_id" value={property._id} />
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