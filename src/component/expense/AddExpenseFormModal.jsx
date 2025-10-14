import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const AddExpenseFormModal = ({ show, onClose, type }) => {
  if (!show) return null;

  const endpoint =
    type === "category"
      ? `${import.meta.env.VITE_API_BASE_URL}/expenseCategories`
      : `${import.meta.env.VITE_API_BASE_URL}/adjustments`;

  const initialValues = {
    Code: "",
    Name: "",
  };

  const validationSchema = Yup.object({
    Code: Yup.string().required("Code is required"),
    Name: Yup.string().required("Name is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(endpoint, values);
      alert(`${type === "category" ? "Category" : "Adjustment"} added!`);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {type === "category" ? "Add Expense Category" : "Add Adjustment"}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Code</label>
              <Field
                name="Code"
                placeholder="enter code here"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage
                name="Code"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <Field
                name="Name"
                placeholder="epxpense name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage
                name="Name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#7c5cc4] text-white rounded"
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddExpenseFormModal;
