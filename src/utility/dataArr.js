export const sidebarData = [
  {
    title: "Dashboard",
    // icon: "FaHouseUser",
    icon: "FaTachometerAlt",
    link: "/dashboard",
  },

  {
    title: "Products",
    icon: "FaBoxes",
    // icon: "FaHouseUser",
    link: "/products",
    children: [
      {
        title: "Products",
        link: "/products",
      },
      {
        title: "Category",
        link: "/products/category",
      },
      {
        title: "Print Barcode",
        link: "/products/print-barcode",
      },
      {
        title: "Stock Count",
        link: "/products/stock-count",
      },
    ],
  },
  {
    title: "Purchase",
    link: "/purchases",
    icon: "FaShoppingCart",
    children: [
      {
        title: "Purchase List",
        link: "/purchases",
      },
    ],
  },
  {
    title: "Sale",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/sale",
    children: [
      {
        title: "Sale List",
        link: "/sales/sale-list",
      },
      {
        title: "Pos",
        link: "/sales/pos",
      },
      {
        title: "Add Sale",
        link: "/sales/add-sale",
      },
    ],
  },
  {
    title: "Expense",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/expense",
    children: [
      {
        title: "Expense List",
        link: "/expense/expense-list",
      },
      {
        title: "Expense category",
        link: "/expense/expense-category",
      },
    ],
  },
  {
    title: "Staff",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/staff",
    children: [
      {
        title: "Staff List",
        link: "/staff/staff-list",
      },
    ],
  },
  {
    title: "Supplier",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/supplier",
    children: [
      {
        title: "Supplier List",
        link: "/supplier/supplier-list",
      },
    ],
  },
  {
    title: "Customer",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/customer",
    children: [
      {
        title: "Customer List",
        link: "/customer/customer-list",
      },
    ],
  },
  {
    title: "Accounting",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/accounting",
    children: [
      {
        title: "Account List",
        link: "/account/account-list",
      },
    ],
  },
  {
    title: "Settings",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/setting",
    children: [
      {
        title: "Warehouse",
        link: "/setting/warehouse",
      },
    ],
  },
];

export const barcodeFormatArr = [
  "Code128",
  "Code39",
  "UPCA",
  "UPCE",
  "EAN-8",
  "EAN-13",
];
export const productTypeArr = ["Standard", "Combo", "Digital", "Service"];
export const productUnitArr = [
  "Piece",
  "Dozen",
  "Carton",
  "Pallet",
  "Tray",
  "Can",
  "Pack",
];
export const productTaxArr = [2, 2.5, 5, 5.5, 7, 7.5, 10];
// for nav bar plus menu
export const plusMenu = [
  {
    title: "Add Product",
    link: "/add-product",
  },
  {
    title: "Add Category",
    link: "/add-category",
  },
  {
    title: "Add User",
    link: "/add-user",
  },
];

// for nav bar admin menu
export const adminMenuDropdown = [
  {
    title: "Profile",
    link: "/profile",
    icon: "FaUserCircle",
  },
  {
    title: "Settings",
    link: "/settings",
    icon: "FaCog",
  },
  {
    title: "My Transactions",
    link: "/my-transactions",
    icon: "FaExchangeAlt",
  },
];

export const productSearch = [
  { heading: "Name" },
  { heading: "Code" },
  { heading: "Quantity" },
];

//for print-barcodeb page
export const formDetails = [
  {
    id: "0",
    Name: "Product Name",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "1",
    Name: "Price",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "2",
    Name: "Promotional Price",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "3",
    Name: "Business Name",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "4",
    Name: "Brand",
    size: "Size",
    checked: false,
  },
];

//print-barcode page
export const papperSize = [
  {
    itemList:
      "20 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 4 x 1, Label... ",
  },
  {
    itemList:
      "30 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 2.625 x 1, Label per sheet: 30 ",
  },
  {
    itemList:
      "42 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 2 x 1, Label per sheet: 32 ",
  },
  {
    itemList:
      "40 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 1.5 x 1, Label per sheet: 40 ",
  },
  {
    itemList:
      "continious rolls - 31.75mm x 24.5mm label size:31.75mm x 24.5mm  gap:3.18mm ",
  },
];

//for product list page

export const productListInputData = [
  {
    legendTag: "Warehouse",
    placeholder: "All Warehouse",
  },
  {
    legendTag: "Product Type",
    placeholder: "All Types",
  },
  {
    legendTag: "Brand",
    placeholder: "All Brands",
  },
  {
    legendTag: "Category",
    placeholder: "All Categories",
  },
  {
    legendTag: "Unit",
    placeholder: "All Unit",
  },
  {
    legendTag: "Tax",
    placeholder: "All Tax",
  },
  {
    legendTag: "Product with",
    placeholder: "Select IMEI/Variant",
  },
  {
    legendTag: "",
    placeholder: "Submit",
  },
];

// for adjustment list page
export const adjustListTableCol = [
  {
    accessor: "input",
    title: "checkbox",
    className: "font-semibold",
    maxWidth: "150px",
  },
  {
    accessor: "Date",
    title: "Date",
    className: "font-semibold",
  },
  {
    accessor: "Reference",
    title: "Reference",
    className: "font-semibold",
  },
  {
    accessor: "Warehouse",
    title: "Warehouse",
    className: "font-semibold",
  },
  {
    accessor: "Products",
    title: "Products",
    className: "font-semibold",
  },
  {
    accessor: "Note",
    title: "Note",
    className: "font-semibold",
  },
  {
    accessor: "Action",
    title: "Action",
    className: "font-semibold",
  },
];

export const adjustListRowData = [
  {
    date: "04-06-2025 05:15:51",
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    product: {
      title: "2bc",
      dimension: "10 x 10",
    },
    note: "",
  },
  {
    date: "04-06-2025 05:15:51",
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    product: {
      title: "2bc",
      dimension: "10 x 10",
    },
    note: "",
  },
];

//for add adjustment page
export const tableTitle = [
  {
    title: "Name",
  },
  {
    title: "Code",
  },
  {
    title: "Unit",
  },
  {
    title: "Cost",
  },
  {
    title: "Quantity",
  },
  {
    title: "action",
  },
];

export const availableSearch = [
  {
    title: "Shop1",
  },
  {
    title: "Shop2",
  },
];

export const availableSearchFilter = [
  {
    title: "All Warehouse",
  },
  {
    title: "Shop1",
  },
  {
    title: "Shop2",
  },
];
export const purchaseStatus = [
  {
    title: "All",
  },
  {
    title: "Received",
  },
  {
    title: "Patial",
  },
  {
    title: "Pending",
  },
  {
    title: "Order",
  },
];
export const paymentStatus = [
  {
    title: "All",
  },
  {
    title: "Due",
  },
  {
    title: "Paid",
  },
];

// Category Data

//Stock count page
export const stockCountTableCol = [
  {
    accessor: "input",
    title: "checkbox",
    className: "font-semibold",
    maxWidth: "150px",
  },
  {
    accessor: "Date",
    title: "Date",
    className: "font-semibold",
    icon: "GoArrowDown",
  },
  {
    accessor: "Reference",
    title: "Reference",
    className: "font-semibold",
  },
  {
    accessor: "warehouse",
    title: "warehouse",
    className: "font-semibold",
  },
  {
    accessor: "Category",
    title: "Category",
    className: "font-semibold",
  },
  {
    accessor: "Brand",
    title: "Brand",
    className: "font-semibold",
  },
  {
    accessor: "Type",
    title: "Type",
    className: "font-semibold",
  },
  {
    accessor: "Initial File",
    title: "Initial File",
    className: "font-semibold",
  },
  {
    accessor: "Final File",
    title: "Final File",
    className: "font-semibold",
  },
  {
    accessor: "Action",
    title: "Action",
    className: "font-semibold",
  },
];

export const stockCountRowData = [
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
];
