import { Globe, Bell, ShieldCheck, CreditCard, Mail } from "lucide-react";

const settings = [
  { label: "Store Details", desc: "Update name, contact, and address", icon: Globe },
  { label: "Notifications", desc: "Email and SMS preferences", icon: Bell },
  { label: "Payments", desc: "Payment methods and payout settings", icon: CreditCard },
  { label: "Security", desc: "Password, 2FA, and permissions", icon: ShieldCheck },
  { label: "Support", desc: "Support email and chat widget", icon: Mail },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#FBF7F8] p-5 sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-[#a47768]">Store Management</p>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#292321]">Settings</h1>
        <p className="mt-2 text-sm text-gray-500">Manage your store preferences and account settings.</p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {settings.map(({ label, desc, icon: Icon }) => (
          <div key={label} className="flex items-start gap-4 rounded-[18px] border border-[#f0e6ea] bg-white p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fce7eb] text-[#d63862]">
              <Icon size={18} />
            </div>
            <div>
              <h2 className="font-semibold text-[15px]">{label}</h2>
              <p className="mt-1 text-sm text-[#6b6270]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
