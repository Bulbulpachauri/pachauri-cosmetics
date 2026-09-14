import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Users,
    BarChart3,
    Settings,
    Search,
    Plus,
    Pencil,
    Trash2,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Vitamin C Face Serum",
        category: "Skin Care",
        price: 699,
        stock: 45,
        status: "Active",
        image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80",
    },
    {
        id: 2,
        name: "Matte Lipstick",
        category: "Makeup",
        price: 499,
        stock: 28,
        status: "Active",
        image:
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&q=80",
    },
    {
        id: 3,
        name: "Hydrating Face Cream",
        category: "Skin Care",
        price: 599,
        stock: 12,
        status: "Active",
        image:
            "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80",
    },
    {
        id: 4,
        name: "Rose Body Lotion",
        category: "Body Care",
        price: 449,
        stock: 0,
        status: "Out of Stock",
        image:
            "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200&q=80",
    },
    {
        id: 5,
        name: "Glow Face Wash",
        category: "Skin Care",
        price: 349,
        stock: 32,
        status: "Active",
        image:
            "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&q=80",
    },
];

export default function Products() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#FBF7F8] text-[#292321]">

            {/* Mobile Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#eee5e1] bg-white px-5 py-4 lg:hidden">
                <div>
                    <h1 className="font-serif text-xl font-bold">
                        Pachauri Cosmetics
                    </h1>
                    <p className="text-xs text-gray-500">Admin Panel</p>
                </div>

                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="rounded-lg border border-gray-200 p-2"
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div className="flex">

                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-[#eee5e1] bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex h-full flex-col">

                        {/* Logo */}
                        <div className="border-b border-[#eee5e1] px-6 py-6">
                            <h1 className="font-serif text-2xl font-bold">
                                Pachauri
                            </h1>

                            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#a47768]">
                                Cosmetics
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 space-y-1 px-4 py-6">

                            <Link
                                to="/admin"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-[#FDECEF]"
                            >
                                <LayoutDashboard size={19} />
                                Dashboard
                            </Link>

                            <Link
                                to="/admin/products"
                                className="flex items-center gap-3 rounded-xl bg-[#FDECEF] px-4 py-3 text-sm font-semibold text-[#EA587E]"
                            >
                                <Package size={19} />
                                Products
                            </Link>

                            <Link
                                to="/admin/orders"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-[#FDECEF]"
                            >
                                <ShoppingBag size={19} />
                                Orders
                            </Link>

                            <Link
                                to="/admin/customers"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-[#FDECEF]"
                            >
                                <Users size={19} />
                                Customers
                            </Link>

                            <Link
                                to="/admin/analytics"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-[#FDECEF]"
                            >
                                <BarChart3 size={19} />
                                Analytics
                            </Link>

                            <Link
                                to="/admin/settings"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-[#FDECEF]"
                            >
                                <Settings size={19} />
                                Settings
                            </Link>

                        </nav>

                        {/* Admin Profile */}
                        <div className="border-t border-[#eee5e1] p-4">
                            <div className="flex items-center gap-3 rounded-xl bg-[#faf6f4] p-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8b8aa] font-semibold text-white">
                                    BP
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">
                                        Admin
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Store Manager
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </aside>

                {/* Main Content */}
                <main className="min-w-0 flex-1">

                    <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">

                        {/* Top Heading */}
                        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                            <div>
                                <p className="mb-2 text-sm font-medium text-[#a47768]">
                                    Store Management
                                </p>

                                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                                    Products
                                </h2>

                                <p className="mt-2 text-sm text-gray-500">
                                    Manage your cosmetics collection and inventory.
                                </p>
                            </div>

                            <button className="flex w-fit items-center gap-2 rounded-xl bg-[#292321] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#443a36]">
                                <Plus size={18} />
                                Add Product
                            </button>

                        </div>

                        {/* Stats */}
                        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                            <div className="rounded-2xl border border-[#eee5e1] bg-white p-5">
                                <p className="text-sm text-gray-500">
                                    Total Products
                                </p>

                                <div className="mt-3 flex items-end justify-between">
                                    <h3 className="font-serif text-3xl font-bold">
                                        128
                                    </h3>

                                    <span className="rounded-full bg-[#f5e9e4] px-3 py-1 text-xs font-semibold text-[#8d5d4d]">
                                        Products
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#eee5e1] bg-white p-5">
                                <p className="text-sm text-gray-500">
                                    Active Products
                                </p>

                                <div className="mt-3 flex items-end justify-between">
                                    <h3 className="font-serif text-3xl font-bold">
                                        116
                                    </h3>

                                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                        90.6%
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#eee5e1] bg-white p-5">
                                <p className="text-sm text-gray-500">
                                    Low Stock
                                </p>

                                <div className="mt-3 flex items-end justify-between">
                                    <h3 className="font-serif text-3xl font-bold">
                                        12
                                    </h3>

                                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                                        Attention
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#eee5e1] bg-white p-5">
                                <p className="text-sm text-gray-500">
                                    Out of Stock
                                </p>

                                <div className="mt-3 flex items-end justify-between">
                                    <h3 className="font-serif text-3xl font-bold">
                                        4
                                    </h3>

                                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                                        Restock
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Filters */}
                        <div className="mb-5 rounded-2xl border border-[#eee5e1] bg-white p-4">

                            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                                {/* Search */}
                                <div className="relative w-full md:max-w-md">

                                    <Search
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search products..."
                                        className="w-full rounded-xl border border-[#e8dfdb] bg-[#fcfaf9] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#b58b7c]"
                                    />

                                </div>

                                {/* Category */}
                                <div className="relative">

                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full appearance-none rounded-xl border border-[#e8dfdb] bg-[#fcfaf9] px-4 py-3 pr-10 text-sm outline-none md:w-48"
                                    >
                                        <option value="All">All Categories</option>
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Makeup">Makeup</option>
                                        <option value="Body Care">Body Care</option>
                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Products */}
                        <div className="overflow-hidden rounded-2xl border border-[#eee5e1] bg-white">

                            {/* Table Header */}
                            <div className="flex items-center justify-between border-b border-[#eee5e1] px-5 py-5 sm:px-6">

                                <div>
                                    <h3 className="font-serif text-xl font-bold">
                                        All Products
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {filteredProducts.length} products shown
                                    </p>
                                </div>

                                <button className="hidden rounded-lg border border-[#e8dfdb] px-4 py-2 text-sm text-gray-600 hover:bg-[#faf6f4] sm:block">
                                    Export
                                </button>

                            </div>

                            {/* Desktop Table */}
                            <div className="hidden overflow-x-auto md:block">

                                <table className="w-full">

                                    <thead className="bg-[#fcfaf9]">
                                        <tr className="border-b border-[#eee5e1]">

                                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Product
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Category
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Price
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Stock
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Status
                                            </th>

                                            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {filteredProducts.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="border-b border-[#f0e9e6] last:border-0 hover:bg-[#fdfbf9]"
                                            >

                                                {/* Product */}
                                                <td className="px-6 py-4">

                                                    <div className="flex items-center gap-4">

                                                        <div className="h-14 w-14 overflow-hidden rounded-xl bg-[#f6f1ef]">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>

                                                        <div>
                                                            <p className="font-semibold text-gray-900">
                                                                {product.name}
                                                            </p>

                                                            <p className="mt-1 text-xs text-gray-400">
                                                                SKU-PC-{String(product.id).padStart(3, "0")}
                                                            </p>
                                                        </div>

                                                    </div>

                                                </td>

                                                {/* Category */}
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-gray-600">
                                                        {product.category}
                                                    </span>
                                                </td>

                                                {/* Price */}
                                                <td className="px-6 py-4">
                                                    <span className="text-sm font-semibold">
                                                        ₹{product.price}
                                                    </span>
                                                </td>

                                                {/* Stock */}
                                                <td className="px-6 py-4">

                                                    <div className="flex items-center gap-2">

                                                        <span
                                                            className={`h-2 w-2 rounded-full ${product.stock === 0
                                                                    ? "bg-red-500"
                                                                    : product.stock < 15
                                                                        ? "bg-orange-500"
                                                                        : "bg-green-500"
                                                                }`}
                                                        />

                                                        <span className="text-sm text-gray-600">
                                                            {product.stock} units
                                                        </span>

                                                    </div>

                                                </td>

                                                {/* Status */}
                                                <td className="px-6 py-4">

                                                    <span
                                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${product.status === "Active"
                                                                ? "bg-green-50 text-green-700"
                                                                : "bg-red-50 text-red-600"
                                                            }`}
                                                    >
                                                        {product.status}
                                                    </span>

                                                </td>

                                                {/* Actions */}
                                                <td className="px-6 py-4">

                                                    <div className="flex justify-end gap-2">

                                                        <button
                                                            title="Edit Product"
                                                            className="rounded-lg border border-[#e8dfdb] p-2.5 text-gray-600 transition hover:bg-[#f5e9e4] hover:text-[#8d5d4d]"
                                                        >
                                                            <Pencil size={16} />
                                                        </button>

                                                        <button
                                                            title="Delete Product"
                                                            className="rounded-lg border border-red-100 p-2.5 text-red-500 transition hover:bg-red-50"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                            {/* Mobile Cards */}
                            <div className="divide-y divide-[#eee5e1] md:hidden">

                                {filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="p-5"
                                    >

                                        <div className="flex gap-4">

                                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f6f1ef]">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">

                                                <div className="flex items-start justify-between gap-3">

                                                    <div>
                                                        <h4 className="font-semibold">
                                                            {product.name}
                                                        </h4>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {product.category}
                                                        </p>
                                                    </div>

                                                    <span
                                                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${product.status === "Active"
                                                                ? "bg-green-50 text-green-700"
                                                                : "bg-red-50 text-red-600"
                                                            }`}
                                                    >
                                                        {product.status}
                                                    </span>

                                                </div>

                                                <div className="mt-4 flex items-center justify-between">

                                                    <div>
                                                        <p className="text-sm font-bold">
                                                            ₹{product.price}
                                                        </p>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {product.stock} units in stock
                                                        </p>
                                                    </div>

                                                    <div className="flex gap-2">

                                                        <button className="rounded-lg border border-[#e8dfdb] p-2">
                                                            <Pencil size={15} />
                                                        </button>

                                                        <button className="rounded-lg border border-red-100 p-2 text-red-500">
                                                            <Trash2 size={15} />
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-gray-400 sm:flex-row">
                            <p>© 2026 Pachauri Cosmetics Admin</p>
                            <p>Manage your store with ease.</p>
                        </div>

                    </div>

                </main>

            </div>
        </div>
    );
}