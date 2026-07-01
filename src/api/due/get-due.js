import { dues } from "@/lib/constants";

export default async function fetchDue(id) {
  if (process.env.MOCK_ENABLED === "true") {
    return dues?.find((due) => due._id === id) ?? null;
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dues/${id}`, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
