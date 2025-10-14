import { useState } from "react";
import Table from "../../component/global/Table.jsx";
import {saleListTableColumn, saleListDataArr } from "../../data/saleListData.js";
import SaleListRowTemplate from "../../component/sale/saleList/SaleListRowTemplate.jsx";
import SaleListHeader from "../../component/sale/saleList/SaleListHeader.jsx";
import { fetchAllSales } from "../../api/index.js";

const SaleListPage = () => {
//   const [sales, setSales] = useState(categoryDataArr);
//   const [saleSearch, setSaleSearch] = useState("");
const { data, loading, error, mutate } = fetchAllSales();

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-sm absolute">
      <SaleListHeader />

      <div className="overflow-x-auto">
        <Table
          tableColumn={saleListTableColumn}
          rowTemplate={SaleListRowTemplate}
          rowData={data?.data}
          checkAll={true}
        />
      </div>
    </div>
  );
};

export default SaleListPage;
