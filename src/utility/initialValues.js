export const loginAdminValues = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return initialValues;
};

export const addCategoryValues = (data) => {
  const initialValues = {
    category: data ? data.category : "",
    parent_category: data ? data.parent_category : "",
  };
  return initialValues;
};

export const addProductValues = (data) => {
  const initialValues = {
    product_type: data ? data.product_type : "",
    product_name: data ? data.product_name : "",
    product_code: data ? data.product_code : "",
    barcode_format: data ? data.barcode_format : "",
    brand: data ? data.brand : "",
    category: data ? data.category : "",
    unit: data ? data.unit : "",
    purchase_unit: data ? data.purchase_unit : "",
    sale_unit: data ? data.sale_unit : "",
    quantity: data ? data.quantity : "",
    product_cost: data ? data.product_cost : "",
    profit_margin: data ? data.profit_margin : "",
    product_price: data ? data.product_price : "",
    wholesale_price: data ? data.wholesale_price : "",
    daily_sale_objective: data ? data.daily_sale_objective : "",
    alert_quantity: data ? data.alert_quantity : "",
    product_tax: data ? data.product_tax : "",
    tax_method: data ? data.tax_method : "",
    warranty: data ? data.warranty : "",
    guarantee: data ? data.guarantee : "",
    image: data ? data.image : "",
    product_details: data ? data.product_details : "",
  };
  return initialValues;
};

export const addPurchaseValues = (data) => {
  const initialValues = {
    purchase_date: data ? data.purchase_date : "",
    reference_number: data ? data.reference_number : "",
    purchase_status: data ? data.purchase_status : "",
    supplier: data ? data.supplier : "",
    // supply_document: data ? data.supply_document : "",
    product: data ? data.product : "",
    quantity: data ? data.quantity : "",
    currency: data ? data.currency : "",
    exchange_rate: data ? data.exchange_rate : "",
    amount_currrency: data ? data.amount_currrency : "",
    order_tax: data ? data.order_tax : 0,
    discount: data ? data.discount : 0,
    shipping_cost: data ? data.shipping_cost : 0,
    paid: data ? data.paid : 0,
    payment_status: data ? data.payment_status : "",
    note: data ? data.note : "",
  };
  return initialValues;
};

export const addStockCountValues = (data) => {
  const initialValues = {
    warehouse: data ? data.warehouse : "",
    category: data ? data.category : "",
    brand: data ? data.brand : "",
  };
  return initialValues;
};

export const adjustmentValues = (data) => {
  const initialValues = {
    warehouse: data ? data.warehouse : "",
    selectProduct: data ? data.selectProduct : "",
    productDetail: data ? data.productDetails : "",
  };
  return initialValues;
};

export const accountingValues = (data) => {
  const initialValues = {
    accountNumber: data ? data.accountNumber : "",
    name: data ? data.name : "",
    initialBalance: data ? data.initialBalance : "",
    note: data ? data.note : "",
  };
  return initialValues;
};

export const transferValues = (data) => {
  const initialValues = {
    fromAccount: data ? data.fromAccount : "",
    toAccount: data ? data.toAccount : "",
    amount: data ? data.amount : "",
  };
  return initialValues;
};

export const statementValues = (data) => {
  const initialValues = {
    account: data ? data.account : "",
    type: data ? data.type : "",
    chooseDate: data ? data.chooseDate : "",
  };
  return initialValues;
};

export const addAdjustment = (data) => {
  const initialValues = {
    warehouse: data ? data.account : "",
    attachDocument: data ? data.type : "",
    selectProduct: data ? data.chooseDate : "",
  };
  return initialValues;
};

export const addSaleValues = (data) => {
  const initialValues = {
    sale_date: data ? data.sale_date : "",
    customer: data ? data.customer : "",
    warehouse: data ? data.warehouse : "",
    discount: data ? data.discount : "",
    order_tax: data ? data.order_tax : "",
    shipping_cost: data ? data.shipping_cost : "",
    // total_before_discount: data ? data.total_before_discount : "",
    // grand_total: data ? data.grand_total : "",
    delivery_status: data ? data.delivery_status : "",
    sale_status: data ? data.sale_status : 0,
    payment_status: data ? data.payment_status : 0,
    sale_note: data ? data.sale_note : "",
    staff_note: data ? data.staff_note : "",
  };
  return initialValues;
};