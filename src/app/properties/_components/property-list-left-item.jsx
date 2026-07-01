import Image from "next/image";

const DEFAULT_LOGO = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500";
const NO_ADDRESS_TEXT = "No address provided";

export default function PropertyListLeftItem({
  name,
  logo,
  address,
}) {

  return (<div className="flex min-w-0 gap-x-4">
    <Image
      alt={`${name} Image`}
      src={ !logo || logo === '' ? DEFAULT_LOGO : logo }
      width={500}
      height={500}
      className="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
    />
    <div className="min-w-0 flex-auto max-w-lg">
      <p className="text-sm/6 font-semibold text-white">
        { name }
      </p>
      <p className="mt-1 truncate text-xs/5 text-gray-400">
        { address ?? NO_ADDRESS_TEXT }
      </p>
    </div>
  </div>);
}