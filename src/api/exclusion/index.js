import fetchExclusions from "./get-exclusions";
import fetchExclusion from "./get-exclusion";
import saveExclusion from "./save-exclusion";
import updateExclusion from "./update-exclusion";
import deleteExclusion from "./delete-exclusion";

export {
  fetchExclusions,
  fetchExclusion,
  saveExclusion,
  updateExclusion,
  deleteExclusion,
};

const exclusionApi = {
  fetchExclusions,
  fetchExclusion,
  saveExclusion,
  updateExclusion,
  deleteExclusion,
};

export default exclusionApi;
