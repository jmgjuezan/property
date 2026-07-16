import fetchTenants from "@/api/tenant/get-tenants";
import TenantList from "./_components/tenant-list";

export const dynamic = "force-dynamic";

export default async function TenantsPage() {
  const tenants = await fetchTenants();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">Tenant Directory</h1>
    </div>
    <TenantList tenants={tenants} />
  </main>);
}
