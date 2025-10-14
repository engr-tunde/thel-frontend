// src/data/dashboardData.js

export const transactionData = {
  Sale: {
    columns: ["Date", "Reference", "Customer", "Status", "Grand Total"],
    rows: [
      {
        date: "28-06-2025",
        reference: "salepos-001",
        customer: "Walk in Customer",
        status: "Completed",
        grandtotal: "2,219.98",
      },
      {
        date: "28-06-2025",
        reference: "salepos-001",
        customer: "Walk in Customer",
        status: "Completed",
        grandtotal: "2,219.98",
      },
    ],
  },
  Purchase: {
    columns: ["Date", "Reference", "Supplier", "Status", " Grand Total"],
    rows: [
      {
        date: "28-06-2025",
        reference: "purchase-001",
        supplier: "Vendor A",
        grandtotal: "1,219",
        status: "Pending",
      },
    ],
  },
  Quotation: {
    columns: ["Date", "Reference", "Customer", "Status", "GrandTotal"],
    rows: [
      {
        date: "28-06-2025",
        reference: "quote-001",
        customer: "Client B",
        status: "Pending",
        grandtotal: "2,219.98",
      },
      {
        date: "28-06-2025",
        reference: "quote-001",
        customer: "Client B",
        status: "Pending",
        grandtotal: "2,219.98",
      },
    ],
  },
  Payment: {
    columns: ["Date", "Reference", "Amount", "Paid By"],
    rows: [
      {
        date: "28-06-2025",
        reference: "spr-20250826-0436430",
        amount: "2,219.98",
        paidby: "Cash",
      },
      {
        date: "28-06-2025",
        reference: "spr-20250826-030841",
        amount: "1,219",
        paidby: "Cash",
      },
      {
        date: "28-06-2025",
        reference: "spr-20250826-430124",
        amount: "2",
        paidby: "Cash",
      },
      {
        date: "28-06-2025",
        reference: "spr-20250826-2278",
        amount: "499",
        paidby: "Cash",
      },
      {
        date: "28-06-2025",
        reference: "spr-20250826-4278",
        amount: "499",
        paidby: "Cash",
      },
    ],
  },
};

export const bestSellers = [
  {
    name: "Acer Chromebook 315, 15.6 HD – Intel Celeron N4000",
    code: "[30798200]",
    qty: 6,
  },
  {
    name: "Banana (pack of 12)",
    code: "[2783341]",
    qty: 6,
  },
  {
    name: "Apple iPhone 11 (4GB+64GB) Black",
    code: "[49251814]",
    qty: 5,
  },
  {
    name: "Apple Smart Watch",
    code: "[1210761]",
    qty: 5,
  },
  {
    name: "AABB",
    code: "[23017998]",
    qty: 4,
  },
];
