import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-[#F1E7DC]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={`${product.name} - ${product.category} - Pachauri Cosmetics`}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 bg-rose px-2.5 py-1 font-body text-[11px] font-medium text-white">
            -{product.discount}%
          </span>
        )}
        <button
          onClick={() => setWished((v) => !v)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/70 hover:text-rose"
        >
          <Heart size={15} fill={wished ? "#C2685C" : "none"} color={wished ? "#C2685C" : "currentColor"} />
        </button>
      </div>

      <div className="pt-4">
        <p className="font-body text-[10px] uppercase tracking-widest2 text-muted">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-display text-lg text-ink hover:text-rose">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill={i < Math.round(product.rating) ? "#B68A56" : "none"} strokeWidth={1.5} />
            ))}
          </div>
          <span className="font-body text-xs text-muted">{product.rating} ({product.reviews})</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-body text-base font-medium text-ink">${product.price.toFixed(2)}</span>
          {product.compareAt && (
            <span className="font-body text-sm text-muted line-through">${product.compareAt.toFixed(2)}</span>
          )}
        </div>
        <button onClick={() => addItem(product)} className="btn-outline mt-3 w-full !py-2.5 text-xs">
          <ShoppingBag size={14} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
