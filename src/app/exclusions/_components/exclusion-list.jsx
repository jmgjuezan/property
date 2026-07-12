import { formatDate } from '@/lib/utility';
import ExclusionListMobile from "./exclusion-list-mobile";
import ExclusionListDesktop from "./exclusion-list-desktop";

export default function ExclusionList({ exclusions }) {
  const hasData = exclusions && exclusions.length > 0;
  const exclusionData = hasData && exclusions.map((exclusion) => ({
    ...exclusion,
    exclusionDate: formatDate(exclusion.exclusionDate),
    exclusionDateFrom: formatDate(exclusion.exclusionDateFrom),
    exclusionDateTo: formatDate(exclusion.exclusionDateTo),
  }));

  return (<>
    { hasData ? (<>
        <ExclusionListMobile exclusions={exclusionData} />
        <ExclusionListDesktop exclusions={exclusionData} />
    </>) : (
      <div className="text-center mb-10">No exclusion found</div>
    )}
  </>);
}
