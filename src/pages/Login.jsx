
import { Link } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Login() {

  return (
    <main className="grid min-h-screen bg-[#f7f7f2] lg:grid-cols-2">
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <Link to="/" className="text-2xl font-extrabold text-[#172c35]">
            Near<span className="text-[#719238]">Serve.</span>
          </Link>

          <p className="section-label mt-12">WELCOME BACK</p>

          <h1 className="mt-3 font-[Manrope] text-4xl font-extrabold">
            Good to see you again.
          </h1>

          <p className="mt-3 text-slate-500">
            Log in to continue with NearServe.
          </p>

          <form className="mt-9 space-y-5" >

            <div>
              <label className="mb-2 block text-sm font-bold">
                Email address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlineMail className="text-xl text-slate-400" />

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlineLockClosed className="text-xl text-slate-400" />

                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Login as
              </label>

              <select

                className="w-full rounded-xl border border-[#e1e5dc] bg-white px-4 py-4 outline-none"
              >
                <option value="customer">Customer</option>
                <option value="provider">Service Provider</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="accent-[#719238]" />
                Remember me
              </label>

              <button
                type="button"
                className="font-bold text-emerald-800"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="primary-btn w-full"
            >
              Log in to your account
            </button>

          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?
            <Link to="/register" className="font-extrabold text-emerald-800">
              Create one
            </Link>
          </p>

          <p className="mt-10 text-center text-xs text-slate-400">
            This is a frontend demonstration. Authentication is not connected.
          </p>

        </div>
      </section>

      <aside className="relative hidden overflow-hidden bg-[#172c35] p-12 text-white lg:flex lg:flex-col lg:justify-between">

        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#d9f36a]/10 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <HiOutlineLocationMarker className="text-[#d9f36a]" />
            Your neighbourhood, connected
          </div>

          <h2 className="mt-12 max-w-lg font-[Manrope] text-5xl font-extrabold leading-tight">
            Your next trusted professional is just around the corner.
          </h2>

          <p className="mt-6 max-w-md leading-8 text-slate-300">
            Discover local experts, compare services and make your home-care experience easier.
          </p>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-white/10 p-6">
          <p className="text-lg font-bold">
            “Finding reliable help has never been this simple.”
          </p>

          <p className="mt-3 text-sm text-slate-300">
            The NearServe experience
          </p>
        </div>

      </aside>
    </main>
  );
}

export default Login;
