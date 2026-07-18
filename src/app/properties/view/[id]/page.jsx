import Link from "next/link";
import fetchProperty from "@/api/property/get-property";
import { formatDate } from "@/lib/utility";

export default async function ViewProperty({ params }) {
  const { id } = await params || {};
  const property = await fetchProperty(id) || {};

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <div className="mt-6 border-t border-white/10">
      <dl className="divide-y divide-white/10">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="ml-2">
            <Link
              href="/properties"
              className="text-sm/6 font-semibold text-white rounded-md bg-indigo-500 px-3 py-2"
            >
              ◄ Back
            </Link>
          </dt>
          <dd></dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Name</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {property.name}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Address</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {property.address ?? "Unspecified"}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Tenant</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {`${property.currentTenant ?? 0} / ${property.maxTenant ?? 0}`}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Acquired Date</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {property.acquiredDate ? formatDate(property.acquiredDate) : "Unspecified"}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Status</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {property.standBy === false ? "Operational" : "Stand By"}
          </dd>
        </div>
      </dl>
    </div>
  </div>);
}
