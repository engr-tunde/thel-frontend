function RecentProductRowTemplate(item, i) {
  return (
    <tr
      key={i}
      className={`text-xs text-gray-600 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer text-[14px] ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="p-4 flex-row flex items-center gap-3 text-start">
        <img src={item?.image} alt="product" className="w-8 h-8 object-cover" />
        <span>{item?.product_name}</span>
      </td>
      <td className="table-cell text-start">
        <div className="">{item?.quantity}</div>
      </td>
    </tr>
  );
}

export default RecentProductRowTemplate;
