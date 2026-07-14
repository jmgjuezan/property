"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function saveDue(dueFormData) {
  const due = Object.fromEntries(dueFormData.entries());

  due.totalAmount = Number(due.totalAmount);
  due.electricity = Number(due.electricity || 0);
  due.water = Number(due.water || 0);

  if (process.env.MOCK_ENABLED === "true") {
    due._id = String(Math.floor(Math.random() * 100000));
    dues.push(due);
  } else {
    try {
      await fetch(`${DUES_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(due),
      });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/dues");
  redirect("/dues");
}
