import fetchPayments from "@/api/payment/get-payments";
import PaymentList from "./_components/payment-list";

export const dynamic = "force-dynamic";

export default async function PaymentsPage() {
  const payments = await fetchPayments();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">Payment History</h1>
    </div>
    <PaymentList payments={payments} />
  </main>);
}
