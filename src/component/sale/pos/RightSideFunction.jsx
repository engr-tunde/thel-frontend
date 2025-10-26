import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { FaMobileRetro } from "react-icons/fa6";
import { LuPrinter } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { fetchAllProducts } from "../../../api";
import { Link } from "react-router-dom";
import { homeMenu } from "../../../data/posData";

const RightSideFunction = () => {
  const { data: productData, error: productError } = fetchAllProducts();

  const [open, setopen] = useState(false);

  const handleCloseOpen = () => {
    setopen(!open);
  };

  return (
    <div className="flex flex-col gap-3 p-2 w-[40%]">
      <div className="relative w-full flex justify-between">
        <div
          className="p-2 border-2 border-purple-500"
          onClick={handleCloseOpen}
        >
          <CiHome />

          {open ? (
            <div className="absolute shadow-2xl bg-white text-sm flex flex-col gap-2 py-4 px-2 rounded-md">
              {homeMenu?.map((item, i) => (
                <Link to={item?.link} key={i}>
                  {item?.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-3 text-md">
          <FaMobileRetro />
          <LuPrinter />
          <GoBriefcase />
          <BsHandbag />
          <div className="flex items-center">
            <IoPersonCircleOutline />
            <span>ADMIN</span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-3 text-white">
        <button className="bg-[#7c5cc4] w-1/3 rounded-md py-2">Category</button>
        <button className="bg-[#17a2b8] w-1/3 rounded-md py-2">Brand</button>
        <button className="bg-[#dc3545] w-1/3 rounded-md py-2">Featured</button>
      </div>

      <div className="w-full grid grid-cols-4 gap-2 overflow-y-scroll">
        {productData?.data?.map((item, i) => (
          <div key={i} className="">
            <div className="flex flex-col justify-center items-center p-2 border-[1px] border-gray-300 h-40 gap-1">
              <div className="flex items-center justify-center w-full h-[60%]">
                <img
                  src={item?.image}
                  alt="products"
                  className="h-full object-center"
                />
              </div>
              <span className="text-[13px] text-center">
                {item?.product_name}
              </span>
              <span className="text-[13px] text-center">
                {item?.product_code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideFunction;
