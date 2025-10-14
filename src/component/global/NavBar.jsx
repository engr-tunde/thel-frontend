// import { FaBars, FaLightbulb, FaPlus, FaPlusSquare } from "react-icons/fa";
// import { FaCartFlatbed } from "react-icons/fa6";
// import { SiWagmi } from "react-icons/si";
// import { Link } from "react-router-dom";
// import { plusMenu } from "../../utility/dataArr";
// import { useState } from "react";

// const NavBar = ({ onToggleSidebar }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   return (
//     <div className="flex p-2 justify-between items-center ">
//       <div>
//         <FaBars
//           className="text-4xl p-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] hover:bg-[#ff7588] hover:text-white"
//           onClick={onToggleSidebar}
//         />
//       </div>

//       <div className="plus flex items-center gap-3">
//         <div
//           className="text-[14px] py-1 px-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] bg-white hover:bg-[#ff7588] hover:text-white"
//           onClick={() => setShowDropdown((prev) => !prev)}
//         >
//           <span>+</span>
//         </div>
//         {showDropdown && (
//           <ul className="absolute top-12 right-10 bg-white shadow-md rounded-md  w-40 py-2 shadow-white">
//             {plusMenu?.map((plusItem, plusIndx) => (
//               <li key={plusIndx}>
//                 <Link
//                   to={plusItem.link}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-700 text-[14px]"
//                   onClick={() => setShowDropdown(false)}
//                 >
//                   {plusItem.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//         <div className="flex justify-center text-[14px] text-center items-center gap-2 py-1 px-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] bg-white hover:bg-[#ff7588] hover:text-white">
//           <FaCartFlatbed />
//           <span>POS</span>
//         </div>
//         <FaLightbulb />
//         <SiWagmi className="text-2xl" />
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { FaArrowDown, FaBars, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { adminMenuDropdown, plusMenu } from "../../utility/dataArr";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import * as FaIcons from "react-icons/fa";

const NavBar = ({ onToggleSidebar, data }) => {
  const [showPlusDropdown, setShowPlusDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  return (
    <div className="flex py-2 px-6 justify-between items-center">
      <div>
        <FaBars
          className="text-4xl p-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] hover:bg-[#ff7588] hover:text-white"
          onClick={onToggleSidebar}
        />
      </div>

      <div className="plus flex items-center gap-3 relative">
        {/* Plus Dropdown */}
        <div
          className="text-[14px] py-1 px-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] bg-white hover:bg-[#ff7588] hover:text-white"
          onClick={() => {
            setShowPlusDropdown((prev) => !prev);
            setShowAdminDropdown(false);
          }}
        >
          <span>+</span>
        </div>
        {showPlusDropdown && (
          <ul className="absolute top-12 left-0 bg-white shadow-md rounded-md w-40 py-2 shadow-gray-400 z-10">
            {plusMenu?.map((plusItem, index) => (
              <li key={index}>
                <Link
                  to={plusItem.link}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-700 text-[14px]"
                  onClick={() => setShowPlusDropdown(false)}
                >
                  {plusItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* POS Button */}
        <div className="flex justify-center text-[14px] text-center items-center gap-2 py-1 px-2 border-[1px] border-[#ff7588] rounded-md text-[#ff7588] bg-white hover:bg-[#ff7588] hover:text-white">
          <FaShoppingBag />
          <span>POS</span>
        </div>

        {/* Icons */}
        <MdOutlineLightMode className="text-[#ff7588] hover:cursor-pointer" />
        <HiArrowsPointingOut className="text-[#ff7588] hover:cursor-pointer" />
        <CiGlobe className="text-[#ff7588] hover:cursor-pointer" />

        {/* Admin Dropdown */}
        <div
          className="flex gap-1 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md text-sm"
          onClick={() => {
            setShowAdminDropdown((prev) => !prev);
            setShowPlusDropdown(false);
          }}
        >
          <FaUser className="text-[#ff7588]" />
          <span>{data ? data?.username : "Admin"}</span>
          <FaArrowDown className="text-[#ff7588]" />
        </div>
        {showAdminDropdown && (
          <ul className="absolute top-12 right-0 bg-white shadow-md rounded-md w-40 py-2 shadow-gray-400 z-10">
            {adminMenuDropdown?.map((adminItem, index) => {
              const IconComponent = FaIcons[adminItem.icon];
              return (
                <li key={index}>
                  <Link
                    to={adminItem.link}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-700 text-[14px]"
                    onClick={() => setShowAdminDropdown(false)}
                  >
                    <div className="flex items-center gap-2">
                      {IconComponent && <IconComponent />}
                      <span className="hover:text-green-700">
                        {adminItem.title}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
