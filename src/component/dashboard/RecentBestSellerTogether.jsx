// src/components/Dashboard.jsx

import BestSellerList from "./BestSellerList";
import RecentTransactionTable from "./RecentTransactionTable";

export default function RecentBestSellerTogether() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6  min-h-screen ">
      <div className="">
        <RecentTransactionTable />
      </div>
      <div className="">
        <BestSellerList />
      </div>
    </div>
  );
}
