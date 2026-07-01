import { PaymentForm } from "../_components";
import { savePayment } from "@/api/payment";

export default function NewPayment() {
  const newPayment = {};
  return <PaymentForm payment={newPayment} action={savePayment} />;
}
