"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { properties } from "@/lib/constants";
import { formatRequest } from "@/lib/utility";
import { PROPERTIES_URL } from "../urls";

export default async function updateProperty(propertyFormData) {
  const property = formatRequest(propertyFormData);
  const id = property._id;

  if (process.env.MOCK_ENABLED === "true") {
    console.debug("Updating (mock) property:", property);
    const index = properties.findIndex(p => p._id === id);

    if (index < 0) { // Not found
      redirect("/properties");
    }

    properties[index] = {
      ...properties[index],
      ...property,
    };
    
    console.debug(properties);
  } else {
    try {
      const url = `${PROPERTIES_URL}/${id}`;
      await fetch(url, {
        method: "PATCH",
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
