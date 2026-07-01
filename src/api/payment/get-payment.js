import { payments } from "@/lib/constants";

export default async function fetchPayment(id) {
  if (process.env.MOCK_ENABLED === "true") {
    return payments?.find((payment) => payment._id === id) ?? null;
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/payments/${id}`, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
