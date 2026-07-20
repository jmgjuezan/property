import fetchDues from "@/api/due/get-dues";
import List from "./_components/list";

export const dynamic = "force-dynamic";

export default async function DuesPage() {
  const dues = await fetchDues();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">{`Due List (${dues.length})`}</h1>
    </div>
    <List dues={dues} />
  </main>);
}
