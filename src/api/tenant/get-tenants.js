"use server";

import { tenants } from "@/lib/constants";
import { TENANTS_URL } from "../urls";

export default async function fetchTenants() {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    return tenants;
  }

  try {
    const response = await fetch(TENANTS_URL, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
