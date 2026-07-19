import { exclusions } from "@/lib/constants";
import { EXCLUSIONS_URL } from "../urls";

export default async function fetchExclusions() {
  if (process.env.MOCK_ENABLED === "true") {
    return exclusions;
  }

  try {
    const response = await fetch(EXCLUSIONS_URL, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
