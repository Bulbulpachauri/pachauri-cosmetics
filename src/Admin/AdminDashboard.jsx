import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tag,
  Star,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Bell,
  CalendarDays,
  TrendingUp,
  ShieldCheck,
  Crown,
  AlertTriangle,
  Zap,
  ReceiptText,
  ArrowUpRight,
} from "lucide-react";
import { PRODUCTS } from "../data/mock";

const recentOrders = [
  ["#PC1005", "Neha Sharma", "₹1,250", "Delivered", "13 Sep, 10:45 AM"],
  ["#PC1004", "Priya Verma", "₹899", "Shipped", "10 Sep, 09:20 AM"],
  ["#PC1003", "Aarti Singh", "₹1,560", "Processing", "7 Sep, 04:15 PM"],
  ["#PC1002", "Sneha Patel", "₹780", "Delivered", "3 Sep, 11:30 AM"],
  ["#PC1001", "Riya Kapoor", "₹1,320", "Cancelled", "28 Aug, 02:45 PM"],
];

const topProducts = [
  { id: "p2", sold: 245 },
  { id: "p3", sold: 180 },
  { id: "p5", sold: 160 },
  { id: "p4", sold: 120 },
  { id: "p6", sold: 98 },
];

const lowStock = [
  { id: "p9", stock: 5 },
  { id: "p4", stock: 8 },
  { id: "p1", stock: 12 },
  { id: "p2", stock: 15 },
  { id: "p8", stock: 20 },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Products", icon: Package, arrow: true },
  { label: "Orders", icon: ShoppingCart, arrow: true },
  { label: "Customers", icon: Users },
  { label: "Coupons & Offers", icon: Tag },
  { label: "Reviews", icon: Star },
  { label: "Blog", icon: FileText },
  { label: "Analytics", icon: BarChart3, arrow: true },
  { label: "Settings", icon: Settings, arrow: true },
];

function StatusPill({ status }) {
  const styles = {
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-blue-100 text-blue-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}

function Panel({ children, className = "" }) {
  return (
    <section className={`rounded-[18px] border border-[#f0e6ea] bg-white p-5 ${className}`}>
      {children}
    </section>
  );
}

function PanelHeader({ icon: Icon, title, iconClass = "bg-[#fce7eb] text-[#d63862]", right }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2.5 text-[15px] font-semibold">
        <span className={`flex h-[30px] w-[30px] items-center justify-center rounded-lg ${iconClass}`}>
          <Icon size={15} />
        </span>
        {title}
      </div>
      {right}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#fbf7f8] text-[#2b2230]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-[250px] shrink-0 flex-col border-r border-[#f0e6ea] bg-white px-[18px] py-[22px] lg:flex">
          <div className="flex items-center gap-2.5 px-1.5 pb-6">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#fce7eb] text-lg">
              🌸
            </div>
            <div>
              <div className="font-['Poppins'] text-[17px] font-bold leading-tight">Pachauri</div>
              <div className="text-[10px] font-semibold tracking-[2px] text-[#e94a72]">COSMETICS</div>
            </div>
          </div>

          <nav className="mt-1.5 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-[10px] px-3 py-[11px] text-left text-sm font-medium transition ${
                    item.active
                      ? "bg-gradient-to-r from-[#fce7eb] to-[#fdeef1] font-semibold text-[#d63862]"
                      : "text-[#6b6270] hover:bg-[#faf5f6]"
                  }`}
                >
                  <span className="flex items-center gap-[11px]">
                    <Icon size={18} strokeWidth={1.8} />
                    {item.label}
                  </span>
                  {item.arrow && <span className="text-base opacity-50">›</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto min-h-[150px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#fbe2e8] to-[#fdf1f0] p-[18px]">
            <div className="font-['Poppins'] text-[15px] font-semibold leading-6 text-[#8a2846]">
              Good Skin
              <br />
              Good Mood 💕
            </div>
          </div>

          <button className="mt-[14px] flex items-center gap-2.5 px-3 pt-[13px] text-sm font-medium text-[#6b6270]">
            <LogOut size={17} />
            Logout
          </button>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-[30px] lg:py-[22px]">
          {/* Topbar */}
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center">
            <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-[#f0e6ea] bg-white px-4 py-3 text-sm text-[#6b6270]">
              <Search size={18} />
              <span>Search products, orders, customers...</span>
            </div>

            <div className="flex items-center justify-end gap-4 sm:gap-[22px]">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#f0e6ea] bg-white">
                <Bell size={17} />
                <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#fbf7f8] bg-[#e94a72] text-[10px] font-bold text-white">
                  3
                </span>
              </button>

              <div className="flex items-center gap-2.5">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#f9d0da] to-[#e94a72] font-bold text-white">
                  A
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight">Admin</div>
                  <div className="text-[11.5px] text-[#6b6270]">Store Administrator</div>
                </div>
                <span className="text-[#6b6270]">⌄</span>
              </div>
            </div>
          </div>

          {/* Welcome */}
          <div className="mb-[22px] flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-['Poppins'] text-2xl font-bold sm:text-[26px]">Welcome Back, Admin! 🌸</h1>
              <p className="mt-1 text-sm text-[#6b6270]">Here's what's happening with your store today.</p>
            </div>
            <div className="text-right text-[13px] text-[#6b6270]">
              <div className="flex items-center justify-end gap-1.5 font-semibold text-[#2b2230]">
                <CalendarDays size={15} />
                Today, 13 Sep 2026
              </div>
              <div className="mt-1 text-[11.5px]">Last updated: 10:24 AM</div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["₹", "Total Sales", "₹1,25,500", "↑ 12% from last week", "text-[#d63862]", "bg-[#fce7eb]"],
              ["🛒", "Total Orders", "156", "↑ 8% from last week", "text-[#7c6ee8]", "bg-[#ece9fb]"],
              ["📦", "Total Products", "85", "↑ 5% from last week", "text-[#1c9a56]", "bg-[#dcf6e8]"],
              ["👥", "Total Customers", "320", "↑ 15% from last week", "text-[#3b9ef0]", "bg-[#dbeafd]"],
            ].map(([icon, label, value, delta, color, iconBg]) => (
              <div key={label} className="rounded-[18px] border border-[#f0e6ea] bg-white p-5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${iconBg} ${color} text-lg`}>
                  {icon}
                </div>
                <div className="mt-2.5 text-[13.5px] font-medium text-[#6b6270]">{label}</div>
                <div className="mt-[-4px] text-[25px] font-bold">{value}</div>
                <div className="mt-2 text-xs font-semibold text-[#1c9a56]">{delta}</div>
                <div className={`mt-2 h-[34px] ${color}`}>
                  <svg viewBox="0 0 120 34" className="h-full w-full" preserveAspectRatio="none">
                    <polyline
                      points="0,28 20,18 40,24 60,12 80,16 100,6 120,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-r from-[#e9527a] via-[#f0748f] to-[#f4a3ab] p-5 text-white">
              <h3 className="font-['Poppins'] text-[19px] font-semibold leading-tight">
                Grow Your
                <br />
                Beauty Business
              </h3>
              <p className="mt-2 text-xs opacity-90">
                Quality Products &nbsp;|&nbsp; Happy Customers
                <br />
                Better Tomorrow
              </p>
              <button className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#d63862]">
                Manage Products <ArrowUpRight size={13} className="inline" />
              </button>
              <div className="absolute -bottom-3 right-1 text-[85px] opacity-25">💄</div>
            </div>
          </div>

          {/* Middle */}
          <div className="mb-5 grid grid-cols-1 gap-[18px] xl:grid-cols-[1.7fr_1fr]">
            <Panel>
              <PanelHeader
                icon={TrendingUp}
                title="Sales Overview"
                right={
                  <select className="rounded-lg border border-[#f0e6ea] bg-white px-2.5 py-1.5 text-xs text-[#6b6270] outline-none">
                    <option>Last 7 Days</option>
                  </select>
                }
              />

              <svg viewBox="0 0 620 220" className="h-[220px] w-full">
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f0577f" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#f0577f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="#f0e6ea" strokeWidth="1">
                  <line x1="40" y1="10" x2="40" y2="180" />
                  <line x1="40" y1="180" x2="610" y2="180" />
                  <line x1="40" y1="135" x2="610" y2="135" />
                  <line x1="40" y1="90" x2="610" y2="90" />
                  <line x1="40" y1="45" x2="610" y2="45" />
                  <line x1="40" y1="10" x2="610" y2="10" />
                </g>
                <g fill="#9a8f95" fontSize="11" fontFamily="Inter">
                  <text x="8" y="184">0</text>
                  <text x="0" y="139">10K</text>
                  <text x="0" y="94">20K</text>
                  <text x="0" y="49">30K</text>
                  <text x="0" y="14">40K</text>
                </g>
                <polygon
                  points="60,150 145,140 230,155 315,95 400,110 485,60 570,45 570,180 60,180"
                  fill="url(#areaFill)"
                />
                <polyline
                  points="60,150 145,140 230,155 315,95 400,110 485,60 570,45"
                  fill="none"
                  stroke="#e94a72"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g fill="#e94a72">
                  {[["60","150"],["145","140"],["230","155"],["315","95"],["400","110"],["485","60"]].map(([cx,cy]) => (
                    <circle key={cx} cx={cx} cy={cy} r="4" />
                  ))}
                  <circle cx="570" cy="45" r="5" stroke="#fff" strokeWidth="2" />
                </g>
                <g fill="#9a8f95" fontSize="11" fontFamily="Inter">
                  <text x="46" y="198">7 Sep</text>
                  <text x="128" y="198">8 Sep</text>
                  <text x="210" y="198">9 Sep</text>
                  <text x="288" y="198">10 Sep</text>
                  <text x="372" y="198">11 Sep</text>
                  <text x="458" y="198">12 Sep</text>
                  <text x="545" y="198">13 Sep</text>
                </g>
              </svg>
            </Panel>

            <Panel>
              <PanelHeader icon={ShieldCheck} title="Order Status" />
              <div className="flex items-center gap-[18px]">
                <div
                  className="relative flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(#e94a72 0 17.9%, #e0a52c 17.9% 41%, #3b9ef0 41% 68%, #2fbd6b 68% 96.8%, #e94a72 96.8% 100%)",
                  }}
                >
                  <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white">
                    <div className="text-[22px] font-bold">156</div>
                    <div className="text-[10.5px] text-[#6b6270]">Total Orders</div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-[9px] text-[13px]">
                  {[
                    ["Pending", "28", "#e94a72"],
                    ["Processing", "36", "#e0a52c"],
                    ["Shipped", "42", "#3b9ef0"],
                    ["Delivered", "45", "#2fbd6b"],
                    ["Cancelled", "5", "#e94a72"],
                  ].map(([name, value, color]) => (
                    <div key={name} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-[#6b6270]">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                        {name}
                      </span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </div>

          {/* Bottom */}
          <div className="grid grid-cols-1 gap-[18px] xl:grid-cols-[1.15fr_1.15fr_1fr]">
            <Panel>
              <PanelHeader icon={Crown} title="Top Selling Products" right={<span className="cursor-pointer text-xs font-semibold text-[#e94a72]">View All</span>} />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-[#f0e6ea] text-xs font-medium text-[#6b6270]">
                      <th className="px-2 py-1.5 text-left">#</th>
                      <th className="px-2 py-1.5 text-left">Product</th>
                      <th className="px-2 py-1.5 text-left">Sold</th>
                      <th className="px-2 py-1.5 text-left">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map(({ id, sold }, i) => {
                      const product = PRODUCTS.find((p) => p.id === id)
                      const revenue = product.price * sold
                      return (
                        <tr key={product.name} className="border-b border-[#f0e6ea] last:border-0">
                          <td className="px-2 py-2.5">{i + 1}</td>
                          <td className="px-2 py-2.5">
                            <span className="flex items-center gap-2.5">
                              <img src={product.image} alt={product.name} className="h-8 w-8 rounded-lg border border-[#f0e6ea] object-cover" />
                              {product.name}
                            </span>
                          </td>
                          <td className="px-2 py-2.5">{sold}</td>
                          <td className="px-2 py-2.5">₹{revenue.toLocaleString("en-IN")}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel>
              <PanelHeader icon={AlertTriangle} title="Low Stock Products" right={<span className="cursor-pointer text-xs font-semibold text-[#e94a72]">View All</span>} />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[390px] border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-[#f0e6ea] text-xs font-medium text-[#6b6270]">
                      <th className="px-2 py-1.5 text-left">#</th>
                      <th className="px-2 py-1.5 text-left">Product</th>
                      <th className="px-2 py-1.5 text-left">Stock</th>
                      <th className="px-2 py-1.5 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lowStock.map(({ id, stock }, i) => {
                      const product = PRODUCTS.find((p) => p.id === id)
                      return (
                        <tr key={product.name} className="border-b border-[#f0e6ea] last:border-0">
                          <td className="px-2 py-2.5">{i + 1}</td>
                          <td className="px-2 py-2.5">
                            <span className="flex items-center gap-2.5">
                              <img src={product.image} alt={product.name} className="h-8 w-8 rounded-lg border border-[#f0e6ea] object-cover" />
                              {product.name}
                            </span>
                          </td>
                          <td className="px-2 py-2.5">{stock}</td>
                          <td className="px-2 py-2.5">
                            <span className="rounded-full bg-red-100 px-3 py-1 text-[11px] font-semibold text-[#d63862]">Low</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel>
              <PanelHeader icon={Zap} title="Quick Actions" iconClass="bg-[#fdf1d6] text-[#e0a52c]" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-2">
                {[
                  ["📦", "Add Product", "bg-[#fdeef1]"],
                  ["🛒", "View Orders", "bg-[#ece9fb]"],
                  ["👤", "Manage Customers", "bg-[#dcf6e8]"],
                  ["🏷️", "Add Coupon", "bg-[#fdf1d6]"],
                  ["📝", "Write Blog", "bg-[#dbeafd]"],
                  ["⚙️", "Store Settings", "bg-[#ece7f7]"],
                ].map(([emoji, label, bg]) => (
                  <button key={label} className={`flex flex-col items-center gap-2 rounded-[14px] p-4 text-xs font-semibold ${bg}`}>
                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white/60 text-[15px]">{emoji}</span>
                    {label}
                  </button>
                ))}
              </div>
            </Panel>
          </div>

          {/* Recent Orders */}
          <Panel className="mt-[18px]">
            <PanelHeader icon={ReceiptText} title="Recent Orders" right={<span className="cursor-pointer text-xs font-semibold text-[#e94a72]">View All</span>} />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-[#f0e6ea] text-xs font-medium text-[#6b6270]">
                    <th className="px-2 py-1.5 text-left">Order ID</th>
                    <th className="px-2 py-1.5 text-left">Customer</th>
                    <th className="px-2 py-1.5 text-left">Amount</th>
                    <th className="px-2 py-1.5 text-left">Status</th>
                    <th className="px-2 py-1.5 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(([id, customer, amount, status, date]) => (
                    <tr key={id} className="border-b border-[#f0e6ea] last:border-0">
                      <td className="px-2 py-2.5">{id}</td>
                      <td className="px-2 py-2.5">{customer}</td>
                      <td className="px-2 py-2.5">{amount}</td>
                      <td className="px-2 py-2.5"><StatusPill status={status} /></td>
                      <td className="px-2 py-2.5">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          {/* Footer banner */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[18px] bg-gradient-to-r from-[#fce9ec] to-[#fdf4f1] px-6 py-[22px]">
            <div className="flex items-center gap-3.5">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#fce7eb] text-xl">🌸</div>
              <div>
                <h3 className="font-['Poppins'] text-lg font-semibold">Pachauri Cosmetics</h3>
                <p className="text-xs text-[#6b6270]">Your Beauty, Our Priority</p>
              </div>
            </div>
            <div className="text-right text-[13px] italic leading-6 text-[#b06277]">
              "Because every beauty journey
              <br />
              starts with the right products."
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
