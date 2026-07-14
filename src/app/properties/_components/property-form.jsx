import Link from "next/link";
import {
  PropertyInformation,
  PropertyStatus
} from ".";

export default function PropertyForm({
  property,
  action,
}) {

  return (<form action={action} className="mx-75 my-5">
    {property?._id && (
      <input type="hidden" name="_id" value={property._id} />
    )}
    <div className="space-y-12">
      <PropertyInformation
        name={property?.name}
        address={property?.address}
        logo={property?.logo}
      />
      <PropertyStatus
        currentTenant={property?.currentTenant}
        maxTenant={property?.maxTenant}
        acquiredDate={property?.acquiredDate}
        standBy={property?.standBy}
      />
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link
        href="/properties"
        className="text-sm/6 font-semibold text-white"
      >
        Back
      </Link>
      <button
        type="submit"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
      >
        Save
      </button>
    </div>
  </form>)
}
