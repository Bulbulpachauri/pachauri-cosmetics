import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Demo validation
    const adminEmail = "admin@pachauricosmetics.com";
    const adminPassword = "admin123";

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === adminEmail && password === adminPassword) {
        // Demo login state
        localStorage.setItem("pachauri_admin_logged_in", "true");

        if (rememberMe) {
          localStorage.setItem("pachauri_admin_remember", "true");
        }

        navigate("/admin", { replace: true });
      } else {
        setError("Invalid admin email or password.");
        setLoading(false);
      }
    }, 700);
  };

  const handleForgotPassword = () => {
    alert(
      "Password reset will be available after backend authentication is connected."
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF7F8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-[#eadfdc] shadow-sm">
          
          {/* LEFT SIDE */}
          <div className="hidden lg:flex relative bg-[#8f6255] px-12 py-14 text-white flex-col justify-between overflow-hidden">
            
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/10" />

            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#8f6255]" />
                </div>

                <div>
                  <h1 className="text-xl font-semibold tracking-wide">
                    Pachauri
                  </h1>
                  <p className="text-sm text-white/75">
                    Cosmetics
                  </p>
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
                Admin Panel
              </p>

              <h2 className="font-serif text-4xl leading-tight mb-5">
                Manage your beauty store with confidence.
              </h2>

              <p className="text-white/75 leading-7 max-w-md">
                Manage products, orders, customers, reviews, coupons and
                everything related to your Pachauri Cosmetics store from one
                place.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-sm text-white/80">
              <ShieldCheck className="w-5 h-5" />
              <span>Secure Admin Access</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="px-6 py-10 sm:px-10 lg:px-12 flex items-center">
            <div className="w-full max-w-md mx-auto">

              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-[#8f6255] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-[#211b19]">
                    Pachauri
                  </h1>
                  <p className="text-sm text-[#8f6255]">
                    Cosmetics
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="text-sm font-medium text-[#9b6658] mb-2">
                  Admin Portal
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#211b19]">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm text-[#6f6764]">
                  Sign in to manage your Pachauri Cosmetics store.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#302925] mb-2"
                  >
                    Admin Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a8f8a]" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter admin email"
                      autoComplete="email"
                      className="w-full rounded-xl border border-[#ded2ce] bg-white py-3.5 pl-12 pr-4 text-sm text-[#211b19] outline-none transition focus:border-[#9b6658] focus:ring-2 focus:ring-[#9b6658]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#302925] mb-2"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a8f8a]" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="w-full rounded-xl border border-[#ded2ce] bg-white py-3.5 pl-12 pr-12 text-sm text-[#211b19] outline-none transition focus:border-[#9b6658] focus:ring-2 focus:ring-[#9b6658]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f8580] hover:text-[#8f6255] transition"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-[#cfc2bd] text-[#9b6658] focus:ring-[#9b6658]"
                    />

                    <span className="text-sm text-[#6f6764]">
                      Remember me
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm font-medium text-[#9b6658] hover:text-[#7f5146] transition"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8f6255] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7f5146] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in to Admin
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-7 rounded-xl border border-[#eadfdc] bg-[#FBF7F8] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8f6255] mb-2">
                  Demo Login
                </p>

                <p className="text-sm text-[#5f5753]">
                  <span className="font-medium">Email:</span>{" "}
                  admin@pachauricosmetics.com
                </p>

                <p className="text-sm text-[#5f5753] mt-1">
                  <span className="font-medium">Password:</span>{" "}
                  admin123
                </p>
              </div>

              {/* Footer */}
              <p className="text-center text-xs text-[#9a8f8a] mt-8">
                © 2026 Pachauri Cosmetics. Admin access only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}