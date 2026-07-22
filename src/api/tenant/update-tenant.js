"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { tenants } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { TENANTS_URL } from "../urls";

export default async function updateTenant(tenantFormData) {
  const tenant = formatRequest(tenantFormData);
  const id = tenant._id;

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    console.debug("Updating (mock) tenant:", tenant);
    const index = tenants.findIndex(t => t._id === id);

    if (index < 0) { // Not found
      redirect("/tenants");
    }

    tenants[index] = {
      ...tenants[index],
      ...tenant,
    };
    
    console.debug(tenants);
  } else {
    try {
      const url = `${TENANTS_URL}/${id}`;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tenant),
      });
    } catch (err) {
      console.error(err);
      console.log(tenant);
    }
  }

  revalidatePath("/tenants");
  redirect("/tenants");
}
