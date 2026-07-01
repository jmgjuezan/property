import { DueForm } from "../../_components";
import { fetchDue } from "@/api/due";
import { updateDue } from "@/api/due";

export default async function EditDue({ params }) {
  const { id } = await params;
  const due = await fetchDue(id);

  return <DueForm due={due} action={updateDue} />;
}
