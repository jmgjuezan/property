import { redirect } from "next/navigation";
import fetchTenant from "@/api/tenant/get-tenant";
import updateTenant from "@/api/tenant/update-tenant";
import Form from "../../_components/form";

export default async function EditTenant({ params }) {
  const { id } = await params || {};
  const tenant = await fetchTenant(id) || {};

  if (!tenant.firstName) {
    redirect("/tenants");
  }

  return <Form tenant={tenant} action={updateTenant} />;
}
