import Link from 'next/link'
import { deleteTenant } from '@/api/tenant'

export default function TenantListRightItem({
  id,
}) {

  return (<div className="sm:flex sm:items-end">
    <div className="flex gap-2 items-center">
      <Link
        href={`/tenants/edit/${id}`}
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 self-center"
      >
        Edit
      </Link>

      <form action={deleteTenant}> 
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