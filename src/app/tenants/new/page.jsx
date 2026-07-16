import TenantForm from "../_components/tenant-form";
import saveTenant from "@/api/tenant/save-tenant";

export default function NewTenant() {
  const newTenant = {};
  return <TenantForm
    tenant={newTenant}
    action={saveTenant}
  />;
}
