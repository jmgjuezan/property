import savePayment from "@/api/payment/save-payment";
import PaymentForm from "../_components/payment-form";

export default function NewPayment() {
  const newPayment = {};
  return <PaymentForm payment={newPayment} action={savePayment} />;
}
