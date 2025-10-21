const metrics = [
  {
    label: "Revenue",
    value: "3757.16",
    color: "text-green-500",
    icon: "💰",
  },
  {
    label: "Sale Return",
    value: "0.00",
    color: "text-red-500",
    icon: "↩️",
  },
  {
    label: "Purchase Return",
    value: "0.00",
    color: "text-yellow-500",
    icon: "🔄",
  },
  {
    label: "Profit",
    value: "956.40",
    color: "text-blue-500",
    icon: "📈",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          // className={`p-4 ${metric.color} flex items-center  gap-6`}
          className={`px-4 py-6 flex items-center  gap-6 border-[1px] border-[#b1b1b15d] rounded-md`}
          style={{ boxShadow: "2px 2px 6px #b1b1b137" }}
        >
          <div className="text-3xl">{metric.icon}</div>
          <div>
            <div className="text-lg font-medium text-gray-800">
              {metric.value}
            </div>
            <div className={`text-[16px] ${metric.color}`}>{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
