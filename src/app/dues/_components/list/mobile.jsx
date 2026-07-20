import Link from "next/link";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_DUE === "true";

export default function Mobile({ dues }) {
  return (<>
    { ADD_ENABLED && (<div className="text-center mb-5 sm:hidden">
      <Link
        href="/dues/new"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
      >
        Add
      </Link>
    </div>)}
    <div className="sm:hidden flex flex-col items-center justify-center pb-5">
      {dues.map((due) => (
        <div key={due._id} className="rounded-lg m-1 p-5 bg-gray-800/50 min-w-75">
          <p className="text-sm/6 font-bold text-white">{due.name}</p>
          <p className="text-sm/6 font-semibold text-white">{due.property}</p>
          <p className="text-sm/6 text-white">{due.dueFor}</p>
          <p className="mt-1 text-xs/5 text-gray-400">{due.dueDate}</p>
          <p className="mt-1 text-xs/5 text-gray-400">
            {`Php ${due.totalAmount}`}
          </p>
        </div>
      ))}
    </div>
  </>);
}
