import Link from "next/link";
import deleteExclusion from "@/api/exclusion/delete-exclusion";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_EXCLUSION === "true";
const VIEW_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VIEW_EXCLUSION === "true";
const EDIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_EDIT_EXCLUSION === "true";
const DELETE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DELETE_EXCLUSION === "true";

export default function ExclusionListMobile({ exclusions }) {
  return (<>
    { ADD_ENABLED && (<div className="text-center mb-5 sm:hidden">
      <Link
        href="/exclusions/new"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
      >
        Add
      </Link>
    </div>)}
    <div className="sm:hidden flex flex-col items-center justify-center pb-5">
      {exclusions.map((exclusion) => (
        <div key={exclusion._id} className="rounded-lg m-1 p-5 bg-gray-800/50 min-w-75">
          <p className="text-sm/6 font-semibold text-white">{exclusion.name}</p>
          <p className="text-sm/6 text-white">{exclusion.property}</p>
          { exclusion.exclusionDate && exclusion.exclusionDate !== "-" ? (
            <p className="mt-1 text-xs/5 text-gray-400">{exclusion.exclusionDate}</p>
          ) : (
            <p className="mt-1 text-xs/5 text-gray-400">
              {exclusion.exclusionDateFrom} to {exclusion.exclusionDateTo}
            </p>
          )}
          { (VIEW_ENABLED || EDIT_ENABLED || DELETE_ENABLED) && (<div className="mt-4 flex gap-2">
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
              <input type="hidden" name="_id" value={ exclusion._id } />
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white"
              >
                Delete
              </button>
            </form>)}
          </div>)}
        </div>
      ))}
    </div>
  </>);
}
