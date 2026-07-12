export const PAGE_GROUPS = {
  properties: {
    path: "/properties",
    label: "Property",
  },
  tenants: {
    path: "/tenants",
    label: "Tenant",
  },
  dues: {
    path: "/dues",
    label: "Due",
  },
  payments: {
    path: "/payments",
    label: "Payment",
  },
  exclusions: {
    path: "/exclusions",
    label: "Exclusion",
  },
}

export function getPageGroupVisibility() {
  return {
    properties: process.env.NEXT_PUBLIC_ENABLE_PROPERTIES_PAGE === "true",
    tenants: process.env.NEXT_PUBLIC_ENABLE_TENANTS_PAGE === "true",
    dues: process.env.NEXT_PUBLIC_ENABLE_DUES_PAGE === "true",
    payments: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS_PAGE === "true",
    exclusions: process.env.NEXT_PUBLIC_ENABLE_EXCLUSIONS_PAGE === "true",
  };
}
