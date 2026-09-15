import { Link } from "react-router-dom";
import {
  Truck,
  Leaf,
  BadgeCheck,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, REVIEWS, STATS } from "../data/mock";
import ProductCard from "../components/ProductCard";

const TRUST = [
  { icon: Truck, label: "Free shipping over $75" },
  { icon: Leaf, label: "Clean, vegan formulas" },
  { icon: BadgeCheck, label: "Dermatologist tested" },
  { icon: Sparkles, label: "30-day easy returns" },
];

const featured = PRODUCTS.filter((p) => p.tags.includes("featured"));
const bestSellers = PRODUCTS.filter((p) => p.tags.includes("bestseller"));
const newArrivals = PRODUCTS.filter((p) => p.tags.includes("new"));

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-blush">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow">New Season · Rose Hour Edit</p>

            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
              Makeup & Skincare
              <br />
              <span className="italic text-rose">
                for Everyday Beauty
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm text-ink/70">
              Shop makeup and skincare products made for your everyday beauty routine.
              Discover clean beauty essentials, skincare, makeup and more from Pachauri Cosmetics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">
                Shop Now <ArrowRight size={15} />
              </Link>

              <Link to="/shop" className="btn-outline">
                Browse Categories
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/1cosmetics.jpg"
              alt="Pachauri Cosmetics makeup and skincare collection"
              className="aspect-[6/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-6 lg:grid-cols-4 lg:px-8">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon
                size={17}
                className="shrink-0 text-rose"
                strokeWidth={1.5}
              />
              <span className="font-body text-xs text-ink/70 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center lg:px-8 lg:py-24">
        <p className="eyebrow justify-center">Shop by Category</p>

        <h2 className="section-title mt-3">
          Shop Makeup & Skincare Categories
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
          Explore makeup and skincare products for your everyday beauty routine.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop?cat=${c.id}`}
              className="group text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.name} products - Pachauri Cosmetics`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 font-display text-xl text-ink">
                {c.name}
              </h3>

              <p className="mt-1 text-sm text-muted">{c.desc}</p>

              <span className="mt-2 inline-block font-body text-xs uppercase tracking-wide text-rose">
                Shop {c.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Handpicked</p>

            <h2 className="section-title mt-2 !text-3xl">
              Featured Makeup & Skincare Products
            </h2>
          </div>

          <Link
            to="/shop"
            className="font-body text-xs uppercase tracking-wide text-rose hover:underline"
          >
            View all products
          </Link>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SPECIAL OFFER BANNER */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-body text-[11px] uppercase tracking-widest2 text-rose-light">
              Special Offer
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Up to 30% off the Glow Edit
            </h2>

            <p className="mt-4 max-w-sm text-sm text-white/60">
              Bundle any serum, moisturiser and cleanser and the lowest-priced
              item is on us. Ends Sunday, while stocks last.
            </p>

            <Link
              to="/shop?cat=skincare"
              className="btn-dark mt-7"
            >
              Shop the Offer <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["p3", "p6", "p7"].map((id) => {
              const p = PRODUCTS.find((x) => x.id === id);

              return (
                <img
                  key={id}
                  src={p.image}
                  alt={`${p.name} - Pachauri Cosmetics`}
                  className="aspect-[3/4] w-full object-cover"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Loved Most</p>

            <h2 className="section-title mt-2 !text-3xl">
              Best-Selling Makeup & Skincare Products
            </h2>
          </div>

          <Link
            to="/shop"
            className="font-body text-xs uppercase tracking-wide text-rose hover:underline"
          >
            See top rated
          </Link>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Just Landed</p>

<h2 className="section-title mt-2 !text-3xl">
  New Makeup & Skincare Arrivals
</h2>
            </div>

            <Link
              to="/shop"
              className="font-body text-xs uppercase tracking-wide text-rose hover:underline"
            >
              Shop new in →
            </Link>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center lg:px-8 lg:py-24">
          <p className="eyebrow justify-center">Customer Stories</p>

          <h2 className="section-title mt-3">
            {STATS.rating} from {STATS.count} reviews
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm text-ink/60">
            Real words from people who wear Pachauri Cosmetics every day.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="card p-6 text-left">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < r.rating ? "#B68A56" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-3 text-sm italic text-ink/70">
                  "{r.text}"
                </p>

                <p className="mt-4 font-body text-sm font-medium text-ink">
                  {r.name}
                </p>

                <p className="text-xs text-muted">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-blushdeep">
        <div className="mx-auto max-w-xl px-5 py-16 text-center lg:py-20">
          <p className="eyebrow justify-center">
            The Pachauri Cosmetics Letter
          </p>

          <h2 className="section-title mt-3 !text-3xl">
            15% off your first ritual
          </h2>

          <p className="mt-3 text-sm text-ink/60">
            Join for early access to launches, expert routines and
            members-only offers.
          </p>

          <form
            className="mx-auto mt-6 flex max-w-sm gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="input flex-1"
              placeholder="you@email.com"
              type="email"
              required
            />

            <button className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}