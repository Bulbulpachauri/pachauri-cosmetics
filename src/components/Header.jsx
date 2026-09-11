import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count } = useCart();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  }

  const linkClass = ({ isActive }) =>
    `font-body text-[13px] tracking-wide transition-colors ${
      isActive ? "text-rose" : "text-ink/70 hover:text-rose"
    }`;

  return (
    <>
      <div className="bg-ink py-2 text-center font-body text-[11px] tracking-widest2 uppercase text-white/80">
        Complimentary shipping on orders over $75
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="font-display text-2xl tracking-[0.15em] text-ink">
            PACHAURI COSMETICS
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <form onSubmit={handleSearch} className="flex items-center gap-2 border-b border-ink/20 pb-1">
              <Search size={15} className="text-ink/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="w-36 bg-transparent font-body text-sm outline-none placeholder:text-ink/40"
              />
            </form>
            <Link to="/account" aria-label="Account" className="text-ink/70 hover:text-rose"><User size={19} /></Link>
            <Link to="/wishlist" aria-label="Wishlist" className="text-ink/70 hover:text-rose"><Heart size={19} /></Link>
            <Link to="/cart" aria-label="Cart" className="relative text-ink/70 hover:text-rose">
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose text-[10px] text-white">
                  {count}
                </span>
              )}
            </Link>
          </div>

          <button className="p-2 lg:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line bg-cream px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <NavLink key={item.label} to={item.to} className={linkClass} end={item.to === "/"} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5 flex items-center gap-5 border-t border-line pt-5">
              <Link to="/account" onClick={() => setOpen(false)} className="text-ink/70"><User size={19} /></Link>
              <Link to="/wishlist" onClick={() => setOpen(false)} className="text-ink/70"><Heart size={19} /></Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="text-ink/70"><ShoppingBag size={19} /></Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
