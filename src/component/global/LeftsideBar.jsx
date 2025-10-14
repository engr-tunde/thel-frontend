import { Link } from "react-router-dom";
import { sidebarData } from "@/utility/dataArr";
import * as FaIcons from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import AddExpenseSideBarFormModal from "../expense/AddExpenseSideBarFormModal";

const LeftsideBar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  return (
    <div className="bg-white p-3 overflow-y-auto w-full border-r-[2px] border-r-[#ff75871f]">
      <img src="/images/logo-plain.jpeg" alt="" className="w-[70px] m-auto" />
      <div className="w-full flex flex-col ps-3 mt-2 h-[90vh] overflow-y-scroll">
        {sidebarData?.map((item, index) => {
          const IconComponent = FaIcons[item.icon];
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <div
                className="flex items-center justify-between hover:text-[#ff7588] cursor-pointer"
                onClick={() =>
                  hasChildren && setOpenIndex(isOpen ? null : index)
                }
              >
                <Link
                  to={item?.link}
                  className="flex items-center gap-4 my-3 "
                  tabIndex={-1}
                  onClick={(e) => hasChildren && e.preventDefault()}
                >
                  <span className="text-[#ff7588]">
                    {IconComponent ? <IconComponent /> : null}
                  </span>
                  <span className="text-[14px] font-light">{item?.title}</span>
                </Link>
                {hasChildren && (
                  <div className="ml-2 p-1 hover:text-[#ff7588] ">
                    {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
                  </div>
                )}
              </div>
              {hasChildren && isOpen && (
                <ul className="px-3 py-4 flex flex-col gap-4 bg-[#f8f9fa]  rounded-md mb-3 duration-200 ease-in">
                  {item.children.map((child, childidx) => (
                    <li key={childidx}>
                      {child.title === "Add Expense" ||
                      child.title === "Add Income" ? (
                        <button
                          onClick={() => setShowExpenseModal(true)}
                          className="text-[14px] text-gray-600 hover:text-[#ff7588] transition-all duration-50 hover:pl-4 w-full text-left"
                        >
                          {child.title}
                        </button>
                      ) : (
                        <Link
                          to={child.link}
                          className="text-[14px] text-gray-600 hover:text-[#ff7588] transition-all duration-50 hover:pl-4"
                        >
                          {child.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <AddExpenseSideBarFormModal
        show={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
      />
    </div>
  );
};

export default LeftsideBar;
