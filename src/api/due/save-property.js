"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { properties } from "@/lib/constants";
import { PROPERTIES_URL } from "../urls";

export default async function saveProperty(propertyFormData) {
  const property = Object.fromEntries(propertyFormData.entries());

  if (process.env.MOCK_ENABLED === "true") {
    console.debug(property);
    property._id = String(Math.floor(Math.random() * 100000));
    properties.push(property);
    console.debug(properties);
  } else {
    try {
      await fetch(PROPERTIES_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
      });
    } catch (err) {
      console.error(err);
    }
  }

  revalidatePath("/properties");
  redirect("/properties");
}
