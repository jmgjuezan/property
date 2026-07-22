"use server";

import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function fetchDues() {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    return dues;
  }

  try {
    const response = await fetch(DUES_URL, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
