import saveProperty from "@/api/property/save-property";
import Form from "../_components/form";

export default function NewProperty() {
  const newProperty = {};
  return <Form property={newProperty} action={saveProperty} />;
}
