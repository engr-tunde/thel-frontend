import { Outlet } from "react-router-dom";
import LeftsideBar from "@/component/global/LeftsideBar";
import { useEffect, useState } from "react";
import NavBar from "@/component/global/NavBar";
import { fetchLoggedInAdmin } from "../api";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data, loading } = fetchLoggedInAdmin();
  // useEffect(() => {
  //   if (!loading && !data) {
  //     window.location.replace("/login");
  //   }
  // }, [data]);
  return (
    <div className="flex w-screen h-screen gap-3 overflow-y-hidden">
      {/* left side */}
      <div className={`${sidebarOpen ? "block" : "hidden"} flex w-[16%]`}>
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-1">
        {/* navbar side */}
        <NavBar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          data={data?.data}
        />
        {/* main  */}
        <div className=" p-3 lg:p-5 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
