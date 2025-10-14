import Table from "../../global/Table"

function AddSaleRowTemplate(order) {
  return (
    <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-4">{order.product}</td>
      <td className="p-4">{order.quantity}</td>
      <td className="p-4">
        {order.netUnitPrice}
      </td>
      <td className="p-4">
        {order.discount}
      </td>
      <td className="p-4">
        {order.tax}
      </td>
      <td className="p-4">
        {order.subTotal}
      </td>
    </tr>
  );
}


const addSaleTableColumn= [
    {
        title: "Product", 
        className:"text-gray-600 text-lg"
    }, 
    {
        title: "Quantity", 
        className:""
    }, 
    {
        title: "Net Unit Price", 
        className:""
    }, 
    {
        title: "Discount", 
        className:""
    }, 
    {
        title: "Tax", 
        className:""
    }, 
    {
        title: "SubTotal", 
        className:""
    }, 
]

const addSaleTableData = [
    {
        product: "total", 
        quantity: 0, 
        netUnitPrice: 0, 
        discount: 0.00, 
        tax: 0.00, 
        subTotal: 0.00, 
    },
]



const AddSaleTable = () => {
    return (
        <Table
        tableColumn={addSaleTableColumn} 
        rowData={addSaleTableData} 
        rowTemplate={AddSaleRowTemplate}
        />
    )
}




export default AddSaleTable;

