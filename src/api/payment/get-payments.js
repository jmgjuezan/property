"use server";

import { payments } from "@/lib/constants";
import { PAYMENTS_URL } from "../urls";

export default async function fetchPayments() {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    return payments;
  }

  try {
    const response = await fetch(PAYMENTS_URL, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
