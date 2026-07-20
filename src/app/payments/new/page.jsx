import savePayment from "@/api/payment/save-payment";
import Form from "../_components/form";

export default function NewPayment() {
  const newPayment = {};
  return <Form payment={newPayment} action={savePayment} />;
}
