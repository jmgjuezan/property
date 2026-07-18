import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import { formatDate, formatAmount, formatName } from "@/lib/utility";
import PaymentListMobile from "./payment-list-mobile";
import PaymentListDesktop from "./payment-list-desktop";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_PAYMENT === "true";

export default async function PaymentList({ payments }) {
  const hasData = payments && payments.length > 0;
  const properties = hasData ? await fetchProperties() : [];
  const tenants = hasData ? await fetchTenants() : [];
  const tenantData = tenants && tenants.length > 0 && tenants.map((tenant) => ({
    name: formatName(tenant),
    _id: tenant._id,
  }));
  const paymentData = hasData && payments.map((payment) => ({
    ...payment,
    paymentDate: formatDate(payment.paymentDate),
    amount: formatAmount(payment.amount),
    property: properties.find(property => property._id === payment.property).name,
    tenant: tenantData.find(tenant => tenant._id === payment.tenant).name
  }));

  return (<>
    { hasData ? (<>
        <PaymentListMobile payments={paymentData} />
        <PaymentListDesktop payments={paymentData} />
      </>) : (<>
      { ADD_ENABLED && (<div className="mb-5 flex items-center justify-center">
        <Link
          href="/payments/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
        >
          Add
        </Link>
      </div>)}
      <div className="mb-10 text-center">No payment found</div>
    </>)}
  </>);
}
