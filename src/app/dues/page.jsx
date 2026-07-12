import { fetchDues } from "@/api/due";
import { DueList } from "./_components";

export const dynamic = "force-dynamic";

export default async function DuesPage() {
  const dues = await fetchDues();

  return (
    <main className="grow">
      <div className="mt-10 mb-10 flex items-center justify-center gap-4">
        <h1 className="text-center font-bold">Due List</h1>
      </div>
      <DueList dues={dues} />
    </main>
  );
}
