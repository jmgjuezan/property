import { ExclusionForm } from "../../_components";
import { fetchExclusion, updateExclusion } from "@/api/exclusion";

export default async function EditExclusion({ params }) {
  const { id } = await params;
  const exclusion = await fetchExclusion(id);

  return <ExclusionForm exclusion={exclusion} action={updateExclusion} />;
}
