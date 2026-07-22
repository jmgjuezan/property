import Link from "next/link";

const canPay = process.env.NEXT_PUBLIC_ENABLE_PAY_DUE === "true";

export default function Rent({ due }) {
  return (<tr className="border-t border-solid border-gray-800">
    <td className="p-5 text-xs md:text-base">{ due.dueDate }</td>
    <td className="p-5 text-xs md:text-base">{ due.name }</td>
    <td className="p-5 text-xs md:text-base text-right">{ due.property }</td>
    <td className="p-5 text-xs md:text-base text-right">{ due.dueFor }</td>
    <td className="p-5 text-right text-xs md:text-base">{`Php ${due.totalAmount}`}</td>
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
  </tr>);
}
