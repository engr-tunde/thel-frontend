import React from "react";
import LeftSideFunction from "../../component/sale/pos/LeftSideFunction";
import RightSideFunction from "../../component/sale/pos/RightSideFunction";

const PosPage = () => {
  return (
    <div className="flex w-full p-2 gap-2">
      <LeftSideFunction />
      <RightSideFunction />
    </div>
  );
};

export default PosPage;
