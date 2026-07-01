"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { payments } from "@/lib/constants";

export default async function updatePayment(paymentFormData) {
  const payment = Object.fromEntries(paymentFormData.entries());

  payment.amount = Number(payment.amount || 0);

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
      await fetch(`${process.env.BACKEND_URL}/api/v1/payments/${payment._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/payments");
  redirect("/payments");
}
