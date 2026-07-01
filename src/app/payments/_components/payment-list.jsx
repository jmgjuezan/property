import dayjs from 'dayjs';
import PaymentListMobile from './payment-list-mobile';
import PaymentListDesktop from './payment-list-desktop';

export default function PaymentList({ payments }) {
  const withData = payments && payments.length > 0;
  const paymentData = payments && payments.map((payment) => ({
    ...payment,
    paymentDate: dayjs(payment.paymentDate).format('MMMM DD, YYYY'),
    amount: payment.amount.toLocaleString('en-US'),
  }));

  return (<>
    { withData ?

      (<>
        <PaymentListMobile payments={paymentData} />
        <PaymentListDesktop payments={paymentData} />
      </>)

      : <div className="text-center mb-10">No payment found</div>
    }
  </>);
}
