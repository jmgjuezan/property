import Link from 'next/link'
import { deleteProperty } from '@/api/property'

const NO_ACQUIRED_DATE = "an unknown date";

export default function PropertyListRightItem({
  id,
  currentTenant,
  maxTenant,
  standBy,
  acquiredDate,
}) {

  return (<div className="sm:flex sm:items-end">
    <div className="shrink-0 flex flex-col items-end pr-5">
      <p className="text-sm/6 text-white">
        Tenant:&nbsp;
        {
          !currentTenant || currentTenant === '' ? 0 : currentTenant
        } / {
          !maxTenant || maxTenant === '' ? 0 : maxTenant
        }
      </p>
      { standBy === undefined || standBy ?
        <p className="mt-1 text-xs/5 text-gray-400">
          Acquired on {
            !acquiredDate || acquiredDate === '' ? NO_ACQUIRED_DATE : acquiredDate
          }
        </p>
        
        :

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/30 p-1">
            <div className="size-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs/5 text-gray-400">
            Operational
          </p>
        </div>
      }
    </div>

    <div className="flex gap-2 items-center">
      <Link
        href={`/properties/edit/${id}`}
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 self-center"
      >
        Edit
      </Link>

      <form action={deleteProperty}> 
        <input type="hidden" name="_id" value={id} />
        <button
          type="submit"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 cursor-pointer"
        >
          Delete
        </button>
      </form>
    </div>
  </div>);
}