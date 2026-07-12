"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";

export default async function updateExclusion(exclusionFormData) {
  const exclusion = Object.fromEntries(exclusionFormData.entries());

  if (process.env.MOCK_ENABLED === "true") {
    const existingIndex = exclusions.findIndex((item) => item._id === exclusion._id);
    if (existingIndex >= 0) {
      exclusions[existingIndex] = { ...exclusions[existingIndex], ...exclusion };
    } else {
      exclusion._id = String(Math.floor(Math.random() * 100000));
      exclusions.push(exclusion);
    }
  } else {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/v1/exclusions/${exclusion._id}`, {
        method: "PUT",
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
