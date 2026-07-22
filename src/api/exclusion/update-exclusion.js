"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { EXCLUSIONS_URL } from "../urls";

export default async function updateExclusion(exclusionFormData) {
  const exclusion = formatRequest(exclusionFormData);
  const id = exclusion._id;

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    console.debug("Updating (mock) exclusion:", exclusion);
    const index = exclusions.findIndex(e => e._id === id);

    if (index < 0) { // Not found
      redirect("/exclusions");
    }

    exclusions[index] = {
      ...exclusions[index],
      ...exclusion,
    };
    
    console.debug(exclusion);
  } else {
    try {
      const url = `${EXCLUSIONS_URL}/${id}`;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exclusion),
      });
    } catch (err) {
      console.error(err);
      console.log(exclusion);
    }
  }

  revalidatePath("/exclusions");
  redirect("/exclusions");
}
