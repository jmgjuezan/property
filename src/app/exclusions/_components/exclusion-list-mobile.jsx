import Link from "next/link";

export default function ExclusionListMobile({ exclusions }) {
  return (<>
    <div className="text-center mb-5 sm:hidden">
      <Link
        href="/exclusions/new"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
      >
        Add Exclusion
      </Link>
    </div>
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
        </div>
      ))}
    </div>
  </>);
}
