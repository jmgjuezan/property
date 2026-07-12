"use server";

import { revalidatePath } from "next/cache";
import { exclusions } from "@/lib/constants";

export default async function deleteExclusion(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const index = exclusions.findIndex((item) => item._id === id);
    if (index >= 0) {
      exclusions.splice(index, 1);
    }
  } else {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/v1/exclusions/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/exclusions");
}
