import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";

export default async function TenantForm({
  tenant,
  action,
}) {
  const properties = await fetchProperties();

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <form action={action}>
      { tenant?._id && (
        <input type="hidden" name="_id" value={tenant._id} />
      )}
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="name">First Name</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={tenant.firstName}
                minLength={2}
                maxLength={100}
                autoComplete="off"
                required={true}
                className="capitalize block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
              <label htmlFor="middleName">Middle Name</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="middleName"
                name="middleName"
                type="text"
                defaultValue={tenant.middleName}
                minLength={2}
                maxLength={100}
                autoComplete="off"
                className="capitalize block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="lastName">Last Name</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                defaultValue={tenant.lastName}
                minLength={2}
                maxLength={100}
                autoComplete="off"
                required={true}
                className="capitalize block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
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
                defaultValue={tenant.property}
                required={true}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option
                  value=""
                  className="bg-black text-white"
                >
                  Select a property
                </option>
                {properties && properties.map((tenant) => (
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
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
              <label htmlFor="moveInDate">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Move-in Date
                </span>
                <br />
                (Rent Due Date)
              </label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
              <input
                id="moveInDate"
                name="moveInDate"
                type="date"
                defaultValue={tenant.moveInDate}
                required={true}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
              <label htmlFor="paymentDate">Payment Date<br />(Preferred Rent Due Date)</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
              <input
                id="paymentDate"
                name="paymentDate"
                type="date"
                defaultValue={tenant.paymentDate}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="rentAmount">Rent Amount</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="rentAmount"
                name="rentAmount"
                type="number"
                defaultValue={tenant.rentAmount}
                min={1}
                step={1}
                required={true}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
              <Link href="/tenants" className="text-sm/6 font-semibold text-white mr-4">
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
