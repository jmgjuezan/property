import { properties } from "@/lib/constants";
import { PROPERTIES_URL } from "../urls";

export default async function fetchProperties() {
  if (process.env.MOCK_ENABLED === "true") {
    return properties;
  }

  try {
    const response = await fetch(PROPERTIES_URL, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
