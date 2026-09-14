import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./Admin/AdminDashboard";
import Products from "./Admin/Products";
import AdminOrders from "./Admin/Orders";
import AdminCustomers from "./Admin/Customers";
import Reviews from "./Admin/Reviews";
import Blogs from "./Admin/Blogs";
import AdminAnalytics from "./Admin/Analytics";
import AdminSettings from "./Admin/Settings";
import Coupons from "./Admin/Coupons";
import AdminLogin from "./Admin/AdminLogin";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/shop" element={<Layout><Shop /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
      <Route path="/cart" element={<Layout><Cart /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/blog/:id" element={<Layout><Blog /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/account" element={<Layout><Account /></Layout>} />
      <Route path="/account/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/account/orders" element={<Layout><Orders /></Layout>} />
      <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/customers" element={<AdminCustomers />} />
      <Route path="/admin/coupons" element={<Coupons />} />
      <Route path="/admin/reviews" element={<Reviews />} />
      <Route path="/admin/blogs" element={<Blogs />} />
      <Route path="/admin/analytics" element={<AdminAnalytics />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}
