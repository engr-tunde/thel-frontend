import CustomFormik from "../form/CustomFormik";
import AppInputField from "../form/AppInputField";
import AppSubmitButton from "../form/AppSubmitButton";
import AppSelectField from "../form/AppSelectField";
import { fetchAllCategories } from "../../api";
import { useEffect, useState } from "react";
import AppFileField from "../form/AppFileField";
import { addCategoryValues } from "../../utility/initialValues";
import { validateAddCategory } from "../../utility/validations";
import { Field } from "formik";

const CategoryFormInner = ({
  type,
  handleSubmit,
  data,
  imageError,
  imageText,
  handleImageChange,
}) => {
  const initialValues = addCategoryValues(data);
  const validationSchema = validateAddCategory();
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
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-5 p-5">
        <div className="">
          {type == "create"
            ? "Add a new catageory"
            : `Edit catageory (${data?.category})`}
        </div>

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Category Name *
            </label>
            <AppInputField name="category" />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Category Image *
            </label>
            <AppFileField
              name="image"
              label="Category image"
              handleChange={handleImageChange}
              nameText={imageText}
              error={imageError}
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Parent Category </label>
            {/* <Field
              as="select"
              name="parent_category"
              className="border rounded-md p-2 w-full"
            >
              <option value="">Select parent category</option>
              {catsData?.data?.map((ele, i) => (
                <option key={i} value={ele?.category}>
                  {ele?.category}
                </option>
              ))}
            </Field> */}
            {cats && (
              <AppSelectField
                name="parent_category"
                array={cats}
                title="Select parent category"
              />
            )}
          </div>
        </div>
        <div className="mt-5 w-full flex">
          <AppSubmitButton
            full={true}
            title={type == "create" ? "Add New Category" : "Update Category"}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default CategoryFormInner;
