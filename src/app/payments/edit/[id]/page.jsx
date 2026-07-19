import { redirect } from "next/navigation";
import fetchPayment from "@/api/payment/get-payment";
import updatePayment from "@/api/payment/update-payment";
import PaymentForm from "../../_components/payment-form";

export default async function EditPayment({ params }) {
  const { id } = await params || {};
  const payment = await fetchPayment(id) || {};

  if (!payment.paymentDate) {
    redirect("/payments");
  }

  return <PaymentForm payment={payment} action={updatePayment} />;
}
