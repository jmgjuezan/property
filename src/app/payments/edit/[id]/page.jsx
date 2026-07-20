import { redirect } from "next/navigation";
import fetchPayment from "@/api/payment/get-payment";
import updatePayment from "@/api/payment/update-payment";
import Form from "../../_components/form";

export default async function EditPayment({ params }) {
  const { id } = await params || {};
  const payment = await fetchPayment(id) || {};

  if (!payment.paymentDate) {
    redirect("/payments");
  }

  return <Form payment={payment} action={updatePayment} />;
}
