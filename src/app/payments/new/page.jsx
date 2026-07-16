import PaymentForm from "../_components/payment-form";
import savePayment from "@/api/payment/save-payment";

export default function NewPayment() {
  const newPayment = {};
  return <PaymentForm payment={newPayment} action={savePayment} />;
}
