import PropertyForm from "../../_components/property-form";
import fetchProperty from "@/api/property/get-property";
import updateProperty from "@/api/property/update-property";

export default async function EditProperty({
  params,
}) {
  const { id } = await params;
  const property = await fetchProperty(id);

  return <PropertyForm property={property} action={updateProperty} />;
}
