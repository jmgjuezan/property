import { redirect } from "next/navigation";
import fetchExclusion from "@/api/exclusion/get-exclusion";
import updateExclusion from "@/api/exclusion/update-exclusion";
import Form from "../../_components/form";

export default async function EditExclusion({ params }) {
  const { id } = await params || {};
  const exclusion = await fetchExclusion(id) || {};

  if (!exclusion.property) {
    redirect("/exclusions");
  }

  return <Form exclusion={exclusion} action={updateExclusion} />;
}
