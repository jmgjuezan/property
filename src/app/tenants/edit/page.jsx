import { TenantForm } from "../_components";
import { fetchTenant, updateTenant } from "@/api/tenant";

export default async function EditTenant({
  params,
}) {
  const { id } = await params;
  const tenant = await fetchTenant(id);

  return <TenantForm tenant={tenant} action={updateTenant} />;
}
