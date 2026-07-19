import { redirect } from "next/navigation";
import fetchProperty from "@/api/property/get-property";
import updateProperty from "@/api/property/update-property";
import PropertyForm from "../../_components/property-form";

export default async function EditProperty({
  params,
}) {
  const { id } = await params || {};
  const property = await fetchProperty(id) || {};

  if (!property.name) {
    redirect("/properties");
  }

  return <PropertyForm property={property} action={updateProperty} />;
}
