import Link from "next/link";
import PropertyListMobile from "./property-list-mobile";
import PropertyListDesktop from "./property-list-desktop";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_PROPERTY === "true";

export default function PropertyList({ properties }) {
  const hasData = properties && properties.length > 0;
  const propertyData = hasData && properties;

  return (<>
    { hasData ? (<>
      <PropertyListMobile properties={ propertyData } />
      <PropertyListDesktop properties={ propertyData } />
    </>) : (<>
      { ADD_ENABLED && (<div className="mb-5 flex items-center justify-center">
        <Link
          href="/properties/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
        >
          Add
        </Link>
      </div>)}
      <div className="mb-10 text-center">No property found</div>
    </>)}
  </>);
}