import { Leaf, BadgeCheck, Sparkles, Truck } from "lucide-react";

const VALUES = [
  { icon: Leaf, title: "Clean by default", desc: "Every formula is vegan, cruelty-free and free from parabens and sulphates." },
  { icon: BadgeCheck, title: "Dermatologist tested", desc: "Formulated and tested alongside dermatologists before anything ships." },
  { icon: Sparkles, title: "Small batch", desc: "We produce in small runs so every formula stays fresh and effective." },
  { icon: Truck, title: "Responsibly packed", desc: "Recyclable glass and minimal, plastic-light packaging across the range." },
];

export default function About() {
  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="eyebrow justify-center">Our Story</p>
          <h1 className="section-title mt-3">Beauty made like it's meant to be worn</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/70">
            Pachauri Cosmetics started with a simple frustration: makeup that looked good
            on the shelf but felt heavy by lunchtime. We set out to build a
            small line of clean, dermatologist-formulated makeup and skincare
            that disappears into skin instead of sitting on top of it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6">
              <Icon size={22} className="text-rose" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <img src="img1.jpg" alt="Pachauri Cosmetics studio" className="aspect-[6/5] w-full object-cover" />
          <div>
            <p className="eyebrow">Our Promise</p>
            <h2 className="section-title mt-3 !text-3xl">Formulated with dermatologists, tested on real skin</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Every Pachauri Cosmetics product goes through in-use testing on a range of
              skin tones and types before it ever reaches a shelf. We publish
              our full ingredient lists, keep batch sizes small, and never
              test on animals — no exceptions, anywhere we sell.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
