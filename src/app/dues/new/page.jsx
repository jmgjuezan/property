import DueForm from "../_components/due-form";
import saveDue from "@/api/due/save-due";

export default function NewDue() {
  const newDue = {};
  return <DueForm due={newDue} action={saveDue} />;
}
