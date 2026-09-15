import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/mock";
import ProductCard from "../components/ProductCard";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") || "all";
  const query = params.get("q") || "";
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => (activeCat === "all" ? true : p.categoryId === activeCat));
    if (query) {
      list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCat, query, sort]);

  function setCat(id) {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("cat"); else next.set("cat", id);
    setParams(next);
  }

  return (
    <>
      <section className="border-b border-line bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <p className="mt-3 max-w-2xl text-sm text-ink/70">
            Explore makeup and skincare products from Pachauri Cosmetics,
            including beauty essentials for your everyday routine.
          </p>
          <h1 className="section-title mt-2">
            {query ? `“${query}”` : "Makeup & Skincare Products"}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:grid lg:grid-cols-4 lg:gap-10 lg:px-8">
        <aside className="lg:col-span-1">
          <h3 className="eyebrow mb-4 flex items-center gap-2"><SlidersHorizontal size={13} /> Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => setCat("all")} className={`font-body ${activeCat === "all" ? "text-rose" : "text-ink/70 hover:text-rose"}`}>
                All Products ({PRODUCTS.length})
              </button>
            </li>
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.categoryId === c.id).length;
              return (
                <li key={c.id}>
                  <button onClick={() => setCat(c.id)} className={`font-body ${activeCat === c.id ? "text-rose" : "text-ink/70 hover:text-rose"}`}>
                    {c.name} Products ({n})
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="mt-10 lg:col-span-3 lg:mt-0">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="text-sm text-muted">{filtered.length} products</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border-none bg-transparent font-body text-sm text-ink outline-none">
              {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-muted">No products match this filter.</p>
          ) : (
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
