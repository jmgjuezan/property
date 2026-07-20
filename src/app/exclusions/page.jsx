import fetchExclusions from "@/api/exclusion/get-exclusions";
import List from "./_components/list";

export const dynamic = "force-dynamic";

export default async function ExclusionsPage() {
  const exclusions = await fetchExclusions();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">{`Exclusion History (${exclusions.length})`}</h1>
    </div>
    <List exclusions={exclusions} />
  </main>);
}
