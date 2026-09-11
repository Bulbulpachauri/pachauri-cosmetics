import { User, Mail, Lock } from "lucide-react";

export default function Profile() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
      <p className="eyebrow">Profile</p>
      <h1 className="section-title mt-2 !text-3xl">Account details</h1>

      <form className="card mt-8 p-7" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2 flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blushdeep/30">
              <User size={32} className="text-ink/50" />
            </div>
            <div>
              <span className="font-body text-sm text-ink">Profile photo</span>
              <p className="mt-1 text-xs text-muted">JPG or PNG, up to 2MB</p>
            </div>
          </div>

          <div>
            <label className="eyebrow mb-2">First name</label>
            <input required className="input" placeholder="Bulbul" />
          </div>
          <div>
            <label className="eyebrow mb-2">Last name</label>
            <input required className="input" placeholder="Pachauri" />
          </div>
          <div className="sm:col-span-2 relative">
            <Mail size={16} className="absolute top-4 left-4 text-ink/40" />
            <input required type="email" className="input pl-11" placeholder="Email address" />
          </div>
          <div className="sm:col-span-2 relative">
            <Lock size={16} className="absolute top-4 left-4 text-ink/40" />
            <input type="password" className="input pl-11" placeholder="Current password" />
          </div>
          <div className="sm:col-span-2 relative">
            <Lock size={16} className="absolute top-4 left-4 text-ink/40" />
            <input type="password" className="input pl-11" placeholder="New password" />
          </div>
          <div className="sm:col-span-2 relative">
            <Lock size={16} className="absolute top-4 left-4 text-ink/40" />
            <input type="password" className="input pl-11" placeholder="Confirm new password" />
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          <button type="submit" className="btn-primary">Save changes</button>
          <button type="button" className="btn-outline">Cancel</button>
        </div>

        <p className="mt-4 font-body text-xs text-muted">Demo UI — profile changes are not persisted yet.</p>
      </form>
    </section>
  );
}
