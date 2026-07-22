"use server";

import { dues } from "@/lib/constants";
import { DUES_URL } from "../urls";

export default async function fetchDue(id) {
  if (process.env.NEXT_PUBLIC_MOCK_ENABLED === "true") {
    const due = dues.find(
      due => due._id === id
    );
    console.debug(due);
    return due;
  }

  try {
    const url = `${DUES_URL}/${id}`;
    const response = await fetch(url, { cache: "no-store" });
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    redirect("/dues");
  }
}
