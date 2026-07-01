import Link from "next/link";

export default function PaymentForm({ payment, action }) {
  return (
    <form action={action} className="mx-75 my-5">
      {payment?._id && <input type="hidden" name="_id" value={payment._id} />}
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="paymentDate" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
              Payment Date
            </label>
            <div className="mt-2">
              <input
                id="paymentDate"
                name="paymentDate"
                type="date"
                defaultValue={payment?.paymentDate ?? new Date().toLocaleDateString("en-CA")}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 [&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="property" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
              Property
            </label>
            <div className="mt-2">
              <input
                id="property"
                name="property"
                type="text"
                defaultValue={payment?.property ?? ""}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="tenant" className="block text-sm/6 font-medium text-white">
              Tenant
            </label>
            <div className="mt-2">
              <input
                id="tenant"
                name="tenant"
                type="text"
                defaultValue={payment?.tenant ?? ""}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="amount" className="block text-sm/6 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">
              Amount
            </label>
            <div className="mt-2">
              <input
                id="amount"
                name="amount"
                type="number"
                defaultValue={payment?.amount ?? 0}
                min={1}
                step={1}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/payments" className="text-sm/6 font-semibold text-white">
          Back
        </Link>
        <button type="submit" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
          Save
        </button>
      </div>
    </form>
  );
}
