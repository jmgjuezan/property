"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";
import { EXCLUSIONS_URL } from "../urls";

export default async function saveExclusion(exclusionFormData) {
  const exclusion = Object.fromEntries(exclusionFormData.entries());

  if (process.env.MOCK_ENABLED === "true") {
    exclusion._id = String(Math.floor(Math.random() * 100000));
    exclusions.push(exclusion);
  } else {
    try {
      await fetch(`${EXCLUSIONS_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exclusion),
      });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/exclusions");
  redirect("/exclusions");
}
