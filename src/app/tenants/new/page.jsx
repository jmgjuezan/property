import { TenantForm } from "../_components";
import { saveTenant } from "@/api/tenant";

export default function NewTenant() {
  const newTenant = {};
  return <TenantForm
    tenant={newTenant}
    action={saveTenant}
  />;
}
