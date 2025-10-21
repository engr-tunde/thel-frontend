import { useState } from "react";
import { FaPlus, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import CategoryForm from "../form-modals/CategoryForm";
import {
  deleteCategory,
  deleteCustomer,
  deleteExpense,
  deleteExpenseCategory,
  deleteProduct,
  deletePurchase,
  deleteSale,
  deleteStaff,
  deleteSupplier,
} from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import ProductForm from "../form-modals/ProductForm";
import PurchaseForm from "../form-modals/PurchaseForm";
import SaleForm from "../form-modals/SaleForm";
import ExpenseForm from "../form-modals/ExpenseForm";
import StaffForm from "../form-modals/StaffForm";
import SupplierForm from "../form-modals/SupplierForm";
import CustomerForm from "../form-modals/CustomerForm";
import ExpenseCatForm from "../form-modals/ExpenseCatForm";

const FormModal = ({ table, type, id, data, title }) => {
  const [open, setopen] = useState(false);
  const bgColor =
    type == "create"
      ? "bg-green-500"
      : type == "cancel"
      ? "bg-red-500"
      : type == "update"
      ? "bg-green-500"
      : "bg-[#d8d5ff]";

  const forms = {
    product: (type, data) => (
      <ProductForm type={type} data={data} setopen={setopen} />
    ),
    category: (type, data) => (
      <CategoryForm type={type} data={data} setopen={setopen} />
    ),
    purchase: (type, data) => (
      <PurchaseForm type={type} data={data} setopen={setopen} />
    ),
    sale: (type, data) => (
      <SaleForm type={type} data={data} setopen={setopen} />
    ),
    expense: (type, data) => (
      <ExpenseForm type={type} data={data} setopen={setopen} />
    ),
    expenseCategory: (type, data) => (
      <ExpenseCatForm type={type} data={data} setopen={setopen} />
    ),
    staff: (type, data) => (
      <StaffForm type={type} data={data} setopen={setopen} />
    ),
    supplier: (type, data) => (
      <SupplierForm type={type} data={data} setopen={setopen} />
    ),
    customer: (type, data) => (
      <CustomerForm type={type} data={data} setopen={setopen} />
    ),
  };

  const handleDelete = async () => {
    const response =
      table === "product"
        ? await deleteProduct(id)
        : table === "category"
        ? await deleteCategory(id)
        : table === "purchase"
        ? await deletePurchase(id)
        : table === "sale"
        ? await deleteExpense(id)
        : table === "expense"
        ? await deleteExpense(id)
        : table === "expense_category"
        ? await deleteExpenseCategory(id)
        : table === "staff"
        ? await deleteStaff(id)
        : table === "supplier"
        ? await deleteSupplier(id)
        : table === "customer"
        ? await deleteCustomer(id)
        : null;
    console.log("response", response);
    if (response?.status?.toString()?.includes("20")) {
      successMessage(response?.data?.message);
      setopen(false);
      window.location.reload();
    } else {
      errorMessage(response?.data?.error);
    }
  };

  const Form = () => {
    return type == "delete" && id ? (
      <div className="p-10 flex flex-col items-center gap-4">
        <div className="text-center font-medium">
          All data will be deleted upon the compltion of this action. Are you
          sure you want to continue
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-6 font-semibold rounded-md w-max cursor-pointer hover:scale-110 ease-in duration-200"
        >
          Delete
        </button>
      </div>
    ) : type == "create" || type == "update" ? (
      forms[table](type, data)
    ) : null;
  };
  return (
    <>
      {/* <button
        onClick={() => setopen(true)}
        className={`${bgColor} h-7 w-7 flex items-center justify-center rounded-full cursor-pointer`}
      > */}
      <button
        onClick={() => {
          setopen(true);
        }}
        className={`flex items-center rounded-sm text-[15px] cursor-pointer ${
          type == "create" ? "gap-2 bg-[#17a2b8] text-white py-2 px-3" : "gap-1"
        }`}
      >
        <span>
          {type == "create" ? (
            <FaPlus />
          ) : type == "update" ? (
            <AiFillEdit />
          ) : type == "delete" ? (
            <RiDeleteBin6Line />
          ) : null}
        </span>
        <span>{title}</span>
      </button>

      {/* <img src={`/images/${type}.png`} className="h-[16px]" alt="" />
      </button> */}

      {open && (
        <div className="w-screen h-screen bg-black/65 fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="bg-white w-[75%] p-5 relative ">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <FaTimesCircle size={30} />
            </div>
            <div className="max-h-[80vh] overflow-y-scroll">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
