export default function PaymentListDesktop({
  payments,
}) {
    
  return (<table
    className="hidden sm:table table-auto mx-auto border border-solid border-gray-800 mb-5 rounded-2xl"
  >
    <thead>
      <tr>
        <th className="p-5 md:text-base text-xs bg-gray-800">Paid By</th>
        <th className="p-5 md:text-base text-xs bg-gray-800">Property</th>
        <th className="p-5 md:text-base text-xs bg-gray-800">Payment Date</th>
        <th className="p-5 md:text-base text-xs bg-gray-800">Amount</th>
        <th className="p-5 md:text-base text-xs bg-gray-800">Payment For</th>
      </tr>
    </thead>
    <tbody>
      { payments.map((payment) => (
        <tr
          key={ payment._id }
          className="border-t border-solid border-gray-800"
        >
          <td className="p-5 md:text-base text-xs">{ payment.paidBy }</td>
          <td className="p-5 md:text-base text-xs">{ payment.property }</td>
          <td className="p-5 md:text-base text-xs">{ payment.paymentDate }</td>
          <td className="p-5 md:text-base text-xs text-right">Php { payment.amount }</td>
          <td className="p-5 md:text-base text-xs">{ payment.paymentFor }</td>
        </tr>
      ))}
    </tbody>
  </table>);
}
