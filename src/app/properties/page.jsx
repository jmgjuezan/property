import fetchProperties from "@/api/property/get-properties";
import PropertyList from "./_components/property-list";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  return (<main className="grow">
    <div className="mt-10 mb-10 flex items-center justify-center gap-4">
      <h1 className="text-center font-bold">Property Catalog</h1>
    </div>
    <PropertyList properties={properties} />
  </main>);
}
