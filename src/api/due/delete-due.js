"use server";

import { revalidatePath } from "next/cache";
import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function deleteDue(dueFormData) {
  const data = Object.fromEntries(dueFormData.entries());
  const id = data._id;

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    const index = dues.findIndex(d => d._id === id);
    console.debug("Mock payment before delete", dues);

    if (index < 0) { // Not found
      console.warn(`Due with ID ${id} not found`);
      redirect("/dues");
    }

    dues.splice(index, 1);
    console.debug("Mock dues after delete", dues);
  } else {
    try {
      const url = `${DUES_URL}/${id}`;
      await fetch(url, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }
  
  revalidatePath("/dues");
  redirect("/dues");
}
