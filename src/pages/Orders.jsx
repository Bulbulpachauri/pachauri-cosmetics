import { Package, Calendar, MapPin, CreditCard } from "lucide-react";

const ORDERS = [
  {
    id: "ORD-001",
    date: "2025-03-08",
    total: "$106",
    status: "Delivered",
    items: [
      { name: "Silk Veil Liquid Foundation", qty: 1, price: "$38" },
      { name: "Petal Glow Cream Blush", qty: 1, price: "$24" },
      { name: "Glass Shine Plumping Gloss", qty: 1, price: "$19" },
    ],
    address: "Studio 4, Lower Parel, Mumbai, India",
  },
  {
    id: "ORD-002",
    date: "2025-02-14",
    total: "$68",
    status: "Processing",
    items: [{ name: "Rose Hour Parfum", qty: 1, price: "$68" }],
    address: "Studio 4, Lower Parel, Mumbai, India",
  },
  {
    id: "ORD-003",
    date: "2024-12-22",
    total: "$76",
    status: "Delivered",
    items: [
      { name: "Dew Drop Vitamin C Serum", qty: 1, price: "$54" },
      { name: "Cloud Cream Barrier Moisturiser", qty: 1, price: "$42" },
      { name: "Night Renew 0.5% Retinal", qty: 1, price: "$62" },
    ],
    address: "Studio 4, Lower Parel, Mumbai, India",
  },
];

export default function Orders() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
      <p className="eyebrow">Order history</p>
      <h1 className="section-title mt-2 !text-3xl">Your orders</h1>
      <p className="mt-2 text-sm text-muted">Demo orders shown below — order data is not persisted yet.</p>

      <div className="mt-10 space-y-8">
        {ORDERS.map((order) => (
          <div key={order.id} className="card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-lg text-ink">{order.id}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {order.date}</span>
                  <span className="flex items-center gap-1"><CreditCard size={12} /> {order.total}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    order.status === "Delivered" ? "bg-blushdeep/30 text-ink" : "bg-navy/10 text-navy"
                  }`}>{order.status}</span>
                </div>
              </div>
              <Package size={18} className="text-ink/50" />
            </div>

            <div className="mt-4 space-y-2 text-sm">
              {order.items.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-ink/70">{item.name} x{item.qty}</span>
                  <span className="text-ink">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-muted">
              <MapPin size={12} className="mt-0.5 shrink-0" />
              <span>{order.address}</span>
            </div>
          </div>
        ))}

        {ORDERS.length === 0 && (
          <div className="py-20 text-center">
            <Package size={32} className="mx-auto text-rose" />
            <p className="mt-4 text-muted">No orders yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
