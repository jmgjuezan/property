import Link from "next/link";

export default function DueListRightItem({ id }) {
  return (
    <div className="flex items-center">
      <Link
        href={`/dues/edit/${id}`}
        className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 self-center"
      >
        Paid
      </Link>
    </div>
  );
}
