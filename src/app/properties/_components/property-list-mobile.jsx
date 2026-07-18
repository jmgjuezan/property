import Link from "next/link";
import deleteProperty from "@/api/property/delete-property";

export default function PropertyListMobile({ properties }) {
  return (<>
    <div className="mb-5 text-center sm:hidden">
      <Link
        href="/properties/new"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
      >
        Add
      </Link>
    </div>
    <div className="flex flex-col items-center justify-center pb-5 sm:hidden">
      { properties.map((tenant) => (
        <div
          key={tenant._id}
          className="m-1 min-w-75 rounded-lg bg-gray-800/50 p-5"
        >
          <p className="text-sm/6 font-semibold text-white">
            {tenant.name}
          </p>
          <div className="mt-4 flex gap-2">
            <Link
              href={`/tenants/view/${tenant._id}`}
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
            >
              View
            </Link>
            <Link
              href={`/tenants/edit/${tenant._id}`}
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white"
            >
              Edit
            </Link>
            <form action={deleteProperty}>
              <input type="hidden" name="_id" value={ tenant._id } />
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  </>);
}