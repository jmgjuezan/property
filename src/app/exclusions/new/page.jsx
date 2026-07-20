import Form from "../_components/form";
import saveExclusion from "@/api/exclusion/save-exclusion";

export default function NewExclusion() {
  const newExclusion = {};
  return <Form exclusion={newExclusion} action={saveExclusion} />;
}
