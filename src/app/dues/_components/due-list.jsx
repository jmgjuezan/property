import {
  formatDate,
  formatAmount,
} from '@/lib/utility';
import DueListDesktop from "./due-list-desktop";
import DueListMobile from "./due-list-mobile";

export default function DueList({ dues }) {
  const hasData = dues && dues.length > 0;
  const duesData = hasData && dues.map((due) => ({
    ...due,
    dueDate: formatDate(due.dueDate),
    totalAmount: formatAmount(due.totalAmount),
  }));

  return (<>
    { hasData ? (<>
      <DueListMobile dues={duesData} />
      <DueListDesktop dues={duesData} />
    </>) : (
      <div className="text-center mb-10">No due found</div>
    )}
  </>);
}
