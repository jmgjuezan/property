import { fetchExclusions } from "@/api/exclusion";
import { ExclusionList } from "./_components";

export const dynamic = "force-dynamic";

export default async function ExclusionsPage() {
  const exclusions = await fetchExclusions();

  return (
    <main className="grow">
      <div className="mt-10 mb-10 flex items-center justify-center gap-4">
        <h1 className="text-center font-bold">Exclusion History</h1>
      </div>
      <ExclusionList exclusions={exclusions} />
    </main>
  );
}
