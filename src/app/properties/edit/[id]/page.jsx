import { redirect } from "next/navigation";
import fetchProperty from "@/api/property/get-property";
import updateProperty from "@/api/property/update-property";
import Form from "../../_components/form";

export default async function EditProperty({
  params,
}) {
  const { id } = await params || {};
  const property = await fetchProperty(id) || {};

  if (!property.name) {
    redirect("/properties");
  }

  return <Form property={property} action={updateProperty} />;
}
