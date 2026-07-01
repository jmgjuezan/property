import { PaymentForm } from "../../_components";
import { fetchPayment } from "@/api/payment";
import { updatePayment } from "@/api/payment";

export default async function EditPayment({ params }) {
  const { id } = await params;
  const payment = await fetchPayment(id);

  return <PaymentForm payment={payment} action={updatePayment} />;
}
