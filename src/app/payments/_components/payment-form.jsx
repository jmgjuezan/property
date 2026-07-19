import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import { formatName } from "@/lib/utility";

export default async function PaymentForm({ payment, action }) {
  const properties = await fetchProperties();
  const tenants = await fetchTenants();
  const tenantData = tenants && tenants.length > 0 && tenants.map((tenant) => ({
    name: formatName(tenant),
    _id: tenant._id,
  }));

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <form action={action}>
      { payment?._id && (
        <input type="hidden" name="_id" value={payment._id} />
      )}
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="paymentDate">
                Payment Date
              </label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
              <input
                id="paymentDate"
                name="paymentDate"
                type="date"
                defaultValue={payment.paymentDate}
                required={true}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="amount">Amount</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <input
                id="amount"
                name="amount"
                type="number"
                defaultValue={payment.amount}
                min={1}
                step={0.1}
                required={true}
                autoComplete="off"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="paymentFor">Payment For</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <select
                id="paymentFor"
                name="paymentFor"
                defaultValue={payment.paymentFor}
                required={true}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option
                  value=""
                  className="bg-black text-white"
                >
                  Select a type
                </option>
                <option
                  value="Rent"
                  className="bg-black text-white"
                >
                  Rent
                </option>
                <option
                  value="Water and Electricity"
                  className="bg-black text-white"
                >
                  Water and Electricity
                </option>
              </select>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
              <label htmlFor="tenant">Tenant</label>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
              <select
                id="tenant"
                name="tenant"
                defaultValue={payment.tenant}
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
                defaultValue={payment.property}
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
              <Link href="/payments" className="text-sm/6 font-semibold text-white mr-4">
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
