"use client";

import DateSelect from "./date-select";

const MOCK_ENABLED = process.env.NEXT_PUBLIC_MOCK_ENABLED === "true";

export default function ForToggle({
  selection, setSelection, properties, setGenerated, setDues, setError
}) {

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const newSelection = { ...selection }
    newSelection[id] = value;
    setSelection(newSelection);
    setError("");
    setGenerated(false);
  };

  const handleForChange = (e) => {
    let newSelection = { ...selection }
    const value = e.target.value;
  
    if (value === "Rent") {
      const {
        water,
        waterFromDate,
        waterToDate,
        electricity,
        electricityFromDate,
        electricityToDate,
        ...strippedSelection
      } = selection
      newSelection = strippedSelection;
    }

    newSelection["dueFor"] = value;
    setSelection(newSelection);
    setError("");
    setGenerated(false);
    setDues([]);
  }

  return (<>
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
        <label htmlFor="dueFor">Due For</label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
        <select
          id="dueFor"
          onChange={handleForChange}
          defaultValue={selection.dueFor}
          className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        >
          <option
            value=""
            className="bg-black text-white"
          >
            Select a type
          </option>
          <option
            value="Rent"
            className="bg-black text-white"
          >
            Rent
          </option>
          <option
            value="Water and Electricity"
            className="bg-black text-white"
          >
            Water and Electricity
          </option>
        </select>
      </dd>
    </div>
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
        <label htmlFor="property">Property</label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
        <select
          id="property"
          onChange={handleChange}
          className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        >
          <option
            value=""
            className="bg-black text-white"
          >
            Select a property
          </option>
          {  properties && properties.map((property) => (
            <option
              key={property._id}
              value={MOCK_ENABLED ? property.name : property._id}
              className="bg-black text-white"
            >
              {property.name}
            </option>
          ))}
        </select>
      </dd>
    </div>
    <DateSelect selection={selection} handleChange={handleChange} />
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
        <label htmlFor="dueYear">Due Year</label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
        <input
          id="dueYear"
          type="number"
          defaultValue={selection.dueYear}
          onChange={handleChange}
          min={2020}
          max={2150}
          step={1}
          autoComplete="off"
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        />
      </dd>
    </div>
    { selection.dueFor === "Water and Electricity" && (<>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
          <label htmlFor="electricity">Electricity (Bill Total)</label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
          <input
            id="electricity"
            type="number"
            onChange={handleChange}
            defaultValue={selection.electricity}
            min={1}
            step={0.1}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
          <label htmlFor="electricityFromDate">
            Electricity (From)
          </label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
          <input
            id="electricityFromDate"
            type="date"
            onChange={handleChange}
            defaultValue={selection.electricityFromDate}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
          />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
          <label htmlFor="electricityToDate">
            Electricity (To)
          </label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
          <input
            id="electricityToDate"
            type="date"
            onChange={handleChange}
            defaultValue={selection.electricityToDate}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
          />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2">
          <label htmlFor="water">Water (Bill Total)</label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
          <input
            id="water"
            type="number"
            onChange={handleChange}
            defaultValue={selection.water}
            min={1}
            step={0.1}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
          <label htmlFor="waterFromDate">
            Water (From)
          </label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
          <input
            id="waterFromDate"
            type="date"
            onChange={handleChange}
            defaultValue={selection.waterFromDate}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
          />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
          <label htmlFor="waterToDate">
            Water (To)
          </label>
        </dt>
        <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
          <input
            id="waterToDate"
            type="date"
            onChange={handleChange}
            defaultValue={selection.waterToDate}
            autoComplete="off"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
          />
        </dd>
      </div>
    </>)}
  </>);
}
