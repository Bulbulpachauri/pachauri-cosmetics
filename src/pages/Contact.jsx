import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND } from "../data/mock";

export default function Contact() {
  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8">
          <p className="eyebrow justify-center">Get in Touch</p>
          <h1 className="section-title mt-3">We'd love to hear from you</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:grid lg:grid-cols-5 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <div className="card p-7">
            <h3 className="eyebrow mb-5">Contact Details</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-rose" /> <span className="text-ink/70">Studio 4, Lower Parel, Mumbai, India</span></li>
              <li className="flex gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-rose" /> <a href={`tel:${BRAND.phone}`} className="text-ink/70 hover:text-rose">{BRAND.phone}</a></li>
              <li className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-rose" /> <a href={`mailto:${BRAND.email}`} className="text-ink/70 hover:text-rose">{BRAND.email}</a></li>
            </ul>
          </div>
        </div>

        <form className="card mt-10 p-7 lg:col-span-3 lg:mt-0" onSubmit={(e) => e.preventDefault()}>
          <h3 className="eyebrow mb-1">Send a Message</h3>
          <h2 className="font-display text-2xl text-ink">General Enquiry</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required className="input" placeholder="Your name" />
            <input required type="email" className="input" placeholder="Email address" />
            <input className="input sm:col-span-2" placeholder="Subject" />
            <textarea required rows="5" className="input rounded-2xl sm:col-span-2" placeholder="Your message..." />
          </div>
          <button type="submit" className="btn-primary mt-6">Send Message</button>
        </form>
      </section>
    </>
  );
}
