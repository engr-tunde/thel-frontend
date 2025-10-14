import { bestSellers } from "../../utility/dashboardData";

export default function BestSellerList() {
  return (
    <div className="col-span-1 p-4 rounded w-full border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Best Seller August</h2>
        <span className="bg-purple-600 font-semibold text-[10px] text-white px-2 py-1 rounded hover:bg-purple-700 transition">
          Top 5
        </span>
      </div>
      <div className="flex justify-between items-center mb-4 px-2 ">
        <h1>Product detail</h1>
        <h1>Qty</h1>
      </div>

      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          {/* <tr>
            <th className="p-2">Product Details</th>
            <th className="p-2">Qty</th>
          </tr> */}
        </thead>
        <tbody>
          {bestSellers.map((item, i) => (
            <tr key={i} className="border-b border-b-gray-200">
              <td className="p-4">{item.qty}</td>
              <td className="p-2">
                <div className="font-light text-[13px] ">{item.name}</div>
                <div className="text-sm text-gray-500">{item.code}</div>
              </td>
              <td className="p-2 "> {item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
