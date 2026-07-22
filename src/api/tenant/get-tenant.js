"use server";

import { tenants } from "@/lib/constants";
import { TENANTS_URL } from "../urls";

export default async function fetchTenant(id) {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    const tenant = tenants.find(
      tenant => tenant._id === id
    );
    console.debug(tenant);
    return tenant;
  }

  try {
    const url = `${TENANTS_URL}/${id}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    redirect("/tenants");
  }
}
