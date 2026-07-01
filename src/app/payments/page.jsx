import { fetchPayments } from "@/api/payment";
import { PaymentList } from "./_components";

export const dynamic = "force-dynamic";

export default async function PaymentsPage() {
  const payments = await fetchPayments();

  return (<main
    className="grow"
  >
    <h1 className="text-center mt-10 mb-10 font-bold">Payment History</h1>
    <PaymentList payments={payments} />
  </main>);
}
