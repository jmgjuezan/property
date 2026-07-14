import {
  formatDate,
  formatAmount,
} from "@/lib/utility";
import PaymentListMobile from "./payment-list-mobile";
import PaymentListDesktop from "./payment-list-desktop";

export default function PaymentList({ payments }) {
  const hasData = payments && payments.length > 0;
  const paymentData = hasData && payments.map((payment) => ({
    ...payment,
    paymentDate: formatDate(payment.paymentDate),
    amount: formatAmount(payment.amount),
  }));

  return (<>
    { hasData ? (<>
        <PaymentListMobile payments={paymentData} />
        <PaymentListDesktop payments={paymentData} />
      </>)

      : <div className="text-center mb-10">No payment found</div>
    }
  </>);
}
