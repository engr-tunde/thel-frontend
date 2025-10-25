import { Outlet } from "react-router-dom";

const PosPageLayout = () => {
  return (
    <div className="flex max-w-screen box-border h-screen relative">
      
        <Outlet />
    </div>
  );
};

export default PosPageLayout;
