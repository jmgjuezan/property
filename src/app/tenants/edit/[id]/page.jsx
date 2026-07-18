import fetchTenant from "@/api/tenant/get-tenant";
import updateTenant from "@/api/tenant/update-tenant";
import TenantForm from "../../_components/tenant-form";

export default async function EditTenant({ params }) {
  const { id } = await params;
  const tenant = await fetchTenant(id);

  return <TenantForm tenant={tenant} action={updateTenant} />;
}
