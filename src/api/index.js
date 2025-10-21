import useSWR from "swr";
import {
  ADD_CATEGORY,
  ADD_CUSTOMER,
  ADD_EXPENSE,
  ADD_EXPENSE_CATEGORY,
  ADD_PRODUCT,
  ADD_PURCHASE,
  ADD_SALE,
  ADD_STAFF,
  ADD_SUPPLIER,
  CHECK_SESSION,
  DELETE_CATEGORY,
  DELETE_CUSTOMER,
  DELETE_EXPENSE,
  DELETE_EXPENSE_CATEGORY,
  DELETE_PRODUCT,
  DELETE_PURCHASE,
  DELETE_SALE,
  DELETE_STAFF,
  DELETE_SUPPLIER,
  EDIT_CATEGORY,
  EDIT_CUSTOMER,
  EDIT_EXPENSE,
  EDIT_EXPENSE_CATEGORY,
  EDIT_PRODUCT,
  EDIT_PURCHASE,
  EDIT_SALE,
  EDIT_STAFF,
  EDIT_SUPPLIER,
  FETCH_ALL_CATEGORIES,
  FETCH_ALL_CUSTOMER,
  FETCH_ALL_EXPENSE,
  FETCH_ALL_EXPENSE_CATEGORIES,
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_SALES,
  FETCH_ALL_STAFF,
  FETCH_ALL_SUPPLIER,
  FETCH_PURCHASES,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PURCHASE,
  FETCH_SINGLE_SALES,
  FETCH_SINGLE_STAFF,
  LOGGED_IN_ADMIN,
  LOGIN_ADMIN,
} from "../constants/routes";
import { fetcher, sesionFetcher } from "./fetcher";
import { mutationRequest } from "./sender";

// Auth
export const loginAmin = async (values) => {
  const result = await mutationRequest(LOGIN_ADMIN, "post", values);
  return result;
};
export const checkSession = () => {
  const { data, error, loading, mutate } = useSWR(CHECK_SESSION, sesionFetcher);
  return { data, error, loading, mutate };
};

export const fetchLoggedInAdmin = () => {
  const { data, error, loading, mutate } = useSWR(LOGGED_IN_ADMIN, fetcher);
  return { data, error, loading, mutate };
};

// Products
export const addNewProduct = async (values) => {
  const result = await mutationRequest(ADD_PRODUCT, "post", values);
  return result;
};
export const updateProduct = async (id, values) => {
  const result = await mutationRequest(`${EDIT_PRODUCT}/${id}`, "put", values);
  return result;
};
export const fetchAllProducts = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_PRODUCTS, fetcher);
  return { data, error, loading, mutate };
};
export const fetchSingleProduct = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_SINGLE_PRODUCT}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteProduct = async (id) => {
  const result = await mutationRequest(`${DELETE_PRODUCT}/${id}`, "delete");
  return result;
};

// Category
export const addNewCategory = async (values) => {
  const result = await mutationRequest(ADD_CATEGORY, "post", values);
  return result;
};
export const updateCategory = async (id, values) => {
  const result = await mutationRequest(
    `${EDIT_CATEGORY}/${id}`,
    "post",
    values
  );
  return result;
};
export const fetchAllCategories = () => {
  const { data, error, loading, mutate } = useSWR(
    FETCH_ALL_CATEGORIES,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteCategory = async (id) => {
  const result = await mutationRequest(`${DELETE_CATEGORY}/${id}`, "delete");
  return result;
};

// ?Purchase
export const addNewPurchase = async (values) => {
  const result = await mutationRequest(ADD_PURCHASE, "post", values);
  return result;
};
export const editPurchase = async (id, values) => {
  const result = await mutationRequest(`${EDIT_PURCHASE}/${id}`, "put", values);
  return result;
};
export const fetchAllPurchases = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_PURCHASES, fetcher);
  return { data, error, loading, mutate };
};
export const fetchSinglePurchase = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_SINGLE_PURCHASE}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deletePurchase = async (id) => {
  const result = await mutationRequest(`${DELETE_PURCHASE}/${id}`, "delete");
  return result;
};

//  Sales
export const addNewSale = async (values) => {
  const result = await mutationRequest(ADD_SALE, "post", values);
  return result;
};
export const updateSale = async (id, values) => {
  const result = await mutationRequest(`${EDIT_SALE}/${id}`, "put", values);
  return result;
};
export const fetchAllSales = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_SALES, fetcher);
  return { data, error, loading, mutate };
};
export const fetchSingleSale = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_SINGLE_SALES}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteSale = async (id) => {
  const result = await mutationRequest(`${DELETE_SALE}/${id}`, "delete");
  return result;
};

//  Expenses
export const addNewExpense = async (values) => {
  const result = await mutationRequest(ADD_EXPENSE, "post", values);
  return result;
};
export const updateExpense = async (id, values) => {
  const result = await mutationRequest(`${EDIT_EXPENSE}/${id}`, "put", values);
  return result;
};
export const fetchAllExpense = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_EXPENSE, fetcher);
  return { data, error, loading, mutate };
};
export const deleteExpense = async (id) => {
  const result = await mutationRequest(`${DELETE_EXPENSE}/${id}`, "delete");
  return result;
};

//  Expenses_categories
export const addNewExpenseCategory = async (values) => {
  const result = await mutationRequest(ADD_EXPENSE_CATEGORY, "post", values);
  return result;
};
export const updateExpenseCategory = async (id, values) => {
  const result = await mutationRequest(
    `${EDIT_EXPENSE_CATEGORY}/${id}`,
    "put",
    values
  );
  return result;
};
export const fetchAllExpenseCategory = () => {
  const { data, error, loading, mutate } = useSWR(
    FETCH_ALL_EXPENSE_CATEGORIES,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteExpenseCategory = async (id) => {
  const result = await mutationRequest(
    `${DELETE_EXPENSE_CATEGORY}/${id}`,
    "delete"
  );
  return result;
};

//  Staff
export const addNewStaff = async (values) => {
  const result = await mutationRequest(ADD_STAFF, "post", values);
  return result;
};
export const updateStaff = async (id, values) => {
  const result = await mutationRequest(`${EDIT_STAFF}/${id}`, "put", values);
  return result;
};
export const fetchAllStaff = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_STAFF, fetcher);
  return { data, error, loading, mutate };
};
export const fetchSingleStaff = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_SINGLE_STAFF}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteStaff = async (id) => {
  const result = await mutationRequest(`${DELETE_STAFF}/${id}`, "delete");
  return result;
};

//  Supplier
export const addNewSupplier = async (values) => {
  const result = await mutationRequest(ADD_SUPPLIER, "post", values);
  return result;
};
export const updateSupplier = async (id, values) => {
  const result = await mutationRequest(`${EDIT_SUPPLIER}/${id}`, "put", values);
  return result;
};
export const fetchAllSupplier = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_SUPPLIER, fetcher);
  return { data, error, loading, mutate };
};
export const deleteSupplier = async (id) => {
  const result = await mutationRequest(`${DELETE_SUPPLIER}/${id}`, "delete");
  return result;
};

//  Customer
export const addNewCustomer = async (values) => {
  const result = await mutationRequest(ADD_CUSTOMER, "post", values);
  return result;
};
export const updateCustomer = async (id, values) => {
  const result = await mutationRequest(`${EDIT_CUSTOMER}/${id}`, "put", values);
  return result;
};
export const fetchAllCustomer = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_CUSTOMER, fetcher);
  return { data, error, loading, mutate };
};
export const deleteCustomer = async (id) => {
  const result = await mutationRequest(`${DELETE_CUSTOMER}/${id}`, "delete");
  return result;
};
