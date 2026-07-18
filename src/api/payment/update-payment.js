"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { PAYMENTS_URL } from "../urls";

export default async function updatePayment(paymentFormData) {
  const payment = formatRequest(paymentFormData);

  if (process.env.MOCK_ENABLED === "true") {
    const existingIndex = payments.findIndex((item) => item._id === payment._id);
    if (existingIndex >= 0) {
      payments[existingIndex] = { ...payments[existingIndex], ...payment };
    } else {
      payment._id = String(Math.floor(Math.random() * 100000));
      payments.push(payment);
    }
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
