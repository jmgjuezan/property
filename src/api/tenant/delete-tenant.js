"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { tenants } from "@/lib/constants"
import { TENANTS_URL } from "../urls"

export default async function deleteTenant(tenantFormData) {
  const data = Object.fromEntries(tenantFormData.entries());
  const id = data._id;

  if (process.env.MOCK_ENABLED === "true") {
    const index = tenants.findIndex(t => t._id === id);
    console.debug('Mock tenants before delete', tenants);

    if (index < 0) { // Not found
      console.warn(`Tenant with ID ${id} not found`);
      redirect('/tenants');
    }

	  tenants.splice(index, 1);
	  console.debug('Mock tenants after delete', tenants);
  } else {
	  try {
	    const url = `${TENANTS_URL}/${id}`;
	    await fetch(url, { method: 'DELETE' });
	  } catch (err) {
	    console.error(err);
	  }
  }

  revalidatePath('/tenants');
  redirect('/tenants');
}

