console.debug(`MOCK_ENABLED: ${process.env.MOCK_ENABLED}`);

const mockStore = globalThis.__PROPERTY_MOCK_STORE__ ??= process.env.MOCK_ENABLED === "true"
  ? {
      properties: [
        {
          _id: "1",
          name: "Amaia T2 912 Test",
          address: "5th Ave, Corner P. Tuazon Blvd, Cubao, Quezon City, 1109 Test",
          standBy: true,
          currentTenant: 0,
          maxTenant: 4,
          acquiredDate: "2021-01-23"
        },
        {
          _id: "2",
          name: "Amaia T2 377 Test",
          standBy: false,
          currentTenant: 3,
          maxTenant: 4,
          acquiredDate: "2021-02-23"
        },
        {
          _id: "3",
          name: "The Tower 303 Test",
          address: "J.P. Rizal Street corner P. Tuazon Boulevard, Project 4, Barangay Milagrosa, Quezon City, Metro Manila, 1109 Test",
        },
      ],
      tenants: [
        {
          _id: "1",
          firstName: "John",
          middleName: "Generic",
          lastName: "Doe",
          property: "The Tower 303 Test",
          moveInDate: "2023-01-30",
          paymentDate: "2023-01-30",
          rentAmount: 3000,
        },
        {
          _id: "2",
          firstName: "Jane",
          lastName: "Doe",
          property: "The Tower 303 Test",
          moveInDate: "2023-01-23",
          paymentDate: "2023-01-30",
          rentAmount: 3000,
        },
        {
          _id: "3",
          firstName: "John",
          lastName: "Smith",
          property: "The Tower 303 Test",
          moveInDate: "2023-01-23",
          rentAmount: 3000,
        },
        {
          _id: "4",
          firstName: "Richard",
          lastName: "Roe",
        },
      ],
      dues: [
        {
          _id: "1",
          dueDate: "2026-04-30",
          totalAmount: 1500,
          property: "The Tower 303 Test",
          electricity: 1000,
          electricityFromDate: "2026-04-01",
          electricityToDate: "2026-04-30",
          water: 500,
          waterFromDate: "2026-04-01",
          waterToDate: "2026-04-30",
          dueFor: "Water and Electricity",
          breakdown: [
            {
              amount: 500,
              name: "John Doe",
              water: 166.67,
              electricity: 333.33,
            },
            {
              amount: 500,
              name: "Jane Doe",
              water: 166.67,
              electricity: 333.33,
            },
            {
              amount: 500,
              name: "John Smith",
              water: 166.67,
              electricity: 333.33,
            },
          ]
        },
        {
          _id: "2",
          dueDate: "2026-04-30",
          totalAmount: 3000,
          property: "The Tower 303 Test",
          name: "John Doe",
          dueFor: "Rent",
          coverageFromDate: "2026-04-30",
          coverageToDate: "2026-05-30",
        },
        {
          _id: "3",
          dueDate: "2026-04-30",
          totalAmount: 3000,
          property: "The Tower 303 Test",
          name: "Jane Doe",
          dueFor: "Rent",
          coverageFromDate: "2026-04-23",
          coverageToDate: "2026-05-23",
        },
        {
          _id: "4",
          dueDate: "2026-04-23",
          totalAmount: 3000,
          property: "The Tower 303 Test",
          name: "John Smith",
          dueFor: "Rent",
          coverageFromDate: "2026-04-23",
          coverageToDate: "2026-05-23",
        }
      ],
      payments: [
        {
          _id: "1",
          paymentDate: "2026-04-30",
          amount: 500,
          property: "The Tower 303 Test",
          paymentFor: "Water and Electricity",
          tenant: "John Doe",
        },
        {
          _id: "2",
          paymentDate: "2026-04-30",
          amount: 3000,
          property: "The Tower 303 Test",
          paymentFor: "Rent",
          tenant: "John Doe",
        },
        {
          _id: "3",
          paymentDate: "2026-03-30",
          amount: 3000,
          property: "The Tower 303 Test",
          paymentFor: "Rent",
          tenant: "John Doe",
        },
        {
          _id: "4",
          paymentDate: "2026-02-28",
          amount: 3000,
          property: "The Tower 303 Test",
          paymentFor: "Rent",
          tenant: "John Doe",
        },
        {
          _id: "5",
          paymentDate: "2026-01-30",
          amount: 3000,
          property: "The Tower 303 Test",
          paymentFor: "Rent",
          tenant: "John Doe",
        },
        {
          _id: "6",
          paymentDate: "2025-12-30",
          amount: 3000,
          property: "The Tower 303 Test",
          paymentFor: "Rent",
          tenant: "John Doe",
        },
      ],
      exclusions: [
        {
          _id: "1",
          name: "John Doe",
          property: "The Tower 303 Test",
          exclusionDate: "2026-05-28",
        },
        {
          _id: "2",
          name: "Jane Doe",
          property: "Amaia T2 377 Test",
          exclusionDateFrom: "2026-05-15",
          exclusionDateTo: "2026-05-20",
        },
      ],
    }
  : null;

export const properties = mockStore?.properties ?? null;
export const tenants = mockStore?.tenants ?? null;
export const dues = mockStore?.dues ?? null;
export const payments = mockStore?.payments ?? null;
export const exclusions = mockStore?.exclusions ?? null;
