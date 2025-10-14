const API_URL = import.meta.env.VITE_APP_API_ENDPOINT_BASE;
const CREATE_PRODUCT = `${API_URL}/products`;
const UPDATE_PRODUCT = `${API_URL}/products`;
const DELETE_PRODUCT = `${API_URL}/products`;

// Category
const CREATE_CATEGORY = `${API_URL}/categories`;
const UPDATE_CATEGORY = `${API_URL}/categories`;
const DELETE_CATEGORY = `${API_URL}/categories`;

// StockCount
const CREATE_STOCKCOUNT = `${API_URL}/stockcount`;
const UPDATE_STOCKCOUNT = `${API_URL}/stockcount`;
const DELETE_STOCKCOUNT = `${API_URL}/stockcount`;

// Adjustment list
const CREATE_ADJUSTMENT = `${API_URL}/adjustment`;
const UPDATE_ADJUSTMENT = `${API_URL}/adjustment`;
const DELETE_ADJUSTMENT = `${API_URL}/adjustment`;

// Accounting
const CREATE_ACCOUNTING = `${API_URL}/accounting`;
const UPDATE_ACCOUNTING = `${API_URL}/accounting`;
const DELETE_ACCOUNTING = `${API_URL}/accounting`;

// Money Transfer
const CREATE_TRANSFER = `${API_URL}/transfer`;
const UPDATE_TRANSFER = `${API_URL}/transfer`;
const DELETE_TRANSFER = `${API_URL}/transfer`;

// Money Transfer
const CREATE_STATEMENT= `${API_URL}/statement`;
const UPDATE_STATEMENT= `${API_URL}/statement`;
const DELETE_STATEMENT= `${API_URL}/statement`;

export {
  API_URL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CREATE_STOCKCOUNT,
  UPDATE_STOCKCOUNT,
  DELETE_STOCKCOUNT,
  CREATE_ADJUSTMENT,
  UPDATE_ADJUSTMENT,
  DELETE_ADJUSTMENT,
  CREATE_ACCOUNTING,
  UPDATE_ACCOUNTING,
  DELETE_ACCOUNTING,
  CREATE_TRANSFER,
  DELETE_TRANSFER,
  UPDATE_TRANSFER,
  CREATE_STATEMENT,
  UPDATE_STATEMENT,
  DELETE_STATEMENT
};
