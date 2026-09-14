import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Home,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Clock3,
  Truck,
  CircleCheck,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const orders = [
  {
    id: "#PC1001",
    customer: "Ananya Sharma",
    product: "Vitamin C Face Serum",
    amount: "₹699",
    date: "13 Sep 2026",
    status: "Delivered",
  },
  {
    id: "#PC1002",
    customer: "Priya Singh",
    product: "Matte Lipstick",
    amount: "₹499",
    date: "13 Sep 2026",
    status: "Processing",
  },
  {
    id: "#PC1003",
    customer: "Neha Verma",
    product: "Hydrating Face Cream",
    amount: "₹599",
    date: "12 Sep 2026",
    status: "Shipped",
  },
  {
    id: "#PC1004",
    customer: "Riya Gupta",
    product: "Rose Body Lotion",
    amount: "₹449",
    date: "12 Sep 2026",
    status: "Pending",
  },
];

const menuItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/admin",
  },
  {
    name: "Products",
    icon: Package,
    path: "/admin/products",
  },
  {
    name: "Orders",
    icon: ShoppingBag,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    icon: Users,
    path: "/admin/customers",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[285px] flex-col border-r border-[#eadfdc] bg-[#FBF7F8] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[74px] items-center justify-between border-b border-[#eadfdc] px-7">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <div className="absolute left-1 top-1 h-8 w-5 rotate-[-25deg] rounded-[100%] bg-[#e9c9c8]" />
              <div className="absolute left-5 top-0 h-8 w-5 rotate-[25deg] rounded-[100%] bg-[#e8b8b7]" />
              <div className="absolute left-3 top-5 h-7 w-5 rotate-[-55deg] rounded-[100%] bg-[#efd8d5]" />
            </div>

            <div>
              <h1 className="font-serif text-[26px] font-bold leading-none text-[#704538]">
                Pachauri
              </h1>

              <p className="mt-1 text-center text-[13px] tracking-[4px] text-[#704538]">
                Cosmetics
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-[#6b6260] lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 py-10">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-5 py-3.5 text-[15px] font-medium transition ${
                      isActive
                        ? "bg-[#f3dede] text-[#a8274b]"
                        : "text-[#263044] hover:bg-[#f8eeee]"
                    }`
                  }
                >
                  <Icon size={22} strokeWidth={1.8} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Card */}
        <div className="mx-6 mb-7 rounded-xl border border-[#eadfdc] bg-white/60 p-5">
          <div className="mb-4 flex items-center">
            <div className="relative h-8 w-8">
              <div className="absolute left-1 top-1 h-5 w-3 rotate-[-25deg] rounded-[100%] bg-[#e8c2c0]" />
              <div className="absolute left-4 top-0 h-5 w-3 rotate-[25deg] rounded-[100%] bg-[#e8b5b4]" />
            </div>
          </div>

          <h3 className="font-serif text-[17px] font-bold text-[#8f574c]">
            Beauty Today
          </h3>

          <h3 className="font-serif text-[17px] font-bold text-[#8f574c]">
            Brighter Tomorrow
          </h3>

          <p className="mt-3 text-[13px] leading-5 text-[#8b8990]">
            Manage your store, grow
            <br />
            your business.
          </p>
        </div>
      </aside>
    </>
  );
}

function Topbar({ setOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-[74px] border-b border-[#eadfdc] bg-white/95 backdrop-blur lg:left-[285px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(true)}
          className="mr-4 rounded-lg p-2 text-[#4c4a4a] lg:hidden"
        >
          <Menu size={23} />
        </button>

        {/* Search */}
        <div className="relative w-full max-w-[480px]">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#738096]"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="h-[45px] w-full rounded-xl border border-[#e5dcda] bg-white pl-12 pr-4 text-sm text-[#333] outline-none placeholder:text-[#8d99aa] focus:border-[#c08f84]"
          />
        </div>

        {/* Right */}
        <div className="ml-4 flex items-center gap-5">
          {/* Notification */}
          <button className="relative hidden rounded-full p-2 text-[#514d4b] sm:block">
            <Bell size={24} strokeWidth={1.7} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#ee6875]" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4dddd] text-sm font-semibold text-[#a12a4b]">
              BP
            </div>

            <span className="hidden text-[15px] font-medium text-[#202020] sm:block">
              Admin
            </span>

            <ChevronDown
              size={17}
              className="hidden text-[#666] sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, icon: Icon, iconClass }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
      <div>
        <p className="text-[15px] text-[#61708a]">{title}</p>

        <h2 className="mt-2 font-serif text-[30px] font-bold text-[#111]">
          {value}
        </h2>
      </div>

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconClass}`}
      >
        <Icon size={25} strokeWidth={2} />
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Delivered: "bg-[#e8f8ee] text-[#079447]",
    Processing: "bg-[#f5e9ff] text-[#7837d5]",
    Shipped: "bg-[#e8f1ff] text-[#1769df]",
    Pending: "bg-[#fff1e3] text-[#e87500]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function Orders() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) => {
    const text = `
      ${order.id}
      ${order.customer}
      ${order.product}
      ${order.status}
    `.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#FBF7F8]">

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Topbar */}
      <Topbar setOpen={setSidebarOpen} />

      {/* Main */}
      <main className="min-h-screen pt-[74px] lg:ml-[285px]">

        <div className="px-5 py-8 sm:px-7 lg:px-8 xl:px-10">

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-1 text-sm font-medium text-[#a47768]">
              Store Management
            </p>

            <h1 className="font-serif text-[34px] font-bold leading-tight text-[#171515]">
              Orders
            </h1>

            <p className="mt-2 text-[15px] text-[#61708a]">
              Manage and track customer orders.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Total Orders"
              value="1,248"
              icon={Package}
              iconClass="bg-[#f6e9e5] text-[#93604f]"
            />

            <StatCard
              title="Pending"
              value="24"
              icon={Clock3}
              iconClass="bg-[#fff5e9] text-[#ff7100]"
            />

            <StatCard
              title="Shipped"
              value="38"
              icon={Truck}
              iconClass="bg-[#edf4ff] text-[#2f7df6]"
            />

            <StatCard
              title="Delivered"
              value="1,186"
              icon={CircleCheck}
              iconClass="bg-[#edfbf2] text-[#00a64f]"
            />

          </div>

          {/* Orders Card */}
          <div className="overflow-hidden rounded-2xl border border-[#eadfdc] bg-white">

            {/* Card Header */}
            <div className="flex flex-col gap-5 border-b border-[#eadfdc] px-6 py-5 md:flex-row md:items-center md:justify-between">

              <div>
                <h2 className="font-serif text-[24px] font-bold text-[#171515]">
                  Recent Orders
                </h2>

                <p className="mt-1 text-[14px] text-[#61708a]">
                  View and manage customer orders
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-[315px]">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91a0b5]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search orders..."
                  className="h-[52px] w-full rounded-xl border border-[#e5dcd9] bg-white pl-11 pr-4 text-sm outline-none placeholder:text-[#91a0b5] focus:border-[#b98b7d]"
                />
              </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1050px]">

                <thead>
                  <tr className="border-b border-[#eadfdc] bg-[#fffdfc]">

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Order
                    </th>

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Customer
                    </th>

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Product
                    </th>

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Amount
                    </th>

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Date
                    </th>

                    <th className="px-7 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Status
                    </th>

                    <th className="px-7 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#61708a]">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-[#eee7e4] last:border-b-0 hover:bg-[#fffafa]"
                      >

                        <td className="px-7 py-5">
                          <span className="text-sm font-semibold text-[#101010]">
                            {order.id}
                          </span>
                        </td>

                        <td className="px-7 py-5">
                          <span className="text-sm text-[#33415c]">
                            {order.customer}
                          </span>
                        </td>

                        <td className="px-7 py-5">
                          <span className="text-sm text-[#33415c]">
                            {order.product}
                          </span>
                        </td>

                        <td className="px-7 py-5">
                          <span className="text-sm font-semibold text-[#151515]">
                            {order.amount}
                          </span>
                        </td>

                        <td className="px-7 py-5">
                          <span className="text-sm text-[#61708a]">
                            {order.date}
                          </span>
                        </td>

                        <td className="px-7 py-5">
                          <StatusBadge status={order.status} />
                        </td>

                        <td className="px-7 py-5">
                          <div className="flex justify-end">

                            <button
                              type="button"
                              title="View Order"
                              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5dcd9] bg-white text-[#536176] transition hover:bg-[#faf3f0] hover:text-[#9b6658]"
                            >
                              <Eye size={19} />
                            </button>

                          </div>
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-12 text-center text-sm text-[#61708a]"
                      >
                        No orders found.
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

            {/* Footer */}
            <div className="flex flex-col gap-4 border-t border-[#eadfdc] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-sm text-[#61708a]">
                Showing 1–{filteredOrders.length} of {filteredOrders.length} orders
              </p>

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] bg-white text-[#9aa5b4]"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5dfdb] text-sm font-semibold text-[#9b6658]"
                >
                  1
                </button>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] bg-white text-[#536176]"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}