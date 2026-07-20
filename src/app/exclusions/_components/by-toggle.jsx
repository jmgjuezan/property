"use client";

import { useState } from "react";

export default function ByToggle({ exclusionDate, exclusionDateFrom, exclusionDateTo }) {
  const [selectedOption, setSelectedOption] = useState(exclusionDateFrom ? "range" : "day");

  return (<>
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium text-gray-100 ml-2">By</dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="day"
            checked={selectedOption === "day"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-white">Day</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="range"
            checked={selectedOption === "range"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-white">Range</span>
        </label>
      </dd>
    </div>
    {selectedOption === "day" && (<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center after:content-['*'] after:ml-0.5 after:text-red-500">
        <label htmlFor="exclusionDate">Exclusion Date</label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
        <input
          id="exclusionDate"
          name="exclusionDate"
          type="date"
          defaultValue={exclusionDate}
          required={true}
          autoComplete="off"
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
        />
      </dd>
    </div>)}
    {selectedOption === "range" && (<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
        <label htmlFor="exclusionDateFrom">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Exclusion Date
          </span>
          <br />
          (From)
        </label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
        <input
          id="exclusionDateFrom"
          name="exclusionDateFrom"
          type="date"
          defaultValue={exclusionDateFrom}
          required={true}
          autoComplete="off"
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
        />
      </dd>
    </div>)}
    {selectedOption === "range" && (<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium text-gray-100 ml-2 flex items-center">
        <label htmlFor="exclusionDateTo">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Exclusion Date
          </span>
          <br />
          (To)
        </label>
      </dt>
      <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2 flex items-center">
        <input
          id="exclusionDateTo"
          name="exclusionDateTo"
          type="date"
          defaultValue={exclusionDateTo}
          required={true}
          autoComplete="off"
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
        />
      </dd>
    </div>)}
  </>);
}
