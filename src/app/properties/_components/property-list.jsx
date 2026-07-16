import PropertyListLeftItem from "./property-list-left-item";
import PropertyListRightItem from "./property-list-right-item";

export default function PropertyList({
  properties,
}) {

  return (<ul role="list" className="divide-y divide-white/5">
    { !properties || properties.length === 0 ?
      <div className="text-center">
        No property found.
      </div>
      : properties.map((property) => (
      <li
        key={ property._id }
        className="flex justify-between gap-x-6 py-5"
      >
        <PropertyListLeftItem
          name={property.name}
          logo={property.logo}
          address={property.address}
        />
        <PropertyListRightItem
          id={property._id}
          currentTenant={property.currentTenant}
          maxTenant={property.maxTenant}
          standBy={property.standBy}
          acquiredDate={property.acquiredDate}
        />
      </li>
    ))}
  </ul>);
}