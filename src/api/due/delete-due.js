"use server";

import { revalidatePath } from "next/cache";
import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function deleteDue(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const index = dues.findIndex((item) => item._id === id);
    if (index >= 0) {
      dues.splice(index, 1);
    }
  } else {
    try {
      await fetch(`${DUES_URL}/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/dues");
}
