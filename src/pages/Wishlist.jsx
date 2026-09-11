import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { PRODUCTS } from "../data/mock";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const saved = PRODUCTS.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
      <p className="eyebrow">Saved</p>
      <h1 className="section-title mt-2 !text-3xl">Your Wishlist</h1>
      <p className="mt-2 text-sm text-muted">Demo items shown below — wishlist state isn't persisted yet.</p>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {saved.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      {saved.length === 0 && (
        <div className="py-20 text-center">
          <Heart size={32} className="mx-auto text-rose" />
          <p className="mt-4 text-muted">Nothing saved yet.</p>
          <Link to="/shop" className="btn-primary mt-5">Browse Products</Link>
        </div>
      )}
    </section>
  );
}
