import fetchPayments from "@/api/payment/get-payments";
import List from "./_components/list";

export const dynamic = "force-dynamic";

export default async function PaymentsPage() {
  const payments = await fetchPayments();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">{`Payment History (${payments.length})`}</h1>
    </div>
    <List payments={payments} />
  </main>);
}
