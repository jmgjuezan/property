import Form from "../_components/form";
import saveDue from "@/api/due/save-due";

export default function NewDue() {
  const newDue = {};
  return <Form due={newDue} action={saveDue} />;
}
