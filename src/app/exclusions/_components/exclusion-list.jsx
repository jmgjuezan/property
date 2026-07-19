import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import { formatDate, formatName } from "@/lib/utility";
import ExclusionListMobile from "./exclusion-list-mobile";
import ExclusionListDesktop from "./exclusion-list-desktop";

const ADD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADD_TENANT === "true";

export default async function ExclusionList({ exclusions }) {
  const hasData = exclusions && exclusions.length > 0;
  const properties = hasData ? await fetchProperties() : [];
  const tenants = hasData ? await fetchTenants() : [];
  const tenantData = hasData && tenants.map((tenant) => ({
    name: formatName(tenant),
    _id: tenant._id,
  }));
  const exclusionData = hasData && exclusions.map((exclusion) => ({
    ...exclusion,
    exclusionDate: formatDate(exclusion.exclusionDate),
    exclusionDateFrom: formatDate(exclusion.exclusionDateFrom),
    exclusionDateTo: formatDate(exclusion.exclusionDateTo),
    property: properties.find(property => property._id === exclusion.property)?.name || exclusion.property,
    name: tenantData.find(tenant => tenant._id === exclusion.name)?.name || exclusion.name
  }));

  return (<>
    { hasData ? (<>
      <ExclusionListMobile exclusions={ exclusionData } />
      <ExclusionListDesktop exclusions={ exclusionData } />
    </>) : (<>
      { ADD_ENABLED && (<div className="mb-5 flex items-center justify-center">
        <Link
          href="/exclusions/new"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
        >
          Add
        </Link>
      </div>)}
      <div className="text-center mb-10">No exclusion found</div>
    </>)}
  </>);
}
