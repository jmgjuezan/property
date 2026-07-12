export default function PaymentListMobile({
  payments,
}) {
    
  return (<div className="sm:hidden flex flex-col items-center justify-center pb-5">
    { payments.map((payment) => (
      <div
        key={ payment._id }
        className="rounded-lg m-1 p-5 bg-gray-800/50 min-w-75"
      >
        <p className="text-sm/6 font-semibold text-white">{ payment.paidBy }</p>
        <p className="text-sm/6 text-white">{ payment.property }</p>
        <p className="mt-1 text-xs/5 text-gray-400">{ payment.paymentDate }</p>
        <p className="mt-1 text-xs/5 text-gray-400">
          Php { payment.amount } for { payment.paymentFor }
        </p>
      </div>
    ))}
  </div>);
}
