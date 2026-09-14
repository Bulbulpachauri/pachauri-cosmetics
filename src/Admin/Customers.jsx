import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Eye,
  UserCheck,
  UserPlus,
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

const customers = [
  {
    id: "#CUS1001",
    name: "Ananya Sharma",
    email: "ananya@gmail.com",
    phone: "+91 98765 43210",
    orders: 12,
    spent: "₹8,499",
    joined: "10 Aug 2026",
    status: "Active",
  },
  {
    id: "#CUS1002",
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 98765 12345",
    orders: 8,
    spent: "₹5,799",
    joined: "08 Aug 2026",
    status: "Active",
  },
  {
    id: "#CUS1003",
    name: "Neha Verma",
    email: "neha@gmail.com",
    phone: "+91 91234 56789",
    orders: 6,
    spent: "₹4,299",
    joined: "05 Aug 2026",
    status: "Active",
  },
  {
    id: "#CUS1004",
    name: "Riya Gupta",
    email: "riya@gmail.com",
    phone: "+91 99887 66554",
    orders: 4,
    spent: "₹2,899",
    joined: "01 Aug 2026",
    status: "Inactive",
  },
  {
    id: "#CUS1005",
    name: "Simran Kapoor",
    email: "simran@gmail.com",
    phone: "+91 98761 23456",
    orders: 10,
    spent: "₹7,249",
    joined: "28 Jul 2026",
    status: "Active",
  },
];

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: Users,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[255px] flex-col border-r border-[#eadfdc] bg-white transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[82px] items-center justify-between border-b border-[#eadfdc] px-6">
          <NavLink to="/admin" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute left-[5px] top-[9px] h-5 w-3 rotate-[-28deg] rounded-full bg-[#9c6c5d]" />
              <div className="absolute left-[17px] top-[6px] h-6 w-3 rotate-[25deg] rounded-full bg-[#c28d7d]" />
              <div className="absolute left-[10px] top-[18px] h-[2px] w-5 rotate-[-8deg] bg-[#9c6c5d]" />
            </div>

            <div>
              <h1 className="font-serif text-[20px] font-bold text-[#171515]">
                Pachauri
              </h1>

              <p className="text-[11px] tracking-[2px] text-[#9c6c5d]">
                COSMETICS
              </p>
            </div>
          </NavLink>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
            type="button"
          >
            <X size={21} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#9aa5b4]">
            Store Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium transition ${
                      isActive
                        ? "bg-[#f6e9e5] text-[#966252]"
                        : "text-[#61708a] hover:bg-[#fbf7f8] hover:text-[#966252]"
                    }`
                  }
                >
                  <Icon size={19} strokeWidth={1.9} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Admin Profile */}
        <div className="border-t border-[#eadfdc] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-[#fbf7f8] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead1ca] font-serif font-bold text-[#8f5d4e]">
              BP
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#171515]">
                Bulbul Pachauri
              </p>

              <p className="truncate text-xs text-[#8d99aa]">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function Topbar({ setOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-[72px] border-b border-[#eadfdc] bg-white lg:left-[255px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eadfdc] text-[#61708a] lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="hidden text-sm text-[#61708a] sm:block">
            Admin Panel
            <span className="mx-2 text-[#c7b7b2]">/</span>
            <span className="font-medium text-[#9b6658]">Customers</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#61708a] hover:bg-[#fbf7f8]"
          >
            <Bell size={19} />

            <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full bg-[#b76d61]" />
          </button>

          <div className="hidden h-8 w-px bg-[#eadfdc] sm:block" />

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ead1ca] text-xs font-bold text-[#8f5d4e]">
              BP
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-[#171515]">
                Bulbul Pachauri
              </p>
              <p className="text-[11px] text-[#8d99aa]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, icon: Icon, iconStyle }) {
  return (
    <div className="rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] text-[#61708a]">{title}</p>

          <h2 className="mt-2 font-serif text-[30px] font-bold text-[#171515]">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconStyle}`}
        >
          <Icon size={25} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

export default function Customers() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredCustomers = customers.filter((customer) => {
    const searchText = `${customer.name} ${customer.email} ${customer.phone} ${customer.id}`;

    return searchText.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#FBF7F8]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Topbar setOpen={setSidebarOpen} />

      <main className="pt-[72px] lg:pl-[255px]">
        <div className="p-5 sm:p-7 lg:p-10">

          {/* Page Heading */}
          <div className="mb-8">
            <p className="mb-1 text-[14px] font-medium text-[#a47768]">
              Store Management
            </p>

            <h1 className="font-serif text-[34px] font-bold leading-tight text-[#171515]">
              Customers
            </h1>

            <p className="mt-2 text-[15px] text-[#61708a]">
              Manage and view your customer information.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Customers"
              value="2,486"
              icon={UserRound}
              iconStyle="bg-[#f6e9e5] text-[#93604f]"
            />

            <StatCard
              title="Active Customers"
              value="2,241"
              icon={UserCheck}
              iconStyle="bg-[#edfbf2] text-[#00a64f]"
            />

            <StatCard
              title="New Customers"
              value="186"
              icon={UserPlus}
              iconStyle="bg-[#edf4ff] text-[#2f7df6]"
            />

            <StatCard
              title="Total Orders"
              value="1,248"
              icon={ShoppingBag}
              iconStyle="bg-[#fff5e9] text-[#ff7100]"
            />
          </div>

          {/* Customers Table */}
          <section className="overflow-hidden rounded-2xl border border-[#eadfdc] bg-white">

            {/* Table Header */}
            <div className="flex flex-col gap-5 border-b border-[#eadfdc] px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-[24px] font-bold text-[#171515]">
                  All Customers
                </h2>

                <p className="mt-1 text-[14px] text-[#61708a]">
                  View and manage customer accounts
                </p>
              </div>

              <div className="relative w-full md:w-[315px]">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91a0b5]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customers..."
                  className="h-[52px] w-full rounded-xl border border-[#e5dcd9] bg-white pl-11 pr-4 text-sm text-[#33415c] outline-none placeholder:text-[#91a0b5] focus:border-[#b98b7d]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px]">
                <thead>
                  <tr className="border-b border-[#eadfdc] bg-[#fffdfc]">
                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Customer
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Contact
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Orders
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Total Spent
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Joined
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Status
                    </th>

                    <th className="px-7 py-4 text-right text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCustomers.map((customer) => {
                    const initials = customer.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("");

                    return (
                      <tr
                        key={customer.id}
                        className="border-b border-[#eee7e4] last:border-0 hover:bg-[#fffafa]"
                      >
                        {/* Customer */}
                        <td className="px-7 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4dddd] text-[13px] font-semibold text-[#a12a4b]">
                              {initials}
                            </div>

                            <div>
                              <p className="text-[14px] font-semibold text-[#171515]">
                                {customer.name}
                              </p>

                              <p className="mt-0.5 text-[12px] text-[#91a0b5]">
                                {customer.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Contact */}
                        <td className="px-7 py-5">
                          <p className="text-[14px] text-[#33415c]">
                            {customer.email}
                          </p>

                          <p className="mt-1 text-[12px] text-[#61708a]">
                            {customer.phone}
                          </p>
                        </td>

                        {/* Orders */}
                        <td className="px-7 py-5">
                          <span className="text-[14px] font-semibold text-[#171515]">
                            {customer.orders}
                          </span>
                        </td>

                        {/* Total Spent */}
                        <td className="px-7 py-5">
                          <span className="text-[14px] font-semibold text-[#171515]">
                            {customer.spent}
                          </span>
                        </td>

                        {/* Joined */}
                        <td className="px-7 py-5">
                          <span className="text-[14px] text-[#61708a]">
                            {customer.joined}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-7 py-5">
                          <span
                            className={`inline-flex rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                              customer.status === "Active"
                                ? "bg-[#edfbf2] text-[#00a64f]"
                                : "bg-[#f1f3f5] text-[#697586]"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>

                        {/* Action */}
                        <td className="px-7 py-5">
                          <div className="flex justify-end">
                            <button
                              type="button"
                              title="View Customer"
                              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5dcd9] bg-white text-[#536176] transition hover:bg-[#faf3f0] hover:text-[#9b6658]"
                            >
                              <Eye size={19} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {filteredCustomers.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-16 text-center text-sm text-[#61708a]"
                      >
                        No customers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 border-t border-[#eadfdc] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[14px] text-[#61708a]">
                Showing 1–{filteredCustomers.length} of{" "}
                {filteredCustomers.length} customers
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5dfdb] text-[14px] font-semibold text-[#9b6658]"
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
          </section>
        </div>
      </main>
    </div>
  );
}