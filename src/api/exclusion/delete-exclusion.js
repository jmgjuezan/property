"use server";

import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";
import { EXCLUSIONS_URL } from "../urls";

export default async function deleteExclusion(exclusionFormData) {
  const data = Object.fromEntries(exclusionFormData.entries());
  const id = data._id;

  if (process.env.MOCK_ENABLED === "true") {
    const index = exclusions.findIndex(e => e._id === id);
    console.debug("Mock exclusion before delete", exclusions);

    if (index < 0) { // Not found
      console.warn(`Exclusion with ID ${id} not found`);
      redirect("/exclusions");
    }

    exclusions.splice(index, 1);
    console.debug("Mock exclusions after delete", exclusions);
  } else {
    try {
      const url = `${EXCLUSIONS_URL}/${id}`;
      await fetch(url, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/exclusions");
  redirect("/exclusions");
}
