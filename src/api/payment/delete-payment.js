"use server";

import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";
import { PAYMENTS_URL } from "../urls";

export default async function deletePayment(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const index = payments.findIndex((item) => item._id === id);
    if (index >= 0) {
      payments.splice(index, 1);
    }
  } else {
    try {
      await fetch(`${PAYMENTS_URL}/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/payments");
}
