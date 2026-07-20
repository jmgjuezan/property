const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DateSelect({ due, properties }) {
  return (<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt className="flex items-center text-sm/6 font-medium text-gray-100 ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">
      <label htmlFor="dueFor">Due Date</label>
    </dt>
    <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 ml-2">
      <select
        id="dueFor"
        name="dueFor"
        defaultValue={due.dueFor}
        required={true}
        className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
      >
        <option
          value=""
          className="bg-black text-white"
        >
        Select a month
        </option>
        {  MONTHS.forEach((month, index) => (
          <option
            key={month}
            value={index + 1}
            className="bg-black text-white"
          >
            {month}
          </option>
        ))}
      </select>
    </dd>
</div>);
}