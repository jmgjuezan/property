import { PropertyForm } from "../../_components";
import { fetchProperty, updateProperty } from "@/api/property";

export default async function EditProperty({
  params,
}) {
  const { id } = await params;
  const property = await fetchProperty(id);

  return <PropertyForm property={property} action={updateProperty} />;
}
