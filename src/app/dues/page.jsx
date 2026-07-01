import Link from "next/link";
import { fetchDues } from "@/api/due";
import { DueList } from "./_components";

export const dynamic = "force-dynamic";

export default async function DuesPage() {
  const dues = await fetchDues();

  return (<>
    <h1 className="text-center mt-10 mb-5 font-bold">Due List</h1>
    <div className="flex h-screen justify-center">
      <div className="">
        <Link
          href="/dues/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Add due
        </Link>
      </div>

      <DueList dues={dues} />
    </div>
  </>);
}
