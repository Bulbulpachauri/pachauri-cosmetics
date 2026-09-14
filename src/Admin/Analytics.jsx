import { BarChart3, Users, ShoppingCart, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "₹1,25,500", change: "↑ 12%", icon: DollarSign },
  { label: "Orders", value: "156", change: "↑ 8%", icon: ShoppingCart },
  { label: "Customers", value: "320", change: "↑ 15%", icon: Users },
  { label: "Avg. Order Value", value: "₹805", change: "↑ 5%", icon: BarChart3 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-[#FBF7F8] p-5 sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-[#a47768]">Store Management</p>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#292321]">Analytics</h1>
        <p className="mt-2 text-sm text-gray-500">Track sales, traffic, and customer behavior.</p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="rounded-[18px] border border-[#f0e6ea] bg-white p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fce7eb] text-[#d63862]">
              <Icon size={18} />
            </div>
            <p className="mt-3 text-[13.5px] font-medium text-[#6b6270]">{label}</p>
            <p className="mt-1 text-[25px] font-bold">{value}</p>
            <p className="mt-1 text-xs font-semibold text-[#1c9a56]">{change}</p>
          </div>
        ))}
      </div>

      <div className="mt-[18px] rounded-[18px] border border-[#f0e6ea] bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">Top Performing Products</h2>
          <span className="cursor-pointer text-xs font-semibold text-[#e94a72]">View All</span>
        </div>
        <div className="space-y-3">
          {[
            { name: "Dew Drop Vitamin C Serum", sold: "180 units", revenue: "₹9,720" },
            { name: "Rose Hour Eyeshadow Palette", sold: "160 units", revenue: "₹7,360" },
            { name: "Cloud Cream Barrier Moisturiser", sold: "120 units", revenue: "₹5,040" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between border-b border-[#f0e6ea] pb-3 last:border-0">
              <span className="text-sm font-medium">{item.name}</span>
              <div className="flex gap-6 text-xs text-[#6b6270]">
                <span>{item.sold}</span>
                <span>{item.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
