import useSWR from "swr";
import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  ADD_PURCHASE,
  ADD_SALE,
  ADD_STAFF,
  CHECK_SESSION,
  DELETE_CATEGORY,
  DELETE_PRODUCT,
  DELETE_PURCHASE,
  DELETE_SALE,
  EDIT_CATEGORY,
  EDIT_PRODUCT,
  EDIT_PURCHASE,
  EDIT_SALE,
  FETCH_ALL_CATEGORIES,
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_SALES,
  FETCH_PURCHASES,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PURCHASE,
  FETCH_SINGLE_SALES,
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

//  Sales
export const addNewStaff = async (values) => {
  const result = await mutationRequest(ADD_STAFF, "post", values);
  return result;
};
// export const updateSale = async (id, values) => {
//   const result = await mutationRequest(`${EDIT_SALE}/${id}`, "put", values);
//   return result;
// };
// export const fetchAllSales = () => {
//   const { data, error, loading, mutate } = useSWR(FETCH_ALL_SALES, fetcher);
//   return { data, error, loading, mutate };
// };
// export const fetchSingleSale = (id) => {
//   const { data, error, loading, mutate } = useSWR(
//     `${FETCH_SINGLE_SALES}/${id}`,
//     fetcher
//   );
//   return { data, error, loading, mutate };
// };
// export const deleteSale = async (id) => {
//   const result = await mutationRequest(`${DELETE_SALE}/${id}`, "delete");
//   return result;
// };