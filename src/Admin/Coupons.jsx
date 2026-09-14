import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  Tag,
  TicketPercent,
  CircleCheck,
  Clock3,
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const coupons = [
  {
    id: 1,
    code: "WELCOME10",
    description: "Welcome discount for new customers",
    discount: "10%",
    type: "Percentage",
    minOrder: "₹999",
    validity: "01 Sep 2026 - 30 Sep 2026",
    used: 128,
    limit: 500,
    status: "Active",
  },
  {
    id: 2,
    code: "GLOW20",
    description: "Flat discount on beauty products",
    discount: "20%",
    type: "Percentage",
    minOrder: "₹1,499",
    validity: "05 Sep 2026 - 25 Sep 2026",
    used: 84,
    limit: 300,
    status: "Active",
  },
  {
    id: 3,
    code: "NEWUSER500",
    description: "Special offer for new users",
    discount: "₹500",
    type: "Fixed",
    minOrder: "₹2,499",
    validity: "01 Sep 2026 - 20 Sep 2026",
    used: 61,
    limit: 200,
    status: "Active",
  },
  {
    id: 4,
    code: "BEAUTY15",
    description: "Discount on selected cosmetics",
    discount: "15%",
    type: "Percentage",
    minOrder: "₹1,299",
    validity: "01 Aug 2026 - 31 Aug 2026",
    used: 245,
    limit: 250,
    status: "Expired",
  },
  {
    id: 5,
    code: "FESTIVE25",
    description: "Festive season special offer",
    discount: "25%",
    type: "Percentage",
    minOrder: "₹1,999",
    validity: "15 Jul 2026 - 15 Aug 2026",
    used: 180,
    limit: 200,
    status: "Expired",
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
    name: "Coupons & Offers",
    path: "/admin/coupons",
    icon: Tag,
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
            type="button"
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        {/* Navigation */}
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

        {/* Admin */}
        <div className="border-t border-[#eadfdc] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-[#fbf7f8] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead1ca] font-serif font-bold text-[#8f5d4e]">
              BP
            </div>

            <div>
              <p className="text-sm font-semibold text-[#171515]">
                Bulbul Pachauri
              </p>

              <p className="text-xs text-[#8d99aa]">Administrator</p>
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
            <span className="font-medium text-[#9b6658]">
              Coupons & Offers
            </span>
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

export default function Coupons() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredCoupons = coupons.filter((coupon) => {
    const text = `${coupon.code} ${coupon.description} ${coupon.type}`;

    return text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#FBF7F8]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Topbar setOpen={setSidebarOpen} />

      <main className="pt-[72px] lg:pl-[255px]">
        <div className="p-5 sm:p-7 lg:p-10">

          {/* Heading */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-[14px] font-medium text-[#a47768]">
                Store Management
              </p>

              <h1 className="font-serif text-[34px] font-bold leading-tight text-[#171515]">
                Coupons & Offers
              </h1>

              <p className="mt-2 text-[15px] text-[#61708a]">
                Create and manage discount coupons and special offers.
              </p>
            </div>

            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#9b6658] px-5 text-sm font-semibold text-white transition hover:bg-[#875547]"
            >
              <Plus size={18} />
              Create Coupon
            </button>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Coupons"
              value="24"
              icon={TicketPercent}
              iconStyle="bg-[#f6e9e5] text-[#93604f]"
            />

            <StatCard
              title="Active Coupons"
              value="12"
              icon={CircleCheck}
              iconStyle="bg-[#edfbf2] text-[#00a64f]"
            />

            <StatCard
              title="Expired Coupons"
              value="8"
              icon={Clock3}
              iconStyle="bg-[#f1f3f5] text-[#697586]"
            />

            <StatCard
              title="Total Redemptions"
              value="1,248"
              icon={Tag}
              iconStyle="bg-[#edf4ff] text-[#2f7df6]"
            />
          </div>

          {/* Main Card */}
          <section className="overflow-hidden rounded-2xl border border-[#eadfdc] bg-white">

            {/* Header */}
            <div className="flex flex-col gap-5 border-b border-[#eadfdc] px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-[24px] font-bold text-[#171515]">
                  All Coupons
                </h2>

                <p className="mt-1 text-[14px] text-[#61708a]">
                  View and manage your discount coupons
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
                  placeholder="Search coupons..."
                  className="h-[52px] w-full rounded-xl border border-[#e5dcd9] bg-white pl-11 pr-4 text-sm text-[#33415c] outline-none placeholder:text-[#91a0b5] focus:border-[#b98b7d]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1150px]">
                <thead>
                  <tr className="border-b border-[#eadfdc] bg-[#fffdfc]">
                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Coupon
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Discount
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Min. Order
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Validity
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#61708a]">
                      Usage
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
                  {filteredCoupons.map((coupon) => (
                    <tr
                      key={coupon.id}
                      className="border-b border-[#eee7e4] last:border-0 hover:bg-[#fffafa]"
                    >
                      {/* Coupon */}
                      <td className="px-7 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6e9e5] text-[#9b6658]">
                            <Tag size={19} />
                          </div>

                          <div>
                            <p className="text-[14px] font-bold tracking-wide text-[#171515]">
                              {coupon.code}
                            </p>

                            <p className="mt-1 text-[12px] text-[#91a0b5]">
                              {coupon.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Discount */}
                      <td className="px-7 py-5">
                        <p className="text-[15px] font-bold text-[#171515]">
                          {coupon.discount}
                        </p>

                        <p className="mt-1 text-[12px] text-[#91a0b5]">
                          {coupon.type}
                        </p>
                      </td>

                      {/* Minimum Order */}
                      <td className="px-7 py-5">
                        <span className="text-[14px] font-semibold text-[#33415c]">
                          {coupon.minOrder}
                        </span>
                      </td>

                      {/* Validity */}
                      <td className="px-7 py-5">
                        <span className="text-[13px] text-[#61708a]">
                          {coupon.validity}
                        </span>
                      </td>

                      {/* Usage */}
                      <td className="px-7 py-5">
                        <div className="w-[120px]">
                          <div className="mb-1.5 flex justify-between text-[12px]">
                            <span className="font-semibold text-[#33415c]">
                              {coupon.used}
                            </span>

                            <span className="text-[#91a0b5]">
                              / {coupon.limit}
                            </span>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-[#eee8e5]">
                            <div
                              className="h-full rounded-full bg-[#b88979]"
                              style={{
                                width: `${Math.min(
                                  (coupon.used / coupon.limit) * 100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-7 py-5">
                        <span
                          className={`inline-flex rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                            coupon.status === "Active"
                              ? "bg-[#edfbf2] text-[#00a64f]"
                              : "bg-[#f1f3f5] text-[#697586]"
                          }`}
                        >
                          {coupon.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-7 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            title="Edit Coupon"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] bg-white text-[#61708a] transition hover:bg-[#faf3f0] hover:text-[#9b6658]"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            type="button"
                            title="Delete Coupon"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eadfdc] bg-white text-[#a06b67] transition hover:bg-[#fff1f1]"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredCoupons.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-16 text-center text-sm text-[#61708a]"
                      >
                        No coupons found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 border-t border-[#eadfdc] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[14px] text-[#61708a]">
                Showing 1–{filteredCoupons.length} of{" "}
                {filteredCoupons.length} coupons
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