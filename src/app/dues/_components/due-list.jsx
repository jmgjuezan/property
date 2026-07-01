import { DueListLeftItem, DueListRightItem } from ".";

export default function DueList({ dues }) {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {!dues || dues.length === 0 ? (
        <div className="text-center">No due found.</div>
      ) : (
        dues.map((due) => (
          <li key={due._id} className="flex justify-between pt-3">
            <DueListLeftItem
              due={due}
            />
            <DueListRightItem id={due._id} />
          </li>
        ))
      )}
    </ul>
  );
}
