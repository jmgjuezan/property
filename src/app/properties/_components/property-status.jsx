export default async function PropertyStatus({
  currentTenant,
  maxTenant,
  acquiredDate,
  standBy,
}) {
  
  return (<div className="border-b border-white/10 pb-12">
    <h2 className="text-base/7 font-semibold text-white">
      Property Status
    </h2>
    <p className="mt-1 text-sm/6 text-gray-400">
      Current situation of the property.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="currentTenant"
          className="block text-sm/6 font-medium text-white"
        >
          Current Tenant
        </label>
        <div className="mt-2">
          <input
            id="currentTenant"
            name="currentTenant"
            type="number"
            defaultValue={currentTenant}
            min={0}
            step={1}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-sm/6 font-medium text-white"
        >
          Max Tenant
        </label>
        <div className="mt-2">
          <input
            id="maxTenant"
            name="maxTenant"
            type="number"
            defaultValue={maxTenant}
            min={1}
            step={1}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="acquiredDate"
          className="block text-sm/6 font-medium text-white"
        >
          Acquired Date
        </label>
        <div className="mt-2">
          <input
            id="acquiredDate"
            name="acquiredDate"
            type="date"
            defaultValue={acquiredDate}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <fieldset>
          <legend className="text-sm/6 text-white">
            Current Status
          </legend>
          <div className="mt-6 space-y-6">
            <div className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="standBy"
                    type="checkbox"
                    name="standBy"
                    defaultChecked={
                      standBy !== undefined && !standBy
                    }
                    aria-describedby="comments-description" className="col-start-1 row-start-1 appearance-none rounded-sm border border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto"
                  />
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0   group-has-checked:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0   group-has-indeterminate:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-sm/6">
                <label
                  htmlFor="standBy"
                  className="font-medium text-white"
                >
                  {
                    standBy === undefined || standBy ?
                    "On stand by" : "Operational"
                  }
                </label>
                <p className="text-gray-400">
                  {
                    standBy === undefined || standBy ?
                    "Property is acquired but not yet rented due to renovation or other causes." :
                    "Property receives rent or cash flow."
                  }
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>);
}