function RecentPurchaseRowTemplate(item, i) {
  return (
    <tr
      key={i}
      className={`text-xs text-gray-600 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer text-[14px] ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="table-cell text-start p-4">{item?.product}</td>
      <td className="table-cell text-start p-4">
        {item?.reference_number}
      </td>
    </tr>
  );
}

export default RecentPurchaseRowTemplate;
