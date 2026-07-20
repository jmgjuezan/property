import Link from "next/link";
import fetchProperties from "@/api/property/get-properties";

export default async function Form({ due, action }) {
  const properties = await fetchProperties();

  return (<form action={action} className="mx-75 my-5">
    {due?._id && <input type="hidden" name="_id" value={due._id} />}
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-y-8">
        <div>
          <label htmlFor="dueDate" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Due Date
          </label>
          <div className="mt-2">
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              defaultValue={due?.dueDate}
              required
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="property" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Property
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <select
                id="property"
                name="property"
                defaultValue={due?.property}
                required
                className="block w-full rounded-md py-1.5 text-base text-white focus:outline-none sm:text-sm/6"
              >
                <option value="" className="bg-black text-white">
                  Select property
                </option>
                {properties && properties.map((property) => (
                  <option
                    key={property._id}
                    value={property.name}
                    className="bg-black text-white"
                  >
                    {property.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="dueFor" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Due For
          </label>
          <div className="mt-2">
            <select
              id="dueFor"
              name="dueFor"
              defaultValue={"Water and Electricity"}
              required
              disabled
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option value="">Select due type</option>
              <option value="Rent">Rent</option>
              <option value="Water and Electricity">Water and Electricity</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="electricity" className="block text-sm/6 font-medium text-white">
            Electricity
          </label>
          <div className="mt-2">
            <input
              id="electricity"
              name="electricity"
              type="number"
              defaultValue={due?.electricity}
              min={0}
              step={1}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="electricityFromDate" className="block text-sm/6 font-medium text-white">
            Electricity From
          </label>
          <div className="mt-2">
            <input
              id="electricityFromDate"
              name="electricityFromDate"
              type="date"
              defaultValue={due?.electricityFromDate}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="electricityToDate" className="block text-sm/6 font-medium text-white">
            Electricity To
          </label>
          <div className="mt-2">
            <input
              id="electricityToDate"
              name="electricityToDate"
              type="date"
              defaultValue={due?.electricityToDate}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="water" className="block text-sm/6 font-medium text-white">
            Water
          </label>
          <div className="mt-2">
            <input
              id="water"
              name="water"
              type="number"
              defaultValue={due?.water}
              min={0}
              step={1}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="waterFromDate" className="block text-sm/6 font-medium text-white">
            Water From
          </label>
          <div className="mt-2">
            <input
              id="waterFromDate"
              name="waterFromDate"
              type="date"
              defaultValue={due?.waterFromDate}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="waterToDate" className="block text-sm/6 font-medium text-white">
            Water To
          </label>
          <div className="mt-2">
            <input
              id="waterToDate"
              name="waterToDate"
              type="date"
              defaultValue={due?.waterToDate}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        <div>
          <label htmlFor="totalAmount" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
            Total Amount
          </label>
          <div className="mt-2">
            <input
              id="totalAmount"
              name="totalAmount"
              type="number"
              defaultValue={due?.totalAmount}
              min={1}
              step={1}
              required
              disabled
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link href="/dues" className="text-sm/6 font-semibold text-white">
        Back
      </Link>
      <button type="submit" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
        Save
      </button>
    </div>
  </form>);
}
