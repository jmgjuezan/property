import { PropertyForm } from "../_components";
import { saveProperty } from "@/api/property";

export default function NewProperty() {
  const newProperty = {};
  return <PropertyForm
    property={newProperty}
    action={saveProperty}
  />;
}
