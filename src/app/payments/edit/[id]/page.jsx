import PaymentForm from "../../_components/payment-form";
import fetchPayment from "@/api/payment/get-payment";
import updatePayment from "@/api/payment/update-payment";

export default async function EditPayment({ params }) {
  const { id } = await params;
  const payment = await fetchPayment(id);

  return <PaymentForm payment={payment} action={updatePayment} />;
}
