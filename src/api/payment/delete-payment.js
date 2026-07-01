"use server";

import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";

export default async function deletePayment(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const index = payments.findIndex((item) => item._id === id);
    if (index >= 0) {
      payments.splice(index, 1);
    }
  } else {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/v1/payments/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/payments");
}
