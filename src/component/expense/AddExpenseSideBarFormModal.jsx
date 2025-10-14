import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddExpenseSideBarFormModal = ({ show, onClose }) => {
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  const initialValues = {
    date: "",
    warehouse: "",
    account: "",
    category: "",
    amount: "",
    note: "",
  };

  const validationSchema = Yup.object({
    category: Yup.string().required("Income Category is required"),
    amount: Yup.number().required("Amount is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted:", values);
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-xl font-bold mb-2">Add Income</h2>
        <p className="text-sm text-gray-500 mb-4">
          The field labels marked with * are required input fields.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Date</label>
              <Field
                name="date"
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Warehouse</label>
              <Field
                name="warehouse"
                as="select"
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                 <option value="">Select Warehouse...</option>
                <option value="Main">Main</option>
                <option value="Branch">Branch</option>
              </Field>
            </div>
            <div>
              <label className="block text-sm font-medium">Account</label>
              <Field
                name="account"
                as="select"
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Account...</option>
                <option value="Sales Accounts [11111]">
                  Sales Accounts [11111]
                </option>
              </Field>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Income Category *
              </label>
              <Field
                name="category"
                as="select"
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Income Category...</option>
                <option value="Sales">Sales</option>
                <option value="Service">Service</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Amount *</label>
              <Field
                name="amount"
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium">Note</label>
              <Field
                name="note"
                as="textarea"
                rows="3"
                placeholder="Enter note..."
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="col-span-2 flex justify-between mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddExpenseSideBarFormModal;
