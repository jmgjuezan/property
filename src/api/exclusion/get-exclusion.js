import { exclusions } from "@/lib/constants";
import { EXCLUSIONS_URL } from "../urls";

export default async function fetchExclusion(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const exclusion = exclusions.find(
      exclusion => exclusion._id === id
    );
    console.debug(exclusion);
    return exclusion;
  }

  try {
    const url = `${EXCLUSIONS_URL}/${id}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    redirect("/properties");
  }
}
