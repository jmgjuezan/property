import ExclusionForm from "../_components/exclusion-form";
import saveExclusion from "@/api/exclusion/save-exclusion";

export default function NewExclusion() {
  const newExclusion = {};
  return <ExclusionForm exclusion={newExclusion} action={saveExclusion} />;
}
