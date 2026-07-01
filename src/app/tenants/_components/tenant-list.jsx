import {
  TenantListLeftItem,
  TenantListRightItem,
} from '.';

export default function TenantList({
  tenants,
}) {

  return (<ul role="list" className="divide-y divide-white/5">
    { !tenants || tenants.length === 0 ?
      <div className="text-center">
        No tenant found.
      </div>
      : tenants.map((tenant) => (
      <li
        key={ tenant._id }
        className="flex justify-between gap-x-6 py-5"
      >
        <TenantListLeftItem
          firstName={tenant.firstName}
          middleName={tenant.middleName}
          lastName={tenant.lastName}
        />
        <TenantListRightItem
          id={tenant._id}
        />
      </li>
    ))}
  </ul>);
}