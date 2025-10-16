import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import AppSelectField from "../form/AppSelectField";
import AppTextAreaField from "../form/AppTextAreaField";
import { addSaleValues } from "../../utility/initialValues";
import { validateAddSale } from "../../utility/validations";
import { fetchAllProducts } from "../../api";
import { useEffect, useState } from "react";
import {
  customers,
  deliveryStatus,
  orderTax,
  paymentStatus,
  saleStatus,
  selectedSalesColumn,
  warehouse,
} from "../../data/sale";
import Table from "../global/Table";
import SelectedRowTemplate from "../sale/SelectedRowTemplate";

const SaleFormInner = ({
  type,
  handleSubmit,
  data,
}) => {
  const initialValues = addSaleValues(data);
  const validationSchema = validateAddSale();

  const [search, setsearch] = useState();
  const [showProducts, setshowProducts] = useState(false);
  const [selectedProduct, setselectedProduct] = useState([]);
  const [productArr, setproductArr] = useState();
  const [productClick, setproductClick] = useState(false);
  const { data: productData, error: productError } = fetchAllProducts();

  const handleSearch = (val) => {
    setsearch(val);
    setshowProducts(true);
  };

  useEffect(() => {
    let newArr = productData?.data?.filter(
      (item) =>
        item?.product_name?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.product_code?.toLowerCase().includes(search?.toLowerCase())
    );
    setproductArr(newArr);
    if (!search) {
      setshowProducts(false);
    }
  }, [search]);

  const handleAddProductToSelected = (prod) => {
    let currProducts = selectedProduct;
    console.log("currProducts", currProducts);

    currProducts.push({
      product_name: prod?.product_name,
      product_code: prod?.product_code,
      barcode_format: prod?.barcode_format,
      product_price: prod?.product_price,
      qunatity: 5,
    });
    setselectedProduct(currProducts);
    setproductClick(!productClick)
  };

  console.log("selectedProduct", selectedProduct);

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Sale</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Date
              </label>
              <AppInputField
                name="sale_date"
                type="date"
                defaultValue={data?.sale_date}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Customer *
              </label>
              <AppSelectField
                name="customer"
                array={customers}
                title="Walk-in Customer"
                defaultValue={data?.customer}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Warehouse
              </label>
              <AppSelectField
                name="warehouse"
                array={warehouse}
                title="Walk-in warehouse"
                defaultValue={data?.warehouse}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Discount
              </label>
              <AppInputField name="discount" type="number" />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Order Tax *
              </label>
              <AppSelectField
                name="order_tax"
                array={orderTax}
                title="No tax"
                defaultValue={data?.order_tax}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Shipping Cost
              </label>
              <AppInputField name="shipping_cost" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Total before discount
              </label>
              <AppInputField name="total_before_discount" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                grand_total
              </label>
              <AppInputField name="grand_total" type="number" />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Delivery status *
              </label>
              <AppSelectField
                name="delivery_status"
                array={deliveryStatus}
                defaultValue={data?.delivery_status}
                title="Select status"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Sale status *
              </label>
              <AppSelectField
                name="sale_status"
                array={saleStatus}
                defaultValue={data?.sale_status}
                title="Select status"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Payment Status *
              </label>
              <AppSelectField
                name="payment_status"
                array={paymentStatus}
                defaultValue={data?.payment_status}
                title="Select status"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Sale Note
              </label>
              <AppTextAreaField
                name="sale_note"
                placeholder="Enter some notes"
                rows="6"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Staff Note
              </label>
              <AppTextAreaField
                name="staff_note"
                placeholder="Enter some notes"
                rows="6"
              />
            </div>
          </div>

          <input
            type="text"
            onChange={(e) =>  {
              handleSearch(e.target.value) 
              productClick ? e.target.value = "" : null
            } }
            className="border mx-2 p-2 rounded"
            placeholder="search product"
            
          />
          {showProducts
            ? productArr?.map((ele, i) => (
                <div
                  key={i}
                  className="py-2"
                  onClick={() => handleAddProductToSelected(ele)}
                >
                  {ele.product_name} - {ele.product_code}
                </div>
              ))
            : null}

          <Table
            tableColumn={selectedSalesColumn}
            rowData={selectedProduct}
            rowTemplate={SelectedRowTemplate}
            className="mx-2"
          />

          <AppSubmitButton
            title={type == "create" ? "Add Sale" : "Update Sale"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default SaleFormInner;
