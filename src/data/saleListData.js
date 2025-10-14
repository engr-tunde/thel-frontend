const generateCustomerCode = () => {
  return Math.random().toString(16).substring(2, 10);
};

export const saleListTableColumn = [
  {
    title: "Action",
    className: "",
  },
  {
    title: "Date",
    className: "",
  },
  {
    title: "Customer",
    className: "",
  },
  {
    title: "Warehouse",
    className: "",
  },
  {
    title: "Discount",
    className: "",
  },
  {
    title: "Order Tax",
    className: "",
  },
  {
    title: "Shipping Cost",
    className: "",
  },
  {
    title: "Total Before Discount",
    className: "",
  },
  {
    title: "Grand Total",
    className: "",
  },
  {
    title: "Delivery Status",
    className: "",
  },
  {
    title: "sale Status",
    className: "",
  },
  {
    title: "Payment Status",
    className: "",
  },
];

export const saleListDataArr = [
  {
    id: 1,
    date: "2024-01-15T10:30:00Z",
    referenceNo: "SL_1111",
    customer: `Jon Doe ${generateCustomerCode()}`,
    warehouse: "Main Warehouse",
    biller: "Admin", // Not in table, but kept in data
    grandTotal: 1500,
    paid: 1500,
    due: 0,
    amountReturned: 0,
    paymentStatus: "Paid",
    saleStatus: "Completed",
    paymentMethod: "N/A",
    deliveryStatus: "Delivered",
  },
  {
    id: 2,
    date: "2024-01-18T14:45:00Z",
    referenceNo: "SL_1112",
    customer: `Jane Smith ${generateCustomerCode()}`,
    warehouse: "Branch A",
    biller: "Manager",
    grandTotal: 3200,
    paid: 2000,
    due: 1200,
    amountReturned: 200,
    paymentStatus: "Partial",
    saleStatus: "Completed",
    paymentMethod: "N/A",
    deliveryStatus: "Delivered",
  },
  {
    id: 3,
    date: "2024-01-20T09:10:00Z",
    referenceNo: "SL_1113",
    customer: `Acme Ltd. ${generateCustomerCode()}`,
    warehouse: "Main Warehouse",
    biller: "Admin",
    grandTotal: 5000,
    paid: 0,
    due: 5000,
    amountReturned: 0,
    paymentStatus: "Pending",
    saleStatus: "On Hold",
    paymentMethod: "N/A",
    deliveryStatus: "N/A",
  },
  {
    id: 4,
    date: "2024-01-22T11:30:00Z",
    referenceNo: "SL_1114",
    customer: `Global Traders ${generateCustomerCode()}`,
    warehouse: "Branch B",
    biller: "Staff",
    grandTotal: 2750,
    paid: 2750,
    due: 0,
    amountReturned: 100,
    paymentStatus: "Paid",
    saleStatus: "Completed",
    paymentMethod: "N/A",
    deliveryStatus: "N/A",
  },
  {
    id: 5,
    date: "2024-01-25T16:00:00Z",
    referenceNo: "SL_1115",
    customer: `Michael Johnson ${generateCustomerCode()}`,
    warehouse: "Main Warehouse",
    biller: "Admin",
    grandTotal: 1200,
    paid: 800,
    due: 400,
    amountReturned: 0,
    paymentStatus: "Partial",
    saleStatus: "Pending",
    paymentMethod: "N/A",
    deliveryStatus: "Delivered",
  },
];
