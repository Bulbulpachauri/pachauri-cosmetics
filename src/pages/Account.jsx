import { Link } from "react-router-dom";
import { User, Package, Heart, LogOut } from "lucide-react";

const LINKS = [
  { to: "/account/profile", icon: User, title: "Profile", desc: "Manage your name, email and password." },
  { to: "/account/orders", icon: Package, title: "Orders", desc: "Track and review your past orders." },
  { to: "/wishlist", icon: Heart, title: "Wishlist", desc: "Products you've saved for later." },
];

export default function Account() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
      <p className="eyebrow">My Account</p>
      <h1 className="section-title mt-2 !text-3xl">Welcome back</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {LINKS.map(({ to, icon: Icon, title, desc }) => (
          <Link key={title} to={to} className="card p-6 transition-transform hover:translate-y-0.5">
            <Icon size={20} className="text-rose" strokeWidth={1.5} />
            <h3 className="mt-3 font-display text-lg text-ink">{title}</h3>
            <p className="mt-1 text-sm text-muted">{desc}</p>
          </Link>
        ))}
      </div>

      <button className="btn-outline mt-10"><LogOut size={15} /> Sign Out</button>
      <p className="mt-3 font-body text-xs text-muted">Demo UI — account and order data are not connected yet.</p>
    </section>
  );
}
