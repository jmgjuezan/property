import { DueForm } from "../_components";
import { saveDue } from "@/api/due";

export default function NewDue() {
  const newDue = {};
  return <DueForm due={newDue} action={saveDue} />;
}
