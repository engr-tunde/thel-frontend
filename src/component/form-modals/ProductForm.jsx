import { addNewProduct, fetchAllProducts, updateProduct } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import ProductFormInner from "./ProductFormInner";

const ProductForm = ({ type, data, setopen }) => {
  const { mutate } = fetchAllProducts();
  const handleSubmit = async (values) => {
    console.log("values", values);
    const formData = new FormData();
    formData.append("product_type", values.product_type);
    formData.append("product_name", values.product_name);
    formData.append("product_code", values.product_code);
    formData.append("barcode_format", values.barcode_format);
    formData.append("brand", values.brand);
    formData.append("category", values.category);
    formData.append("unit", values.unit);
    formData.append("purchase_unit", values.purchase_unit);
    formData.append("sale_unit", values.sale_unit);
    formData.append("quantity", values.quantity);
    formData.append("product_cost", values.product_cost);
    formData.append("profit_margin", values.profit_margin);
    formData.append("product_price", values.product_price);
    formData.append("wholesale_price", values.wholesale_price);
    formData.append("daily_sale_objective", values.daily_sale_objective);
    formData.append("alert_quantity", values.alert_quantity);
    formData.append("product_tax", values.product_tax);
    formData.append("tax_method", values.tax_method);
    formData.append("warranty", values.warranty);
    formData.append("guarantee", values.guarantee);
    formData.append("image", values.image);
    formData.append("product_details", values.product_details);
    console.log("formdata", ...formData);
    const res =
      type === "create"
        ? await addNewProduct(formData)
        : type === "update"
        ? await updateProduct(data?._id, formData)
        : null;
    if (res.status === 200) {
      successMessage(res?.data?.message);
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      errorMessage(res?.data?.error);
    }
  };

  return (
    <>
      {type == "update" ? (
        data && (
          <ProductFormInner
            handleSubmit={handleSubmit}
            type={type}
            data={data}
          />
        )
      ) : (
        <ProductFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};

export default ProductForm;
