import dayjs from "dayjs";

export function formatRequest(formData) {
  const data = Object.fromEntries(formData.entries());
  for (let key in data) {
    if (data[key] === "" || data[key] === null || data[key] === undefined) {
      delete data[key];
    }
  }
  return data;
}

export function formatDate(value) {
  if (!value) return "-";
  return dayjs(value).format("MMMM DD, YYYY");
}

export function formatAmount(value) {
  const rounded = Math.round(value * 100) / 100;
  return rounded.toLocaleString("en-US");
}

export function formatName(person) {
  return `${person.firstName} ${person.lastName}`;
}

export function sort(unsorted, sortKey, sortDirection) {
  const sorted = [...unsorted].sort((a, b) => {
    const isNumeric = sortKey === "amount" || sortKey === "totalAmount";
    const isDate = sortKey === "paymentDate" || sortKey === "dueDate";

    if (isNumeric) {
      const aValue = parseInt(a[sortKey]);
      const bValue = parseInt(b[sortKey]);
      return sortDirection === "desc" ? aValue - bValue : bValue - aValue
    }

    if (sortKey === "exclusionDate") {
      const aDate = new Date(a[sortKey] === "-" ? a[`${sortKey}From`] : a[sortKey]);
      const bDate = new Date(b[sortKey] === "-" ? b[`${sortKey}From`] : b[sortKey]);
      return sortDirection === "asc" ? aDate - bDate : bDate - aDate
    }

    if (isDate) {
      const aDate = new Date(a[sortKey]);
      const bDate = new Date(b[sortKey]);
      return sortDirection === "asc" ? aDate - bDate : bDate - aDate
    }

    const valueA = String(a[sortKey] ?? "").toLowerCase()
    const valueB = String(b[sortKey] ?? "").toLowerCase()

    if (valueA < valueB) {
      return sortDirection === "asc" ? -1 : 1
    }

    if (valueA > valueB) {
       return sortDirection === "asc" ? 1 : -1
    }

    return 0
  });

  return sorted;
}
