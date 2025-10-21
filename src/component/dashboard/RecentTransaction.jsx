
export default function RecentTransaction() {

  const tableConfigs = {
    Sale: {
      columns: [
        { title: "Date", className: "w-1/5" },
        { title: "Reference", className: "w-2/5" },
        { title: "Customer", className: "w-1/5" },
        { title: "Status", className: "w-1/5" },
        { title: "Grand Total", className: "w-1/5" },
      ],
      rowTemplate: (item, i) => (
        <tr key={i} className="border-b hover:bg-gray-50">
          <td className="p-2">{item.date}</td>
          <td className="p-2">{item.ref}</td>
          <td className="p-2">{item.customer}</td>
          <td className="p-2">{item.status}</td>
          <td className="p-2">{item.total}</td>
        </tr>
      ),
    },
    Purchase: {
      columns: [
        { title: "Date", className: "w-1/4" },
        { title: "Reference", className: "w-1/4" },
        { title: "Supplier", className: "w-1/4" },
        { title: "Total Amount", className: "w-1/4" },
      ],
      rowTemplate: (item, i) => (
        <tr key={i} className="border-b hover:bg-gray-50">
          <td className="p-2">{item.date}</td>
          <td className="p-2">{item.ref}</td>
          <td className="p-2">{item.supplier}</td>
          <td className="p-2">{item.total}</td>
        </tr>
      ),
    },
    Quotation: {
      columns: [
        { title: "Date", className: "w-1/4" },
        { title: "Reference", className: "w-1/4" },
        { title: "Client", className: "w-1/4" },
        { title: "Status", className: "w-1/4" },
      ],
      rowTemplate: (item, i) => (
        <tr key={i} className="border-b hover:bg-gray-50">
          <td className="p-2">{item.date}</td>
          <td className="p-2">{item.ref}</td>
          <td className="p-2">{item.client}</td>
          <td className="p-2">{item.status}</td>
        </tr>
      ),
    },
    Payment: {
      columns: [
        { title: "Date", className: "w-1/4" },
        { title: "Reference", className: "w-1/4" },
        { title: "Payer", className: "w-1/4" },
        { title: "Status", className: "w-1/4" },
      ],
      rowTemplate: (item, i) => (
        <tr key={i} className="border-b hover:bg-gray-50">
          <td className="p-2">{item.date}</td>
          <td className="p-2">{item.ref}</td>
          <td className="p-2">{item.payer}</td>
          <td className="p-2">{item.status}</td>
        </tr>
      ),
    },
  };

  return <div className="flex w-full"></div>;
}
