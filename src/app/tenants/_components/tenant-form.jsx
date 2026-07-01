import Link from 'next/link'
import { fetchProperties } from '@/api/property';

export default async function TenantForm({
  tenant,
  action,
}) {
  const properties = await fetchProperties();

  return (<form action={action} className="mx-75 my-5">
    {tenant?._id && (
      <input type="hidden" name="_id" value={tenant._id} />
    )}
    <div className="space-y-12">
      <h2 className="text-base/7 font-semibold text-white">
        Tenant Information
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="firstName"
            className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            First Name
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={tenant?.firstName}
                minLength={2}
                maxLength={100}
                placeholder="John"
                autoComplete="off"
                autoCapitalize="words"
                autoFocus={true}
                required={true}
                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="middleName"
            className="block text-sm/6 font-medium text-white"
          >
            Middle Name
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <input
                id="middleName"
                name="middleName"
                type="text"
                defaultValue={tenant?.middleName}
                minLength={2}
                maxLength={100}
                placeholder="Normal"
                autoComplete="off"
                autoCapitalize="words"
                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="lastName"
            className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Last Name
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <input
                id="lastName"
                name="lastName"
                type="text"
                defaultValue={tenant?.lastName}
                minLength={2}
                maxLength={100}
                placeholder="Doe"
                autoComplete="off"
                autoCapitalize="words"
                required={true}
                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="property"
            className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Property
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <select
                id="property"
                name="property"
                defaultValue={tenant?.property}
                required={true}
                className="block w-full rounded-md py-1.5 text-base text-white focus:outline-none  sm:text-sm/6"
              >
                <option
                  value=""
                  className="bg-black text-white"
                >
                  Select property
                </option>
                {properties && properties.map((property) => (
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

        <div className="sm:col-span-4">
          <label
            htmlFor="moveInDate"
            className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Move-in Date (Rent Due Date)
          </label>
          <div className="mt-2">
            <input
              id="moveInDate"
              name="moveInDate"
              type="date"
              defaultValue={tenant?.moveInDate ?? new Date().toLocaleDateString('en-CA')}
              autoComplete="off"
              required={true}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="paymentDate"
            className="block text-sm/6 font-medium text-white"
          >
            Payment Date (Change Rent Due Date from Move-in Date)
          </label>
          <div className="mt-2">
            <input
              id="paymentDate"
              name="paymentDate"
              type="date"
              defaultValue={tenant?.paymentDate}
              autoComplete="off"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="rentAmount"
            className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Rent Amount
          </label>
          <div className="mt-2">
            <input
              id="rentAmount"
              name="rentAmount"
              type="number"
              defaultValue={tenant?.rentAmount ?? 0}
              min={1}
              step={1}
              autoComplete="off"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link
        href="/tenants"
        className="text-sm/6 font-semibold text-white"
      >
        Back
      </Link>
      <button
        type="submit"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
      >
        Save
      </button>
    </div>
  </form>)
}
