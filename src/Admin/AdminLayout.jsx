import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Leaf,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

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
    icon: ShoppingBag,
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

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#FBF7F8] text-[#292321]">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#eee2df] bg-white lg:block">

        {/* Logo */}
        <div className="border-b border-[#eee2df] px-7 py-7">
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5e5e2] text-[#9b6658]">
              <Leaf size={22} />
            </div>

            <div>
              <h1 className="font-serif text-xl font-bold">
                Pachauri
              </h1>

              <p className="text-[11px] uppercase tracking-[0.25em] text-[#9b6658]">
                Cosmetics
              </p>
            </div>

          </div>
        </div>

        {/* Menu */}
        <nav className="px-4 py-7">

          <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-[#f6e5e2] font-semibold text-[#9b6658]"
                        : "text-gray-600 hover:bg-[#faf5f3]"
                    }`
                  }
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

          </div>

        </nav>

        {/* Bottom Card */}
        <div className="absolute bottom-6 left-4 right-4">

          <div className="rounded-2xl border border-[#eadbd7] bg-[#fcf5f3] p-4">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9b6658]">
              <Leaf size={18} />
            </div>

            <p className="font-serif text-base font-bold">
              Beauty Today
            </p>

            <p className="font-serif text-base font-bold text-[#9b6658]">
              Brighter Tomorrow
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Manage your store and grow your business.
            </p>

          </div>

        </div>

      </aside>

      {/* Main Area */}
      <div className="lg:ml-64">

        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[#eee2df] bg-white/95 px-5 backdrop-blur sm:px-8">

          {/* Search */}
          <div className="relative hidden w-full max-w-lg md:block">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search anything..."
              className="w-full rounded-xl border border-[#eadfdb] bg-[#fdfafa] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#c49a8d]"
            />

          </div>

          {/* Right */}
          <div className="ml-auto flex items-center gap-4">

            {/* Notification */}
            <button className="relative rounded-xl p-2.5 text-gray-600 hover:bg-[#faf5f3]">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#d96b7b]" />
            </button>

            {/* Admin */}
            <div className="flex items-center gap-3 border-l border-[#eee2df] pl-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3dede] text-sm font-bold text-[#9b6658]">
                BP
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">
                  Admin
                </p>

                <p className="text-xs text-gray-500">
                  Store Manager
                </p>
              </div>

              <ChevronDown
                size={17}
                className="hidden text-gray-400 sm:block"
              />

            </div>

          </div>

        </header>

        {/* Page Content */}
        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}