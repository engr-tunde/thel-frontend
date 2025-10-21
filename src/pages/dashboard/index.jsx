import Chart from "../../component/dashboard/Chart";
import Filters from "../../component/dashboard/Filters";
import Header from "../../component/dashboard/Header";
import MetricsGrid from "../../component/dashboard/MetricGrid";
import RecentSaleTable from "../../component/dashboard/RecentSaleTable";
import RecentProductTable from "../../component/dashboard/RecentProductTable";
import RecentPurchaseTable from "../../component/dashboard/RecentPurchaseTable";

const DashboardPage = () => {
  
  return (
    <div className="h-screen bg-gray p-6 overflow-y-scroll shadow-md bg-white pt-2 rounded-lg flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Header />
          <Filters />
        </div>
        <MetricsGrid />
      </div>
      <Chart />
      <RecentProductTable />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <RecentPurchaseTable />
        <RecentSaleTable />
      </div>
    </div>
  );
};

export default DashboardPage;
