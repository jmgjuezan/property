import { exclusions } from "@/lib/constants";
import { EXCLUSIONS_URL } from "../urls";

export default async function fetchExclusion(id) {
  if (process.env.MOCK_ENABLED === "true") {
    return exclusions?.find((item) => item._id === id) ?? null;
  }

  try {
    const response = await fetch(`${EXCLUSIONS_URL}/${id}`, { cache: "no-store" });
    return response.ok ? await response.json() : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
