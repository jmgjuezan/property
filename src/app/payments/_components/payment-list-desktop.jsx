"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import deletePayment from "@/api/payment/delete-payment";
import { sort } from "@/lib/utility";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_PAYMENT === "true";
const VIEW_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VIEW_PAYMENT === "true";
const EDIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_EDIT_PAYMENT === "true";
const DELETE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DELETE_PAYMENT === "true";

const COLUMNS = [
  { key: "paymentDate", label: "Payment Date" },
  { key: "amount", label: "Amount" },
  { key: "paymentFor", label: "Payment For" },
  { key: "paidBy", label: "Paid By" },
  { key: "property", label: "Property" },
];

if (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) {
  COLUMNS.push({ key: "actions", label: "" });
}

export default function PaymentListDesktop({ payments, properties, tenants }) {
  const [sortKey, setSortKey] = useState("paymentDate");
  const [sortDirection, setSortDirection] = useState("desc");

  const sortedPayments = useMemo(() => {
    if (!payments) return [];
    return sort(payments, sortKey, sortDirection);
  }, [payments, sortKey, sortDirection])

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  }

  return (
    <div className="mb-5 hidden sm:block">
      <table className="mx-auto table-auto">
        <thead>
          { ADD_ENABLED && (<tr>
            <td colSpan={COLUMNS.length} align="right" className="pb-5">
              <Link
                href="/payments/new"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add
              </Link>
            </td>
          </tr>)}
          <tr>
            { COLUMNS.map((column) => (
              <th key={ column.key } className="bg-gray-800 p-5 text-xs md:text-base">
                { column.key === "actions" ? (
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
          {sortedPayments.map((payment) => (
            <tr key={ payment._id } className="border-t border-solid border-gray-800">
              <td className="p-5 text-xs md:text-base">{ payment.paymentDate }</td>
              <td className="p-5 text-right text-xs md:text-base">Php { payment.amount }</td>
              <td className="p-5 text-xs md:text-base">{ payment.paymentFor }</td>
              <td className="p-5 text-xs md:text-base">{ payment.tenant }</td>
              <td className="p-5 text-xs md:text-base">{ payment.property }</td>
              { VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED && (<td className="p-5 text-xs md:text-base">
                <div className="flex gap-2">
                  { VIEW_ENABLED && (<Link
                    href={`/payments/view/${payment._id}`}
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                  >
                    View
                  </Link>)}
                  { EDIT_ENABLED && (<Link
                    href={`/payments/edit/${payment._id}`}
                    className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white"
                  >
                    Edit
                  </Link>)}
                  { DELETE_ENABLED && (<form action={deletePayment}>
                    <input type="hidden" name="_id" value={payment._id} />
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
    </div>
  )
}
