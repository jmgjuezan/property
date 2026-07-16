import ExclusionForm from "../../_components/exclusion-form";
import fetchExclusion from "@/api/exclusion/get-exclusion";
import updateExclusion from "@/api/exclusion/update-exclusion";

export default async function EditExclusion({ params }) {
  const { id } = await params;
  const exclusion = await fetchExclusion(id);

  return <ExclusionForm exclusion={exclusion} action={updateExclusion} />;
}
