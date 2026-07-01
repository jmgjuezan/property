export default async function PropertyInformation({
  name: propertyName,
  address: propertyAddress,
  logo: propertyLogo,
}) {
  
  return (<div className="border-b border-white/10 pb-12">
    <h2 className="text-base/7 font-semibold text-white">
      Property Information
    </h2>
    <p className="mt-1 text-sm/6 text-gray-400">
      Basic details of the property.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-white"
        >
          Name
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={propertyName}
              minLength={10}
              maxLength={100}
              placeholder="[Building/Subdivision] [Unit Number]"
              autoComplete="off"
              required={true}
              className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="address"
          className="block text-sm/6 font-medium text-white"
        >
          Address
        </label>
        <div className="mt-2">
          <textarea
            id="address"
            name="address"
            defaultValue={propertyAddress}
            rows={3}
            minLength={25}
            maxLength={250}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
        <p className="mt-3 text-sm/6 text-gray-400">
          [Street], [District], [Barangay], [City]
        </p>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="logo"
          className="block text-sm/6 font-medium text-white"
        >
          Logo URL
        </label>
        <div className="mt-2">
          <div
            className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
          >
            <input
              id="logo"
              name="logo"
              type="url"
              defaultValue={propertyLogo}
              placeholder="www.google.com"
              minLength={10}
              autoComplete="off"
              className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

    </div>
  </div>);
}