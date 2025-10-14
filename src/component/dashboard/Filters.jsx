export default function Filters() {
  return (
    <div className="flex gap-6 mb-2 justify-end">
      <select className="px-6 py-2 rounded  text-purple-600 ">
        <option>All Warehouse</option>
        <option>Shop 1</option>
        <option>Shop 2</option>
      </select>

      <select className="px-6 py-2 rounded bg-gray-200 shadow text-gray-700">
        <option>Date Range</option>
        <option>Today</option>
        <option>This Week</option>
        <option>This Month</option>
      </select>
    </div>
  );
}
