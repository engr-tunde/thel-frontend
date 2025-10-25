import * as yup from "yup";

export const validateLogin = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email provided")
      .required("Email is missing"),
    password: yup.string().required("Password is missing"),
  });
  return validationSchema;
};
export const validateAddCategory = () => {
  const validationSchema = yup.object({
    category: yup.string().required("Category name is missing"),
  });
  return validationSchema;
};

export const validateAddProduct = () => {
  const validationSchema = yup.object({
    product_type: yup.string().required("Select product type"),
    product_name: yup.string().required("Product name is missing"),
    product_code: yup.string().required("Product code is missing"),
    barcode_format: yup.string().required("barcode symbology is not provided"),
    brand: yup.string().required("Brand name is missing"),
    category: yup.string().required("Product category is missing"),
    unit: yup.string().required("How many unit does the product have?"),
    purchase_unit: yup.string().required("Purchse unit is missing"),
    sale_unit: yup.string().required("Sale unit is missing"),
    quantity: yup.number().required("Available quantity is missing"),
    product_cost: yup.number().required("What is the product cost?"),
    profit_margin: yup.number(),
    product_price: yup.number().required("Product price is missing"),
    wholesale_price: yup
      .number()
      .required("Product wholesale price is missing"),
    daily_sale_objective: yup.string(),
    alert_quantity: yup.number().required("Product alert quantity is missing"),
    product_tax: yup.string(),
    tax_method: yup.string(),
    warranty: yup.number(),
    guarantee: yup.number(),
    image: yup.mixed().required("Please upload an image"),
    product_details: yup.string().required("Product details is missing"),
  });

  return validationSchema;
};

export const validateAddPurchase = () => {
  const validationSchema = yup.object({
    purchase_date: yup.string().required(" the date is missing"),
    reference_number: yup.string().required("Reference number is missing"),
    purchase_status: yup.string().required("Purchae status is missing"),
    supplier: yup.string().required("Suppliers name must be provided"),
    // supply_document: yup.mixed().required("Attached the neccessary document"),
    product: yup.string().required("specify the selected product"),
    quantity: yup.string().required("Provide purchase quantity"),
    currency: yup.string().required("select currency"),
    exchange_rate: yup.number().required("select exchange rate"),
    amount_currrency: yup
      .number()
      .required("How much in purchase currency rate"),
    order_tax: yup.number(),
    discount: yup.number(),
    shipping_cost: yup.number(),
    paid: yup.number(),
    payment_status: yup.string().required("Payment status is missing"),
    note: yup.string(),
  });

  return validationSchema;
};
export const validateAddExpense = () => {
  const validationSchema = yup.object({
    expense_date: yup.string().required(" the date is missing"),
    expense_category: yup.string().required("Reference number is missing"),
    warehouse: yup.string().required("Purchae status is missing"),
    amount: yup
      .number()
      .required("How much in purchase currency rate"),
    bank_account: yup.string().required("Payment status is missing"),
    note: yup.string(),
  });

  return validationSchema;
};
export const validateAddExpenseCategory = () => {
  const validationSchema = yup.object({
    category: yup.string().required(" the date is missing"),
    category_slug: yup.string().required(" the date is missing"),
  });

  return validationSchema;
};

export const validateAddStaff = () => {
  const validationSchema = yup.object({
    name: yup.string().required(" the date is missing"),
    email: yup.string().required("Purchae status is missing"),
    username: yup.string().required(" the date is missing"),
    role: yup.string().required("Payment status is missing"),
    department: yup.string().required("Payment status is missing"),
    phone_number: yup
    .number()
    .required("How much in purchase currency rate"),
    address: yup.string().required("Reference number is missing"),
    city: yup.string().required("Reference number is missing"),
    country: yup.string().required("Reference number is missing"),
    password: yup.string().required("Reference number is missing"),
  });

  return validationSchema;
};

export const validateAddSupplier = () => {
  const validationSchema = yup.object({
    name: yup.string().required(" the date is missing"),
    company_name: yup.string().required("Reference number is missing"),
    tax_number: yup.number().required("Purchae status is missing"),
    balance_owed: yup.number().required("Suppliers name must be provided"),
    email: yup.string().required("specify the selected product"),
    phone: yup.string().required("Provide purchase quantity"),
    whatsapp_number: yup.string().required("select currency"),
    address: yup.string().required("select exchange rate"),
    city: yup.string().required("Payment status is missing"),
    state: yup.string().required("Payment status is missing"),
    country: yup.string(),
  });
  return validationSchema;
}

export const validateAddCustomer = () => {
  const validationSchema = yup.object({
    name: yup.string().required(" the date is missing"),
    email: yup.string().required("specify the selected product"),
    phone: yup.string().required("Provide purchase quantity"),
    whatsapp_number: yup.string().required("select currency"),
    vat_number: yup.number().required("Purchae status is missing"),
    opening_balance: yup.number().required("Purchae status is missing"),
    initial_deposit: yup.number().required("Purchae status is missing"),
    address: yup.string().required("select exchange rate"),
    city: yup.string().required("Payment status is missing"),
    state: yup.string().required("Payment status is missing"),
    country: yup.string(),
  });
  return validationSchema;
}

export const validateStockCount = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("Warehouse name is missing"),
    category: yup.string().required("Category is missing"),
    brand: yup.string().required("Brand is not provided"),
  });

  return validationSchema;
};
export const validateAdjustment = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("Warehouse name is missing"),
    selectProduct: yup.string().required("Product is not provided"),
    productDetails: yup.string().required("Product details is not provided"),
  });

  return validationSchema;
};

export const validateAccounting = () => {
  const validationSchema = yup.object({
    accountName: yup.string().required("account name is missing"),
    name: yup.string().required("Name is not provided"),
    initialValue: yup.string().required("Initial Value is not provided"),
    note: yup.string().required("Note is not provided"),
  });

  return validationSchema;
};

export const validateTransfer = () => {
  const validationSchema = yup.object({
    fromAccount: yup.string().required("account name is missing"),
    toAccount: yup.string().required("Name is not provided"),
    amount: yup.string().required("Initial Value is not provided"),
  });

  return validationSchema;
};

export const validateStatement = () => {
  const validationSchema = yup.object({
    account: yup.string().required("account name is missing"),
    type: yup.string().required("Name is not provided"),
    chooseDate: yup.string().required("Initial Value is not provided"),
  });

  return validationSchema;
};

export const ValidateAddAdjustment = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("warehouse name is missing"),
    attachDocument: yup.string().required("attach the needed file"),
    selectProduct: yup.string().required("select product"),
  });

  return validationSchema;
};

export const validateAddSale = () => {
  const validationSchema = yup.object({
    sale_date: yup.string().required(" the date is missing"),
    customer: yup.string().required("Customer type is missing"),
    warehouse: yup.string().required("Warehouse name must be provided"),
    discount: yup.number(),
    order_tax: yup.number(),
    shipping_cost: yup.number(),
    delivery_status: yup.string().required("Payment status is missing"),
    sale_status: yup.string().required("Payment status is missing"),
    payment_status: yup.string().required("Payment status is missing"),
    sale_note: yup.string(),
    staff_note: yup.string(),
  });

  return validationSchema;
};

export const validateAccount = () => {
  const validationSchema = yup.object({
    bank_name: yup.string().required(" the date is missing"),
    account_name: yup.string().required(" the date is missing"),
    account_number: yup.string().required(" the date is missing"),
    initial_balance: yup.number().required(" the date is missing"),
    available_balance: yup.number().required(" the date is missing"),
  });

  return validationSchema;
};

export const validateAddWarehouse = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required(" the date is missing"),
    warehouse_slug: yup.string().required(" the date is missing"),
  });

  return validationSchema;
};