import Link from "next/link";
import { redirect } from "next/navigation";
import fetchProperties from "@/api/property/get-properties";
import fetchTenant from "@/api/tenant/get-tenant";
import { formatAmount, formatDate } from "@/lib/utility";

export default async function TenantForm({ params }) {
  const { id } = await params || {};
  const tenant = await fetchTenant(id) || {};
  const hasData = tenant.firstName;
  const properties = hasData && await fetchProperties() || [];
  const property = hasData &&
                   properties.find(property => property._id === tenant.property) ||
                   tenant.property;

  if (!hasData) {
    redirect("/tenants");
  }

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <div className="mt-6 border-t border-white/10">
      <dl className="divide-y divide-white/10">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="ml-2">
            <Link
              href="/tenants"
              className="text-sm/6 font-semibold text-white rounded-md bg-indigo-500 px-3 py-2"
            >
              ◄ Back
            </Link>
          </dt>
          <dd></dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">First Name</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { tenant.firstName }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Middle Name</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { tenant.middleName }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Last Name</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { tenant.lastName }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Property</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { property.name || property }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">
            Move-in Date<br />(Rent Due Date)
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
            { formatDate(tenant.moveInDate) }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">
            Payment Date<br />(Preferred Rent Due Date)
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
            { tenant.paymentDate ? formatDate(tenant.paymentDate) : "Same as Move-in Date" }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Rent Amount</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {`Php ${formatAmount(tenant.rentAmount)}`}
          </dd>
        </div>
      </dl>
    </div>
  </div>);
}
