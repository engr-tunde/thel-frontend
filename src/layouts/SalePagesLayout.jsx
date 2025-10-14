import { Outlet } from "react-router-dom";
import LeftsideBar from "../component/global/LeftsideBar";
import NavBar from "../component/global/NavBar";
import { useState } from "react";

const SalePagesLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex max-w-screen box-border h-screen relative">
      {/* left side */}
      <div className={`${sidebarOpen ? "block" : "hidden"} flex w-[15%]`}>
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col px-3">
        {/* navbar side */}
        <NavBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        {/* main  */}
        <Outlet />
      </div>
    </div>
  );
};

export default SalePagesLayout;
