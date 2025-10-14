import { useState } from "react";
import {
  FaChevronDown,
  FaCopy,
  FaDownload,
  FaEye,
  FaFileWord,
  FaFilter,
  FaPlus,
  FaPrint,
  FaSearch,
  FaTrash,
  FaUpload,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FiFilter, FiTrash2 } from "react-icons/fi";
import FormModal from "../../form/FormModal";
import { fetchAllSales } from "../../../api";

function SaleListHeader(item) {
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col lg:justify-between gap-4">
        <div className="flex gap-3 mb-2 border-gray-300 border-b-2 pb-4">
          {/* <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
            <FaPlus size={20} />
            Add Sale
          </button> */}
          <FormModal title="Add Sale" type="create" table="sale" />
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors whitspace-nowrap">
            <FaCopy size={20} />
            Import Sale
          </button>
          <button className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors whitspace-nowrap">
            <FiTrash2 size={20} />
            Deleted Sales
          </button>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors whitspace-nowrap">
            <FiFilter size={20} />
            Filter Sales
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between py-3 w-full">
          <div className="flex items-center gap-2">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:bg-gray-200"
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
    </div>
  );
}

export default SaleListHeader;
