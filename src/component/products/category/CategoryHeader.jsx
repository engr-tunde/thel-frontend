import { useState } from "react";
import {
  FaChevronDown,
  FaCopy,
  FaDownload,
  FaEye,
  FaFileWord,
  FaPlus,
  FaPrint,
  FaRegFileAlt,
  FaSearch,
  FaUpload,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import FormModal from "../../form/FormModal";
import { MdOutlineFilterAlt } from "react-icons/md";
import { infoMessage } from "../../../utility/helpers";

function CategoryHeader() {
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const handleImportClick = () => {
    infoMessage("Feature incoming. Not yet available!");
  };
  return (
    <div className="flex flex-col lg:justify-between gap-2">
      <div className="flex items-center gap-2 w-full">
        <FormModal table="category" type="create" title="Add Category" />
        <div
          onClick={() => handleImportClick()}
          className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#7c5cc4] text-lg text-[15px] text-white cursor-pointer trigger_import"
        >
          <span>
            <FaRegFileAlt />
          </span>
          <span>Import Category</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between py-3">
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded-sm px-3 py-1 bg-white focus:bg-gray-200"
            value={recordsPerPage}
            onChange={(e) => setRecordsPerPage(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-gray-600">records per page</span>
        </div>

        <div className="relative">
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            // value={searchTerm}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
          />
        </div>

        <div className="flex gap-2">
          <button
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            title="Export CSV"
          >
            <FaFileWord size={20} />
          </button>
          <button
            className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
            title="Copy Data"
          >
            <FaCopy size={20} />
          </button>
          <button
            className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
            title="Export Excel"
          >
            <FaDownload size={20} />
          </button>
          <button
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            title="Print"
          >
            <FaPrint size={20} />
          </button>
          <button
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            title="Close"
          >
            <FaX size={20} />
          </button>
          <div className="relative">
            <button className="flex items-center gap-1 p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
              <FaEye size={20} />
              <FaChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;
