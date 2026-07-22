"use server";

import { payments } from "@/lib/constants";
import { PAYMENTS_URL } from "../urls";

export default async function fetchPayments(paidBy, property) {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    return payments;
  }

  try {console.log(paidBy)
    let url = PAYMENTS_URL;
  
    if (paidBy || property) url += "?";
    if (paidBy) url += `paid_by=${paidBy}`;
    if (paidBy && property) url += "&";
    if (property) url += `property=${property}`;console.log(url)
  
    const response = await fetch(url, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
