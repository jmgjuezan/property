import { properties } from "@/lib/constants";
import { PROPERTIES_URL } from "../urls";

export default async function fetchProperty(id) {
  if (process.env.MOCK_ENABLED === "true") {
    const property = properties.find(
      property => property._id === id
    );
    console.debug(property);
    return property;
  }

  try {
    const url = `${PROPERTIES_URL}/${id}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody.data;
  } catch (err) {
    console.error(err);
    redirect("/properties");
  }
}
