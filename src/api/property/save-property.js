"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { properties } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { PROPERTIES_URL } from "../urls";

export default async function saveProperty(propertyFormData) {
  const property = formatRequest(propertyFormData);

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
      console.debug(property);
    }
  }

  revalidatePath("/properties");
  redirect("/properties");
}
