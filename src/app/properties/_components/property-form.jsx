import Link from "next/link";

export default function PropertyForm({ property, action }) {

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <form action={action}>
      { property?._id && (<input type="hidden" name="_id" value={property._id} /> )}
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="name">Name</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={property.name}
                minLength={5}
                maxLength={100}
                autoComplete="off"
                required={true}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
              <label htmlFor="address">Address</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={property.address}
                minLength={25}
                maxLength={250}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
              <label htmlFor="maxTenant">Max Tenant</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="maxTenant"
                name="maxTenant"
                type="number"
                defaultValue={property.maxTenant}
                min={1}
                step={1}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
              <label htmlFor="acquiredDate">Acquired Date</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="acquiredDate"
                name="acquiredDate"
                type="date"
                defaultValue={property.acquiredDate}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2">Status</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="standBy"
                  value={true}
                  defaultChecked={property.standBy}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-white">Stand By</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="standBy"
                  value={false}
                  defaultChecked={property.standBy !== undefined && !property.standBy}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-white">Operational</span>
              </label>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
              <Link href="/properties" className="text-sm/6 font-semibold text-white mr-4">
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
