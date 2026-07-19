import { payments } from "@/lib/constants";
import { PAYMENTS_URL } from "../urls";

export default async function fetchPayment(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const payment = payments.find(
      payment => payment._id === id
    );
    console.debug(payment);
    return payment;
  }

  try {
    const url = `${PAYMENTS_URL}/${id}`;
    const response = await fetch(url, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    redirect("/payments");
  }
}
