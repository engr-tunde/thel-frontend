const metrics = [
  {
    label: "Revenue",
    value: "3757.16",
    color: "bg-green-100",
    icon: "💰",
  },
  {
    label: "Sale Return",
    value: "0.00",
    color: "bg-red-100",
    icon: "↩️",
  },
  {
    label: "Purchase Return",
    value: "0.00",
    color: "bg-yellow-100",
    icon: "🔄",
  },
  {
    label: "Profit",
    value: "956.40",
    color: "bg-blue-100",
    icon: "📈",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className={`p-4 ${metric.color} flex items-center  gap-6`}
          style={{ boxShadow: "3px 3px 4px #b1b1b1b3" }}
        >
          <div className="text-3xl">{metric.icon}</div>
          <div>
            <div className="text-2xl font-semibold text-gray-800">
              {metric.value}
            </div>
            <div className="text-[18px] text-gray-600">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
