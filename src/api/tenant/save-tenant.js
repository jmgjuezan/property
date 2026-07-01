"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { tenants } from "@/lib/constants"
import { TENANTS_URL } from "../urls"

export default async function saveTenant(tenantFormData) {
  const tenant = Object.fromEntries(tenantFormData.entries());

  if (process.env.MOCK_ENABLED === "true") {
    console.debug(tenant);
    tenant._id = String(Math.floor(Math.random() * 100000));
    tenants.push(tenant);
    console.debug(tenants);
  } else {
    try {
      await fetch(TENANTS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(tenant),
      });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/tenants");
  redirect("/tenants");
}
