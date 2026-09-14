import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tag,
  MessageSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  Plus,
  Pencil,
  Trash2,
  Eye,
  FileText,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "5 Skincare Tips for Healthy Glowing Skin",
    category: "Skincare",
    author: "Pachauri Cosmetics",
    date: "10 Sep 2026",
    views: 1248,
    status: "Published",
  },
  {
    id: 2,
    title: "How to Choose the Right Moisturiser",
    category: "Skincare",
    author: "Pachauri Cosmetics",
    date: "06 Sep 2026",
    views: 986,
    status: "Published",
  },
  {
    id: 3,
    title: "Vitamin C Serum: Benefits for Your Skin",
    category: "Beauty",
    author: "Pachauri Cosmetics",
    date: "02 Sep 2026",
    views: 754,
    status: "Published",
  },
  {
    id: 4,
    title: "Everyday Makeup Essentials",
    category: "Makeup",
    author: "Pachauri Cosmetics",
    date: "28 Aug 2026",
    views: 632,
    status: "Draft",
  },
  {
    id: 5,
    title: "Simple Night Skincare Routine",
    category: "Skincare",
    author: "Pachauri Cosmetics",
    date: "22 Aug 2026",
    views: 521,
    status: "Draft",
  },
];

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Products", path: "/admin/products", icon: Package },
  { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", path: "/admin/customers", icon: Users },
  { name: "Coupons & Offers", path: "/admin/coupons", icon: Tag },
  { name: "Reviews", path: "/admin/reviews", icon: MessageSquare },
  { name: "Blogs", path: "/admin/blogs", icon: FileText },
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
              <h1 className="font-serif text-[20px] font-bold">
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
            <span className="font-medium text-[#9b6658]">Blogs</span>
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

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredBlogs = blogs.filter((blog) =>
    `${blog.title} ${blog.category} ${blog.author}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
                Content Management
              </p>

              <h1 className="font-serif text-[34px] font-bold">
                Blogs
              </h1>

              <p className="mt-2 text-[15px] text-[#61708a]">
                Create and manage beauty and skincare blog posts.
              </p>
            </div>

            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#9b6658] px-5 text-sm font-semibold text-white hover:bg-[#875547]"
            >
              <Plus size={18} />
              Add New Blog
            </button>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
              <p className="text-[14px] text-[#61708a]">Total Blogs</p>
              <h2 className="mt-2 font-serif text-[30px] font-bold">24</h2>
            </div>

            <div className="rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
              <p className="text-[14px] text-[#61708a]">Published</p>
              <h2 className="mt-2 font-serif text-[30px] font-bold text-[#00a64f]">
                18
              </h2>
            </div>

            <div className="rounded-2xl border border-[#eadfdc] bg-white px-6 py-5">
              <p className="text-[14px] text-[#61708a]">Drafts</p>
              <h2 className="mt-2 font-serif text-[30px] font-bold text-[#9b6658]">
                6
              </h2>
            </div>
          </div>

          {/* Blog Table */}
          <section className="overflow-hidden rounded-2xl border border-[#eadfdc] bg-white">

            <div className="flex flex-col gap-5 border-b border-[#eadfdc] px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-[24px] font-bold">
                  All Blog Posts
                </h2>

                <p className="mt-1 text-[14px] text-[#61708a]">
                  Manage your website content
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
                  placeholder="Search blogs..."
                  className="h-[52px] w-full rounded-xl border border-[#e5dcd9] pl-11 pr-4 text-sm outline-none focus:border-[#b98b7d]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px]">
                <thead>
                  <tr className="border-b border-[#eadfdc] bg-[#fffdfc]">
                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Blog Post
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Category
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Author
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Published
                    </th>

                    <th className="px-7 py-4 text-left text-[12px] uppercase text-[#61708a]">
                      Views
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
                  {filteredBlogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-[#eee7e4] last:border-0 hover:bg-[#fffafa]"
                    >
                      <td className="px-7 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6e9e5] text-[#9b6658]">
                            <FileText size={19} />
                          </div>

                          <div>
                            <p className="max-w-[300px] text-sm font-semibold text-[#171515]">
                              {blog.title}
                            </p>

                            <p className="mt-1 text-xs text-[#91a0b5]">
                              Blog #{blog.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-7 py-5">
                        <span className="rounded-full bg-[#f6e9e5] px-3 py-1.5 text-xs font-medium text-[#966252]">
                          {blog.category}
                        </span>
                      </td>

                      <td className="px-7 py-5 text-sm text-[#61708a]">
                        {blog.author}
                      </td>

                      <td className="px-7 py-5 text-sm text-[#61708a]">
                        {blog.date}
                      </td>

                      <td className="px-7 py-5 text-sm font-semibold text-[#33415c]">
                        {blog.views.toLocaleString()}
                      </td>

                      <td className="px-7 py-5">
                        <span
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                            blog.status === "Published"
                              ? "bg-[#edfbf2] text-[#00a64f]"
                              : "bg-[#fff5e9] text-[#d98200]"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>

                      <td className="px-7 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            title="View"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] text-[#536176] hover:bg-[#faf3f0]"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            type="button"
                            title="Edit"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5dcd9] text-[#536176] hover:bg-[#faf3f0]"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            type="button"
                            title="Delete"
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
          </section>
        </div>
      </main>
    </div>
  );
}