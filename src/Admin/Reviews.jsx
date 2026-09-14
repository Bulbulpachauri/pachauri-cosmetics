import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tag,
  BarChart3,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  Star,
  CheckCircle,
  Clock,
  MessageSquare,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    customer: "Ananya Sharma",
    product: "Dew Drop Vitamin C Serum",
    rating: 5,
    review:
      "Amazing serum! My skin feels brighter and much smoother after using it.",
    date: "10 Sep 2026",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Priya Singh",
    product: "Cloud Cream Barrier Moisturiser",
    rating: 5,
    review:
      "Very lightweight and hydrating. Perfect for my daily skincare routine.",
    date: "08 Sep 2026",
    status: "Approved",
  },
  {
    id: 3,
    customer: "Neha Verma",
    product: "Glow Repair Hair Oil",
    rating: 4,
    review:
      "The fragrance is lovely and my hair feels softer after a few uses.",
    date: "06 Sep 2026",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Riya Gupta",
    product: "Petal Glow Cream",
    rating: 3,
    review:
      "The product is good but I expected slightly more hydration.",
    date: "04 Sep 2026",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Simran Kapoor",
    product: "Lipstick",
    rating: 5,
    review:
      "Beautiful shade and comfortable to wear. Definitely buying again.",
    date: "02 Sep 2026",
    status: "Approved",
  },
];

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Products", path: "/admin/products", icon: Package },
  { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", path: "/admin/customers", icon: Users },
  { name: "Coupons & Offers", path: "/admin/coupons", icon: Tag },
  { name: "Reviews", path: "/admin/reviews", icon: MessageSquare },
  { name: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", path: "/admin/settings", icon: Settings },
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
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium ${
                      isActive
                        ? "bg-[#f6e9e5] text-[#966252]"
                        : "text-[#61708a] hover:bg-[#fbf7f8]"
                    }`
                  }
                >
                  <Icon size={19} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-[#eadfdc] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-[#fbf7f8] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead1ca] font-bold text-[#8f5d4e]">
              BP
            </div>

            <div>
              <p className="text-sm font-semibold">Bulbul Pachauri</p>
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
      <div className="flex h-full items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eadfdc] lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="hidden text-sm text-[#61708a] sm:block">
            Admin Panel
            <span className="mx-2">/</span>
            <span className="font-medium text-[#9b6658]">Reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={19} className="text-[#61708a]" />

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ead1ca] text-xs font-bold text-[#8f5d4e]">
              BP
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold">Bulbul Pachauri</p>
              <p className="text-[11px] text-[#8d99aa]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, icon: Icon, style }) {
  return (
    <div className="rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] text-[#61708a]">{title}</p>
          <h2 className="mt-2 font-serif text-[30px] font-bold">
            {value}
          </h2>
        </div>

        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${style}`}>
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={15}
          fill={star <= rating ? "#e7a64a" : "none"}
          className={star <= rating ? "text-[#e7a64a]" : "text-[#c9c9c9]"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredReviews = reviews.filter((item) =>
    `${item.customer} ${item.product} ${item.review}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FBF7F8]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Topbar setOpen={setSidebarOpen} />

      <main className="pt-[72px] lg:pl-[255px]">
        <div className="p-5 sm:p-7 lg:p-10">

          <div className="mb-8">
            <p className="mb-1 text-[14px] font-medium text-[#a47768]">
              Store Management
            </p>

            <h1 className="font-serif text-[34px] font-bold">
              Reviews
            </h1>

            <p className="mt-2 text-[15px] text-[#61708a]">
              Manage and moderate customer reviews.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Reviews"
              value="1,284"
              icon={MessageSquare}
              style="bg-[#f6e9e5] text-[#93604f]"
            />

            <StatCard
              title="Average Rating"
              value="4.7"
              icon={Star}
              style="bg-[#fff5e9] text-[#e7a64a]"
            />

            <StatCard
              title="Approved"
              value="1,198"
              icon={CheckCircle}
              style="bg-[#edfbf2] text-[#00a64f]"
            />

            <StatCard
              title="Pending"
              value="86"
              icon={Clock}
              style="bg-[#edf4ff] text-[#2f7df6]"
            />
          </div>

          <section className="overflow-hidden rounded-2xl border border-[#eadfdc] bg-white">

            <div className="flex flex-col gap-5 border-b border-[#eadfdc] px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-[24px] font-bold">
                  Customer Reviews
                </h2>

                <p className="mt-1 text-[14px] text-[#61708a]">
                  Review, approve and manage customer feedback
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
                  placeholder="Search reviews..."
                  className="h-[52px] w-full rounded-xl border border-[#e5dcd9] pl-11 pr-4 text-sm outline-none focus:border-[#b98b7d]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="border-b border-[#eadfdc] bg-[#fffdfc]">
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Customer
                    </th>
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Product
                    </th>
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Rating
                    </th>
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Review
                    </th>
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Date
                    </th>
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Status
                    </th>
                    <th className="px-7 py-4 text-right text-[12px] uppercase text-[#61708a]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReviews.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#eee7e4] last:border-0 hover:bg-[#fffafa]"
                    >
                      <td className="px-7 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4dddd] text-sm font-semibold text-[#a12a4b]">
                            {item.customer
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              {item.customer}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-7 py-5">
                        <p className="max-w-[190px] text-sm font-medium text-[#33415c]">
                          {item.product}
                        </p>
                      </td>

                      <td className="px-7 py-5">
                        <Stars rating={item.rating} />
                      </td>

                      <td className="px-7 py-5">
                        <p className="max-w-[300px] text-sm leading-6 text-[#61708a]">
                          {item.review}
                        </p>
                      </td>

                      <td className="px-7 py-5 text-sm text-[#61708a]">
                        {item.date}
                      </td>

                      <td className="px-7 py-5">
                        <span
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                            item.status === "Approved"
                              ? "bg-[#edfbf2] text-[#00a64f]"
                              : "bg-[#fff5e9] text-[#d98200]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-7 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] text-[#536176] hover:bg-[#faf3f0]"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eadfdc] text-[#a06b67] hover:bg-[#fff1f1]"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-[#eadfdc] px-6 py-4">
              <p className="text-sm text-[#61708a]">
                Showing 1–{filteredReviews.length} of 1,284 reviews
              </p>

              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9]">
                  <ChevronLeft size={18} />
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5dfdb] text-sm font-semibold text-[#9b6658]">
                  1
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9]">
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