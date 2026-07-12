import { ExclusionForm } from "../_components";
import { saveExclusion } from "@/api/exclusion";

export default function NewExclusion() {
  const newExclusion = {};
  return <ExclusionForm exclusion={newExclusion} action={saveExclusion} />;
}
