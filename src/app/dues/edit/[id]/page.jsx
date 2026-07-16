import DueForm from "../../_components/due-form";
import fetchDue from "@/api/due/get-due";
import updateDue from "@/api/due/update-due";

export default async function EditDue({ params }) {
  const { id } = await params;
  const due = await fetchDue(id);

  return <DueForm due={due} action={updateDue} />;
}
