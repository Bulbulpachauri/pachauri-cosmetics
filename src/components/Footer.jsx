import { Link } from "react-router-dom";
import { Camera, Share2, PlayCircle, Mail } from "lucide-react";
import { BRAND } from "../data/mock";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="font-display text-2xl tracking-[0.15em] text-ink">PACHAURI COSMETICS</span>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Clean, dermatologist-tested beauty made in small batches. Cruelty-free,
            always — and packed in recyclable glass.
          </p>
          <div className="mt-5 flex gap-4 text-ink/60">
            <Camera size={17} /><Share2 size={17} /><PlayCircle size={17} /><Mail size={17} />
          </div>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/shop?cat=makeup" className="hover:text-rose">Makeup</Link></li>
            <li><Link to="/shop?cat=skincare" className="hover:text-rose">Skincare</Link></li>
            <li><Link to="/shop?cat=haircare" className="hover:text-rose">Haircare</Link></li>
            <li><Link to="/shop?cat=lip-care" className="hover:text-rose">Lip Care</Link></li>
            <li><Link to="/shop?cat=fragrance" className="hover:text-rose">Fragrance</Link></li>
            <li><Link to="/shop?cat=beauty-tools" className="hover:text-rose">Beauty Tools</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/about" className="hover:text-rose">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-rose">Blog & Journal</Link></li>
            <li><Link to="/contact" className="hover:text-rose">Contact Us</Link></li>
            <li><Link to="/account/orders" className="hover:text-rose">Orders</Link></li>
            <li><Link to="/shop" className="hover:text-rose">All Products</Link></li>
            <li><Link to="/account" className="hover:text-rose">My Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>Mon–Sat, 9am–7pm IST</li>
            <li>{BRAND.email}</li>
            <li>{BRAND.phone}</li>
            <li>30-day easy returns</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted lg:px-8">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Shipping Policy · Terms & Conditions
      </div>
    </footer>
  );
}
