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
  return value.toLocaleString("en-US");
}

export function formatName(person) {
  let middleName = " ";
  
  if (person.middleName && person.middleName.trim() !== "") {
    middleName = ` ${person.middleName} `;
  }

  return `${person.firstName}${middleName}${person.lastName}`;
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
