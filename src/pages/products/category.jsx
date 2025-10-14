import Table from "../../component/global/Table";
import { categoryDataArr, categoryTableColumn } from "../../data/categoryData";
import CategoryRowTemplate from "../../component/products/category/CategoryRowTemplate";
import CategoryHeader from "../../component/products/category/CategoryHeader";
import { fetchAllCategories } from "../../api";

const CategoryPage = () => {
  const { data, loading, mutate } = fetchAllCategories();
  mutate();
  return (
    <div className=" w-full h-full bg-white rounded-lg shadow-sm p-5 flex flex-col gap-5">
      <CategoryHeader />

      {data ? (
        <Table
          tableColumn={categoryTableColumn}
          rowTemplate={CategoryRowTemplate}
          rowData={data?.data}
          checkAll={true}
        />
      ) : null}
    </div>
  );
};

export default CategoryPage;
