import PropertyForm from "../_components/property-form";
import saveProperty from "@/api/property/save-property";

export default function NewProperty() {
  const newProperty = {};
  return <PropertyForm
    property={newProperty}
    action={saveProperty}
  />;
}
