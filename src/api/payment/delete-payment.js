"use server";

import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";
import { PAYMENTS_URL } from "../urls";

export default async function deletePayment(paymentFormData) {
  const data = Object.fromEntries(paymentFormData.entries());
  const id = data._id;

  if (process.env.MOCK_ENABLED === "true") {
    const index = payments.findIndex(p => p._id === id);
    console.debug("Mock payment before delete", payments);

    if (index < 0) { // Not found
      console.warn(`Payment with ID ${id} not found`);
      redirect("/payments");
    }

    payments.splice(index, 1);
    console.debug("Mock payments after delete", payments);
  } else {
    try {
      const url = `${PAYMENTS_URL}/${id}`;
      await fetch(url, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/payments");
  redirect("/payments");
}
