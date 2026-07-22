export const getDueDate = (tenant, month, year) => {
  const due = tenant.paymentDate ?? tenant.moveInDate;
  const dueDate = new Date(due);
  dueDate.setMonth(month);
  dueDate.setFullYear(year);console.log(dueDate)
  return dueDate;
}

export const addAMonth = (dateString) => {
  const date = new Date(dateString);
  const expectedMonth = (date.getMonth() + 1) % 12;
  date.setMonth(date.getMonth() + 1);
  
  if (date.getMonth() !== expectedMonth) {
    date.setDate(0); 
  }

  return date;
}

export const endOfMonth = (dueMonth) => {
  const now = new Date();
  now.setMonth(dueMonth + 1);
  now.setDate(0);
  return now;
}

export const countDays = (from, to) => {
  const fromDate = from instanceof Date && !Number.isNaN(value.valueOf()) ? from : new Date(from);
  const toDate = to instanceof Date && !Number.isNaN(value.valueOf()) ? to : new Date(to);
  const msDifference = Math.abs(toDate - fromDate); 
  const days = Math.floor(msDifference / (1000 * 60 * 60 * 24));
  const STARTING_DAY = 1; // Logic treats the start day as 0
  return days + STARTING_DAY;
}

export const validSelection = (selection) => {
  const {
    dueFor, property, dueMonth, dueYear,
    water, waterFromDate, waterToDate,
    electricity, electricityFromDate, electricityToDate,
  } = selection;
  let isValid= true;

  if (!dueFor) isValid = false;
  if (!property) isValid = false;
  if (!dueMonth) isValid = false;
  if (!dueYear) isValid = false;

  if (dueFor === "Water and Electricity") {
    if (!water) isValid = false;
    if (!waterFromDate) isValid = false;
    if (!waterToDate) isValid = false;
    if (!electricity) isValid = false;
    if (!electricityFromDate) isValid = false;
    if (!electricityToDate) isValid = false;
  }

  return isValid;
}

export const countExcludedDays = (exclusions, from, to) => {
  const fromDate = from instanceof Date && !Number.isNaN(value.valueOf()) ? from : new Date(from);
  const toDate = to instanceof Date && !Number.isNaN(value.valueOf()) ? to : new Date(to);
  let count = 0;
  exclusions.map(exclusion => {
    if (exclusion.exclusionDateFrom) {
      const s1 = new Date(exclusion.exclusionDateFrom);
      const e1 = new Date(exclusion.exclusionDateTo);
      const s2 = fromDate;
      const e2 = toDate;

      const latestStart = new Date(Math.max(s1, s2));
      const earliestEnd = new Date(Math.min(e1, e2));

      const diffTime = earliestEnd - latestStart;

      if (diffTime < 0) return 0;

      const msPerDay = 1000 * 60 * 60 * 24;
      count += (Math.floor(diffTime / msPerDay) + 1);
    } else {
      const startDate = fromDate;
      const endDate = toDate;
      const dateToCheck = new Date(exclusion.exclusionDate);
      const isIncluded = dateToCheck >= startDate && dateToCheck <= endDate;
      if (isIncluded) count++;
    }
  });

  return count;
}
