import CustomFormik from "../form/CustomFormik";
import AppInputField from "../form/AppInputField";
import AppSubmitButton from "../form/AppSubmitButton";
import { Field } from "formik";
import { addProductValues } from "../../utility/initialValues";
import { validateAddProduct } from "../../utility/validations";
import { fetchAllCategories } from "../../api";
import AppSelectField from "../form/AppSelectField";
import { useEffect, useState } from "react";
import {
  barcodeFormatArr,
  productTaxArr,
  productTypeArr,
  productUnitArr,
} from "../../utility/dataArr";
import AppTextAreaField from "../form/AppTextAreaField";

const ProductFormInner = ({ type, handleSubmit, data }) => {
  const { data: catsData } = fetchAllCategories();

  const [cats, setcats] = useState();
  useEffect(() => {
    if (catsData) {
      let dataArr = catsData?.data;
      let newArr = [];
      if (dataArr?.length) {
        for (let ele of dataArr) {
          newArr.push(ele?.category);
        }
        setcats(newArr);
      }
    }
  }, [catsData]);
  const initialValues = addProductValues(data);
  const validationSchema = validateAddProduct();
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="">
          {type == "create"
            ? "Add a new product"
            : `Edit product (${data?.productName})`}
        </div>

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <label className="text-gray-600 text-sm">Product Type *</label>
            <AppSelectField
              name="product_type"
              array={productTypeArr}
              title="Select format"
            />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Name *
            </label>
            <AppInputField name="product_name" />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Code *
            </label>
            <AppInputField name="product_code" />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Barcode Symbology *</label>
            <AppSelectField
              name="barcode_format"
              array={barcodeFormatArr}
              title="Select format"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Brand *</label>
            <AppInputField name="brand" />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Category *</label>
            {cats && (
              <AppSelectField
                name="category"
                array={cats}
                title="Select category"
              />
            )}
          </div>

          <div>
            <label className="text-gray-400 text-sm">Product Unit *</label>
            <AppSelectField
              name="unit"
              array={productUnitArr}
              title="Select unit"
            />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Purchase Unit *
            </label>
            <AppSelectField
              name="purchase_unit"
              array={productUnitArr}
              title="Select unit"
            />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Sale Unit *
            </label>
            {productUnitArr && (
              <AppSelectField
                name="sale_unit"
                array={productUnitArr}
                title="Select unit"
              />
            )}
          </div>
          <div>
            <label className="text-gray-400 text-sm">Available QTY *</label>
            <AppInputField type="number" name="quantity" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Cost *
            </label>
            <AppInputField name="product_cost" type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Profit Margin *
            </label>
            <AppInputField name="profit_margin" type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Price *
            </label>
            <AppInputField name="product_price" type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Wholesale Price *
            </label>
            <AppInputField name="wholesale_price" type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Daily Sale Objective
            </label>
            <AppInputField name="daily_sale_objective" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Alert Quantity *
            </label>
            <AppInputField name="alert_quantity" />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Product Tax</label>
            <AppSelectField
              name="product_tax"
              array={productTaxArr}
              title="Select..."
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Tax Method</label>
            <AppSelectField
              name="tax_method"
              array={["Exclusive", "Inclusive"]}
              title="Select..."
            />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Warranty (in months)
            </label>
            <AppInputField name="warranty" type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Guarantee (in months)
            </label>
            <AppInputField name="guarantee" type="number" />
          </div>

          <div>
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="initialStock" />
              Initial Stock
            </label>

            <p className="text-gray-500 text-sm italic mt-1">
              This feature will not work for product with variants and batches
            </p>
          </div>

          {/* product image Upload */}
          {!data ? (
            <div className="col-span-3">
              <label className="text-gray-600 text-sm">Product Image</label>
              <label
                htmlFor="image"
                className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer hover:border-purple-500 transition"
              >
                <span className="text-gray-400">
                  Drop files here or click to upload
                </span>
                <Field name="image">
                  {({ form, meta }) => (
                    <>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          form.setFieldValue("image", e.currentTarget.files[0])
                        }
                      />
                      {meta.touched && meta.error && (
                        <span className="error">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </label>
            </div>
          ) : null}

          {/* product details */}
          <div className="col-span-3">
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Details *
            </label>
            <AppTextAreaField
              name="product_details"
              placeholder="Enter product details"
            />
          </div>
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Add New Product" : "Update Product"}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ProductFormInner;
