import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "../data/mock";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = PRODUCTS.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted lg:px-8">
        <Link to="/" className="hover:text-rose">Home</Link> / <Link to="/shop" className="hover:text-rose">Shop</Link> / {product.name}
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden bg-[#F1E7DC]">
          {product.discount > 0 && (
            <span className="absolute left-4 top-4 z-10 bg-rose px-3 py-1 font-body text-xs text-white">-{product.discount}%</span>
          )}
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-muted">{product.category}</p>
          <h1 className="mt-2 font-display text-4xl text-ink">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill={i < Math.round(product.rating) ? "#B68A56" : "none"} strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-sm text-muted">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-display text-3xl text-ink">${product.price.toFixed(2)}</span>
            {product.compareAt && <span className="text-lg text-muted line-through">${product.compareAt.toFixed(2)}</span>}
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">{product.description}</p>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-line">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2.5 text-ink/60 hover:text-rose">−</button>
              <span className="w-10 text-center font-body text-sm">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2.5 text-ink/60 hover:text-rose">+</button>
            </div>
            <button onClick={handleAdd} className="btn-primary flex-1">
              <ShoppingBag size={16} /> {added ? "Added to Cart" : "Add to Cart"}
            </button>
            <button aria-label="Add to wishlist" className="flex h-12 w-12 items-center justify-center border border-line text-ink/60 hover:text-rose">
              <Heart size={17} />
            </button>
          </div>

          <div className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {[
              [Truck, "Free shipping over $75"],
              [RotateCcw, "30-day easy returns"],
              [ShieldCheck, "Dermatologist tested"],
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-2 text-xs text-ink/60">
                <Icon size={16} className="shrink-0 text-rose" strokeWidth={1.5} /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
            <h2 className="section-title !text-3xl">You may also like</h2>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
