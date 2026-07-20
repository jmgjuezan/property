import saveTenant from "@/api/tenant/save-tenant";
import Form from "../_components/form";

export default function NewTenant() {
  const newTenant = {};
  return <Form tenant={newTenant} action={saveTenant} />;
}
