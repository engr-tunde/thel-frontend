import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaBarcode, FaTrash } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import AddSaleTable from "./AddSaleTable";

function AddSaleForm() {
  const [warehouse, setWarehouse] = useState("Shop 1");
  const [customer, setCustomer] = useState("Walk in (320000034567)");
  const [currency, setCurrency] = useState("USD");
  const [date, setDate] = useState(Date.now());
  const [orderDiscountType, setOrderDiscountType] = useState("Flat");
  const [shippingCost, setShippingCost] = useState(0);
  const [saleStatus, setSaleStatus] = useState("Pending");
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [saleNote, setSaleNote] = useState("");
  const [staffNote, setStaffNote] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file);
  };

  const initialValues = {
    date: "",
    referenceNo: "",
    customer: "",
    warehouse: "",
    biller: "",
    currency: "",
    exchangeRate: "",
    selectProduct: "",
    orderTax: "",
    orderDiscountType: "",
    orderDiscountValue: "",
    shippingCost: "",
    attachDocument: "",
    saleStatus: "",
    paymentStatus: "",
    saleNote: "",
    staffNote: "",
  };

  const validationSchema = Yup.object({
    customer: Yup.string().required("Customer is required"),
    warehouse: Yup.string().required("Warehouse is required"),
    biller: Yup.string().required("Biller is required"),
    currency: Yup.string().required("Currency is required"),
    exchangeRate: Yup.string().required("Exchange Rate is required"),
    saleStatus: Yup.string().required("Sale status is required"),
    paymentStatus: Yup.string().required("Payment status Rate is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted:", values);
    resetForm();
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Sale</h1>
      <p className="text-sm text-gray-500 mb-6">
        The field labels marked with * are required input fields.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="date">
              Date
            </label>
            <Field
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="referenceNo">
              Reference No
            </label>
            <Field
              name="referenceNo"
              type="number"
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="customer">
              Customer
            </label>
            <Field
              name="customer"
              as="select"
              value={customer}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
              onChange={(e) => setCustomer(e.target.value)}
            >
              <option value="Walk in (320000034567)">
                Walk in (320000034567)
              </option>
              <option value="Jon Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Alice Johnson">Alice Johnson</option>
              <option value="Bob Brown">Bob Brown</option>
              <option value="Charlie Davis">Charlie Davis</option>
            </Field>
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="warehouse">
              Warehouse
            </label>
            <Field
              name="warehouse"
              as="select"
              value={warehouse}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="Shop 1">Shop 1</option>
              <option value="Shop 2">Shop 2</option>
              <option value="Shop 3">Shop 3</option>
              <option value="Shop 4">Shop 4</option>
              <option value="Shop 5">Shop 5</option>
            </Field>
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="biller">
              Biller
            </label>
            <Field
              name="biller"
              type="text"
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-xs font-semibold" htmlFor="currency">
              Currency
            </label>
            <Field
              name="currency"
              as="select"
              value={currency}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="EURO">EURO</option>
            </Field>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-xs font-semibold" htmlFor="exchangeRate">
              Exchange Rate
            </label>
            <Field
              name="exchangeRate"
              type="text"
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-6 mb-6 flex flex-col gap-1 items-start rounded-md overflow-hidden">
            <label className="text-xs font-semibold" htmlFor="selectProduct">
              Select Product
            </label>
            <div className="w-full flex items-center overflow-hidden gap-2">
              <Field
                name="selectProduct"
                type="text"
                placeholder="Scan/Search product by name/Code/IMEI"
                className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none rounded h-full"
              />
              <div className="bg-purple-600 p-3 text-white rounded">
                <FaBarcode />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <AddSaleTable />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="orderTax">
              Order Tax
            </label>
            <Field
              name="orderTax"
              type="number"
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2">
            <label
              className="text-xs font-semibold"
              htmlFor="orderDiscountType"
            >
              Order Discount Type
            </label>
            <Field
              name="orderDiscountType"
              as="select"
              value={orderDiscountType}
              onChange={(e) => setOrderDiscountType(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            >
              <option value="Flat">Flat</option>
              <option value="Percentage">Percentage</option>
            </Field>
          </div>
          <div className="col-span-2">
            <label
              className="text-xs font-semibold"
              htmlFor="orderDiscountValue"
            >
              Order Discount Value
            </label>
            <Field
              name="orderDiscountValue"
              type="number"
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="shippingCost">
              Shipping Cost
            </label>
            <Field
              name="shippingCost"
              type="number"
              onChange={(e) => setShippingCost(e.target.value)}
              value={shippingCost}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
          </div>
          <div className="col-span-2">
            <label
              className="text-xs font-semibold flex items-center gap-2"
              htmlFor="attachDocument"
            >
              <FiPaperclip className="text-lg" />
              <span>Attach Document</span>
            </label>
            <Field
              name="attachDocument"
              type="file"
              onChange={handleFileChange}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            />
            {fileName && (
              <p className="text-sm text-gray-600">
                Selected: <span className="font-medium">{fileName.name}</span>
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="saleStatus">
              Sale Status
            </label>
            <Field
              name="saleStatus"
              as="select"
              value={saleStatus}
              onChange={(e) => setSaleStatus(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </Field>
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="paymentStatus">
              Payment Status
            </label>
            <Field
              name="paymentStatus"
              as="select"
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4"
            >
              <option value="Pending">Pending</option>
              <option value="Due">Due</option>
              <option value="Partial">Partial</option>
              <option value="Paid">Paid</option>
            </Field>
          </div>
          <div className="col-start-1 col-span-3">
            <label className="text-xs font-semibold" htmlFor="saleNote">
              Sale Note
            </label>
            <Field
              name="saleNote"
              as="textarea"
              value={saleNote}
              onChange={(e) => setSaleNote(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4 h-[200px]"
            />
          </div>
          <div className="col-span-3">
            <label className="text-xs font-semibold" htmlFor="staffNote">
              Staff Note
            </label>
            <Field
              name="staffNote"
              as="textarea"
              value={staffNote}
              onChange={(e) => setStaffNote(e.target.value)}
              className="text-sm w-full border border-[1px] px-3 border-gray-200 bg-gray-100/90 focus:border-purple-600 outline-none text-proPurple rounded-md p-2 mb-4 h-[200px]"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddSaleForm;
