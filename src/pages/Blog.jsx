import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/mock";
import { formatDate } from "../utils/format";

export default function Blog() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const getCategory = (id) => BLOG_CATEGORIES.find((c) => c.id === id);

  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8">
          <p className="eyebrow justify-center">Journal</p>
          <h1 className="section-title mt-3">Beauty tips, ingredient deep-dives & rituals from the studio</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/70">
            Formulas, rituals and real skin stories from our in-house scientists and
            the community that wears Pachauri Cosmetics every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <h2 className="eyebrow mb-5">Featured</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {featured.map((post) => {
            const cat = getCategory(post.category);
            return (
              <Link key={post.id} to={`/blog/${post.id}`} className="card group block overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover object-center transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className={`eyebrow ${cat.color}`}>{cat.name}</span>
                    <span className="text-xs text-muted">Featured</span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{post.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime} min read</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
            <h2 className="eyebrow">All posts</h2>

            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <span key={cat.id} className={`eyebrow ${cat.color}`}>{cat.name}</span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => {
              const cat = getCategory(post.category);
              return (
                <Link key={post.id} to={`/blog/${post.id}`} className="card group block overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover object-center transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className={`eyebrow ${cat.color}`}>{cat.name}</span>
                    <h3 className="mt-2 font-display text-lg text-ink">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink/70">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
