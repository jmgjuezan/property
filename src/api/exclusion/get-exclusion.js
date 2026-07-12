import { exclusions } from "@/lib/constants";

export default async function fetchExclusion(id) {
  if (process.env.MOCK_ENABLED === "true") {
    return exclusions?.find((item) => item._id === id) ?? null;
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/exclusions/${id}`, { cache: "no-store" });
    return response.ok ? await response.json() : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
