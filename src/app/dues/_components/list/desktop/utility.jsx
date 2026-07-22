import { Fragment } from "react";
import Link from "next/link";
import { formatAmount } from "@/lib/utility";

const canPay = process.env.NEXT_PUBLIC_ENABLE_PAY_DUE === "true";

export default function Utility({ due }) {
  return (<Fragment key={due._id}>
    <tr className="border-t border-solid border-gray-800">
      <td className="p-5 text-xs md:text-base">{due.dueDate}</td>
      <td className="p-5 text-xs md:text-base">{due.name}</td>
      <td className="p-5 text-xs md:text-base text-right">
        {due.property}
        { due.water && (<><br />{`💧 Php ${formatAmount(due.water)}`}</>)}
      </td>
      <td className="p-5 text-xs md:text-base text-right">
        {due.dueFor}
        { due.electricity && (<><br />{`⚡️ Php ${formatAmount(due.electricity)}`}</>)}
      </td>
      <td className="p-5 text-right text-xs md:text-base">Php {due.totalAmount}</td>
      <td className="p-5 text-xs md:text-base"></td>
    </tr>
    { due.breakdown && due.breakdown.length > 0 && due.breakdown.map((item, index) => (
      <tr key={index} className="border-t border-solid border-gray-800">
        <td className="p-5 text-xs md:text-base bg-gray-800"></td>
        <td className="p-5 text-xs md:text-base bg-gray-800">{item.name}</td>
        <td className="p-5 text-right text-xs md:text-base bg-gray-800">
          {`💧 Php ${formatAmount(item.water)}`} 
        </td>
        <td className="p-5 text-right text-xs md:text-base bg-gray-800">
          {`⚡️ Php ${formatAmount(item.electricity)}`}
        </td>
        <td className="p-5 text-right text-xs md:text-base bg-gray-800">
          {`Php ${item.amount}`}
        </td>
        <td className="p-5 text-xs md:text-base">
          { canPay && (
            <Link
              href={`/payments/new`}
              className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 self-center"
            >
              Paid
            </Link>
          )}
        </td>
      </tr>
    )) }
  </Fragment>);
}
