import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlinePhone,
} from "react-icons/hi";

function Register() {
  return (
    <main className="grid min-h-screen bg-[#f7f7f2] lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#172c35] p-12 text-white lg:flex">
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[#d9f36a]/10 blur-3xl" />

        <Link to="/" className="relative text-2xl font-extrabold">
          Near<span className="text-[#d9f36a]">Serve.</span>
        </Link>

        <div className="relative">
          <p className="text-xs font-extrabold tracking-[.2em] text-[#d9f36a]">JOIN OUR COMMUNITY</p>
          <h1 className="mt-5 font-[Manrope] text-5xl font-extrabold leading-tight">
            Better connections. Better neighbourhoods.
          </h1>
          <p className="mt-6 max-w-md leading-8 text-slate-300">
            Whether you need a helping hand or want to grow your local service
            business, NearServe brings people together.
          </p>
        </div>

        <p className="relative text-sm text-slate-400">
          Find trusted services near you.
        </p>
      </aside>

      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          <Link to="/" className="text-2xl font-extrabold text-[#172c35] lg:hidden">
            Near<span className="text-[#719238]">Serve.</span>
          </Link>

          <p className="section-label mt-8 lg:mt-0">GET STARTED</p>
          <h2 className="mt-3 font-[Manrope] text-4xl font-extrabold">Create your account.</h2>
          <p className="mt-3 text-slate-500">Join NearServe and discover a simpler way to find local services.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-2 block text-sm font-bold">Full name</label>
              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlineUser className="text-xl text-slate-400" />
                <input required placeholder="Enter your name" className="w-full py-3.5 outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">Email address</label>
              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlineMail className="text-xl text-slate-400" />
                <input type="email" required placeholder="you@example.com" className="w-full py-3.5 outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">Phone number</label>
              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlinePhone className="text-xl text-slate-400" />
                <input type="tel" placeholder="Enter phone number" className="w-full py-3.5 outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">I want to join as</label>
              <select className="form-field" defaultValue="customer">
                <option value="customer">Customer</option>
                <option value="provider">Service provider</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">Password</label>
              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4">
                <HiOutlineLockClosed className="text-xl text-slate-400" />
                <input type="password" required minLength={6} placeholder="Create a password" className="w-full py-3.5 outline-none" />
              </div>
            </div>

            <label className="flex items-start gap-2 pt-1 text-xs leading-5 text-slate-500">
              <input type="checkbox" required className="mt-1 accent-[#719238]" />
              I agree to the terms and conditions and privacy policy.
            </label>

            <button className="accent-btn w-full">Create my account</button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-extrabold text-emerald-800">Log in</Link>
          </p>

          <p className="mt-7 text-center text-xs text-slate-400">
            Frontend demonstration only. Registration is not connected to a server.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register