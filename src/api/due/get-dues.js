import { dues } from "@/lib/constants";

export default async function fetchDues() {
  if (process.env.MOCK_ENABLED === "true") {
    return dues;
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dues`, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
