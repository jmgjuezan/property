"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { properties } from "@/lib/constants"
import { PROPERTIES_URL } from "../urls"

export default async function deleteProperty(propertyFormData) {
  const data = Object.fromEntries(propertyFormData.entries());
  const id = data._id;

  if (process.env.MOCK_ENABLED === "true") {
    const index = properties.findIndex(p => p._id === id);
    console.debug('Mock properties before delete', properties);

    if (index < 0) { // Not found
      console.warn(`Property with ID ${id} not found`);
      redirect('/properties');
    }

	  properties.splice(index, 1);
	  console.debug('Mock properties after delete', properties);
  } else {
	  try {
	    const url = `${PROPERTIES_URL}/${id}`;
	    await fetch(url, { method: 'DELETE' });
	  } catch (err) {
	    console.error(err);
	  }
  }

  revalidatePath('/properties');
  redirect('/properties');
}

