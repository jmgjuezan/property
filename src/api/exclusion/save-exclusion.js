"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { EXCLUSIONS_URL } from "../urls";

export default async function saveExclusion(exclusionFormData) {
  const exclusion = formatRequest(exclusionFormData);

  if (process.env.MOCK_ENABLED === "true") {
    console.debug(exclusion);
    exclusion._id = String(Math.floor(Math.random() * 100000));
    exclusions.push(exclusion);
    console.debug(exclusions);
  } else {
    try {
      await fetch(`${EXCLUSIONS_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exclusion),
      });
    } catch (err) {
      console.error(err);
      console.debug(exclusion);
    }
  }

  revalidatePath("/exclusions");
  redirect("/exclusions");
}
