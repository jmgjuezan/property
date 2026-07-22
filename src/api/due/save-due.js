"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { dues } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { DUES_URL } from "../urls";

export default async function saveDue(dueData) {
  const due = dueData instanceof FormData ? formatRequest(dueData) : dueData;

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
      due._id = String(Math.floor(Math.random() * 100000));
      dues.push(due);
    } else {
      try {
        await fetch(DUES_URL, {
          method: "POST",
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
