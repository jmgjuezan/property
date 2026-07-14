import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function fetchDue(id) {
  if (process.env.MOCK_ENABLED === "true") {
    return dues?.find((due) => due._id === id) ?? null;
  }

  try {
    const response = await fetch(`${DUES_URL}/${id}`, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
