import saveTenant from "@/api/tenant/save-tenant";
import TenantForm from "../_components/tenant-form";

export default function NewTenant() {
  const newTenant = {};
  return <TenantForm tenant={newTenant} action={saveTenant} />;
}
