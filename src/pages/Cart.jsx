import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQty, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-xl px-5 py-24 text-center lg:px-8">
        <ShoppingBag size={36} className="mx-auto text-rose" strokeWidth={1.5} />
        <h1 className="section-title mt-5 !text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted">Explore the collection and find your next ritual.</p>
        <Link to="/shop" className="btn-primary mt-7">Shop Products</Link>
      </section>
    );
  }

  const shipping = subtotal >= 75 ? 0 : 6.5;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8">
      <div className="lg:col-span-2">
        <h1 className="section-title !text-3xl">Your Cart</h1>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-5">
              <img src={item.image} alt={item.name} className="h-24 w-24 shrink-0 bg-[#F1E7DC] object-cover" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-widest2 text-muted">{item.category}</p>
                    <Link to={`/product/${item.id}`} className="font-display text-lg text-ink hover:text-rose">{item.name}</Link>
                  </div>
                  <button onClick={() => removeItem(item.id)} aria-label="Remove item" className="text-ink/40 hover:text-rose">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-line">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2.5 py-1.5 text-ink/60 hover:text-rose">−</button>
                    <span className="w-8 text-center font-body text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2.5 py-1.5 text-ink/60 hover:text-rose">+</button>
                  </div>
                  <span className="font-body text-sm font-medium text-ink">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="mt-10 lg:mt-0">
        <div className="card p-6">
          <h3 className="eyebrow mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-xl text-ink">
            <span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span>
          </div>
          <button className="btn-primary mt-6 w-full">Proceed to Checkout</button>
          <Link to="/shop" className="mt-3 block text-center text-xs text-muted hover:text-rose">Continue Shopping</Link>
        </div>
      </aside>
    </section>
  );
}
