"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { dues } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { DUES_URL } from "../urls";

export default async function updateDue(dueFormData) {
  const due = formatRequest(dueFormData);

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    console.debug("Updating (mock) due:", due);
    const index = dues.findIndex(d => d._id === id);

    if (index < 0) { // Not found
      redirect("/dues");
    }

    dues[index] = {
      ...dues[index],
      ...due,
    };
    
    console.debug(dues);
  } else {
    try {
      await fetch(`${DUES_URL}/${due._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(due),
      });
    } catch (err) {
      console.error(err);
      console.debug(due);
    }
  }

  revalidatePath("/dues");
  redirect("/dues");
}
