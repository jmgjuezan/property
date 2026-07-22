"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { PAYMENTS_URL } from "../urls";

export default async function updatePayment(paymentFormData) {
  const payment = formatRequest(paymentFormData);

  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    console.debug("Updating (mock) payment:", payment);
    const index = payments.findIndex(p => p._id === id);

    if (index < 0) { // Not found
      redirect("/payments");
    }

    payments[index] = {
      ...payments[index],
      ...payment,
    };
    
    console.debug(payments);
  } else {
    try {
      await fetch(`${PAYMENTS_URL}/${payment._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      });
    } catch (err) {
      console.error(err);
      console.debug(payment);
    }
  }

  revalidatePath("/payments");
  redirect("/payments");
}
