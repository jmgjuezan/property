"use client";

import { useMemo, useState } from "react";
import { sort } from "@/lib/utility";

const COLUMNS = [
  { key: "paymentDate", label: "Payment Date" },
  { key: "amount", label: "Amount" },
  { key: "paymentFor", label: "Payment For" },
  { key: "paidBy", label: "Paid By" },
  { key: "property", label: "Property" },
];

export default function PaymentListDesktop({ payments }) {
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
      <table className="mx-auto table-auto rounded-2xl border border-solid border-gray-800">
        <thead>
          <tr>
            { COLUMNS.map((column) => (
              <th key={ column.key } className="bg-gray-800 p-5 text-xs md:text-base">
                <button
                  type="button"
                  className="flex items-center gap-1 font-semibold"
                  onClick={() => handleSort(column.key)}
                >
                  { column.label }
                  <span className="text-[10px] text-gray-400">
                    { sortKey === column.key ? (sortDirection === "asc" ? "▲" : "▼	") : "◄►" }
                  </span>
                </button>
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
              <td className="p-5 text-xs md:text-base">{ payment.paidBy }</td>
              <td className="p-5 text-xs md:text-base">{ payment.property }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
