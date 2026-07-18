import Link from "next/link";
import { formatName } from "@/lib/utility";
import TenantListMobile from "./tenant-list-mobile";
import TenantListDesktop from "./tenant-list-desktop";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_TENANT === "true";

export default function TenantList({ tenants }) {
  const hasData = tenants && tenants.length > 0;
  const tenantData = hasData && tenants.map((tenant) => ({
    name: formatName(tenant),
    firstName: tenant.firstName,
    middleName: tenant.middleName,
    lastName: tenant.lastName,
    _id: tenant._id,
  }));

  return (<>
    { hasData ? (<>
      <TenantListMobile tenants={ tenantData } />
      <TenantListDesktop tenants={ tenantData } />
    </>) : (<>
      { ADD_ENABLED && (<div className="mb-5 flex items-center justify-center">
        <Link
          href="/tenants/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
        >
          Add
        </Link>
      </div>)}
      <div className="mb-10 text-center">No tenant found</div>
    </>)}
  </>);
}