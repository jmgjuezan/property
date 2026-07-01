import dayjs from 'dayjs';

export default function DueListLeftItem({
  due: {
    dueDate, property, totalAmount, breakdown,
    name, dueFor, coverageFromDate, coverageToDate,
    water, electricity,
  },
}) {
  return (
    <div className="min-w-0 flex-auto">
      {
        breakdown ?
        <>
          <p className="text-sm/6 font-semibold text-white">
            {property}
          </p>
          <p className="mt-0.5 truncate text-xs/5 text-gray-400">
            { dayjs(dueDate).format('MMMM DD, YYYY') }
          </p>
          <p className="mt-0.5 truncate text-xs/5 text-gray-400">
            Php {totalAmount?.toLocaleString('en-US')} for {dueFor}
          </p>
          <p className="truncate text-xs/5 text-gray-400">
            (Php {water.toLocaleString('en-US')} for Water, Php {electricity.toLocaleString('en-US')} for Electricity)
          </p>
          <div>
            <p
              className="text-xs font-semibold text-white my-0.5"
            >
              Breakdown
            </p>
            <table>
              <thead className="text-xs font-semibold text-white">
                <tr>
                  <th className="p-0.5">Name</th>
                  <th className="p-0.5">Water</th>
                  <th className="p-0.5">Electricity</th>
                  <th className="p-0.5">Total</th>
                </tr>
              </thead>
              <tbody className="text-xs text-white">
                {
                  breakdown.map((item, index) => (
                    <tr key={index}>
                      <td className="p-0.5">{item.name}</td>
                      <td className="p-0.5 text-right">{item.water.toLocaleString('en-US')}</td>
                      <td className="p-0.5 text-right">{item.electricity.toLocaleString('en-US')}</td>
                      <td className="p-0.5 text-right">{item.amount.toLocaleString('en-US')}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
        : <>
          <p className="text-sm/6 font-semibold text-white">
            {name} ♦ {property}
          </p>
          <p className="mt-0.5 truncate text-xs/5 text-gray-400">
            { dayjs(dueDate).format('MMMM DD, YYYY') }
          </p>
          <p className="mt-0.5 truncate text-xs/5 text-gray-400">
            For { dayjs(coverageFromDate).format('MMMM DD, YYYY') }&nbsp;
            to { dayjs(coverageToDate).format('MMMM DD, YYYY') }
          </p>
          <p className="mt-0.5 truncate text-xs/5 text-gray-400">
            Php {totalAmount?.toLocaleString('en-US')} for {dueFor}
          </p>
        </>
      }
    </div>
  );
}
