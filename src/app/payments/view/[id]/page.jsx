import Link from "next/link";
import fetchPayment from "@/api/payment/get-payment";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import { formatAmount, formatDate, formatName } from "@/lib/utility";

export default async function TenantForm({ params }) {
  const { id } = await params;
  const payment = await fetchPayment(id);
  const properties = await fetchProperties();
  const property = payment && properties && properties.find(property => property._id === payment.property);
  const tenants = await fetchTenants();
  const tenantData = payment && tenants && tenants.map((tenant) => ({
    name: formatName(tenant),
    _id: tenant._id,
  }));
  const tenant = payment && tenants && tenantData.find(tenant => tenant._id === payment.tenant);

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <div className="mt-6 border-t border-white/10">
      <dl className="divide-y divide-white/10">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="ml-2">
            <Link
              href="/payments"
              className="text-sm/6 font-semibold text-white rounded-md bg-indigo-500 px-3 py-2"
            >
              ◄ Back
            </Link>
          </dt>
          <dd></dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Payment Date</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { formatDate(payment.paymentDate) }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Amount</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            {`Php ${formatAmount(payment.amount)}`}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Payment For</dt>
          <dd className="capitalize mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { payment.paymentFor }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Paid By</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { tenant.name }
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2">Property</dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
            { property.name }
          </dd>
        </div>
      </dl>
    </div>
  </div>);
}
