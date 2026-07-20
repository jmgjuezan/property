import Link from "next/link";
import { formatDate, formatAmount } from "@/lib/utility";
import Desktop from "./list/desktop";
import Mobile from "./list/mobile";

const GENERATE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_GENERATE_DUE === "true";
const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_DUE === "true";

export default function List({ dues }) {
  const hasData = dues && dues.length > 0;
  const duesData = hasData && dues.map((due) => ({
    ...due,
    dueDate: formatDate(due.dueDate),
    totalAmount: formatAmount(due.totalAmount),
  }));

  return (<>
    { hasData ? (<>
      <Mobile dues={duesData} />
      <Desktop dues={duesData} />
    </>) : (<>
        { (GENERATE_ENABLED || ADD_ENABLED) &&
          (<div className="mb-5 flex items-center justify-center">

        { GENERATE_ENABLED && (
          <Link
            href="/dues/generate"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
          >
            Generate
          </Link>
        )}

        { (GENERATE_ENABLED || ADD_ENABLED) &&
          (<span className="pr-3"></span>
        )}

        { ADD_ENABLED && (<Link
          href="/dues/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
        >
          Add
        </Link>)}

      </div>)}
      <div className="text-center mb-10">No due found</div>
    </>)}
  </>);
}
