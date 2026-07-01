import Link from 'next/link'
import { fetchTenants } from '@/api/tenant';
import { TenantList } from './_components';

export const dynamic = 'force-dynamic';

export default async function TenantsPage() {
  const tenants = await fetchTenants();

  return (<div className="lg:mx-75 md:mx-5 sm:mx-5 my-5">
    <div className="flex justify-end mb-10">
      <Link
        href="/tenants/new"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Add tenant
      </Link>
    </div>

    <TenantList
      tenants={tenants}
    />
  </div>);
}
