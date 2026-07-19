import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import { formatName } from "@/lib/utility";
import ByToggle from "./by-toggle";

export default async function ExclusionForm({ exclusion, action }) {
  const tenants = await fetchTenants();
  const properties = await fetchProperties();
  const tenantData = tenants && tenants.length > 0 && tenants.map((tenant) => ({
    name: formatName(tenant),
    _id: tenant._id,
  }));

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <form action={action}>
      { exclusion?._id && <input type="hidden" name="_id" value={exclusion._id} /> }
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <ByToggle
            exclusionDate={exclusion.exclusionDate}
            exclusionDateFrom={exclusion.exclusionDateFrom}
            exclusionDateTo={exclusion.exclusionDateTo}
          />

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="name">Name</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <select
                id="name"
                name="name"
                defaultValue={exclusion.name}
                required={true}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option
                  value=""
                  className="bg-black text-white"
                >
                  Select a tenant
                </option>
                {tenantData && tenantData.map((tenant) => (
                  <option
                    key={tenant._id}
                    value={tenant._id}
                    className="bg-black text-white"
                  >
                    {tenant.name}
                  </option>
                ))}
              </select>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="property">Property</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <select
                id="property"
                name="property"
                defaultValue={exclusion.property}
                required={true}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option
                  value=""
                  className="bg-black text-white"
                >
                  Select a property
                </option>
                {properties && properties.map((property) => (
                  <option
                    key={property._id}
                    value={property._id}
                    className="bg-black text-white"
                  >
                    {property.name}
                  </option>
                ))}
              </select>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
              <Link href="/exclusions" className="text-sm/6 font-semibold text-white mr-4">
                Back
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
              >
                Save
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </form>
  </div>);
}

/*
<div className="space-y-12">
      <div className="grid grid-cols-1 gap-y-8">
        <div>
          <label htmlFor="name" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Name
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <select
                id="name"
                name="name"
                defaultValue={exclusion?.name ?? ""}
                required
                className="block w-full rounded-md bg-transparent py-1.5 text-base text-white focus:outline-none sm:text-sm/6"
              >
                <option value="" className="bg-black text-white">
                  Select tenant
                </option>
                {tenants?.map((tenant) => (
                  <option
                    key={tenant._id}
                    value={`${tenant.firstName} ${tenant.lastName}`}
                    className="bg-black text-white"
                  >
                    {tenant.firstName} {tenant.middleName ? `${tenant.middleName} ` : ""}{tenant.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="property" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Property
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <select
                id="property"
                name="property"
                defaultValue={exclusion?.property ?? ""}
                required
                className="block w-full rounded-md bg-transparent py-1.5 text-base text-white focus:outline-none sm:text-sm/6"
              >
                <option value="" className="bg-black text-white">
                  Select property
                </option>
                {properties?.map((property) => (
                  <option
                    key={property._id}
                    value={property.name}
                    className="bg-black text-white"
                  >
                    {property.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="exclusionDate" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Exclusion Date
          </label>
          <div className="mt-2">
            <input
              id="exclusionDate"
              name="exclusionDate"
              type="date"
              defaultValue={exclusion?.exclusionDate ?? new Date().toLocaleDateString("en-CA")}
              required
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="exclusionDateFrom" className="block text-sm/6 font-medium text-white">
            Exclusion Date From
          </label>
          <div className="mt-2">
            <input
              id="exclusionDateFrom"
              name="exclusionDateFrom"
              type="date"
              defaultValue={exclusion?.exclusionDateFrom ?? ""}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="exclusionDateTo" className="block text-sm/6 font-medium text-white">
            Exclusion Date To
          </label>
          <div className="mt-2">
            <input
              id="exclusionDateTo"
              name="exclusionDateTo"
              type="date"
              defaultValue={exclusion?.exclusionDateTo ?? ""}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>
      </div>
    </div>
*/
