import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";
import ForToggle from "../_components/generate/for-toggle";

export default async function GenerateDue() {
  const properties = await fetchProperties() || [];
  const due = {};

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <div className="mt-6 border-t border-white/10">
      <dl className="divide-y divide-white/10">
        <ForToggle due={due} properties={properties} />
      
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
            <Link href="/dues" className="text-sm/6 font-semibold text-white mr-4">
              Back
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
            >
              Generate
            </button>
          </dd>
        </div>
      </dl>
    </div>
  </div>);
}
