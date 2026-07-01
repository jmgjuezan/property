export default function TenantListLeftItem({
  firstName,
  middleName,
  lastName,
}) {

  return (<div className="flex min-w-0 gap-x-4">
    <div className="min-w-0 flex-auto max-w-lg">
      <p className="text-sm/6 font-semibold text-white">
        {
          firstName
        }{
          middleName && middleName.trim() !== '' ? ` ${middleName} ` : ' '
        }{
          lastName
        }
      </p>
    </div>
  </div>);
}