import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function MyProfile() {
  return (
    <main className="page-container py-12">
      <p className="section-label">ACCOUNT SETTINGS</p>

      <h1 className="section-title mt-3">My Profile</h1>

      <p className="mt-3 text-slate-500">
        View your personal information.
      </p>

      <div className="mt-9 grid items-start gap-7 lg:grid-cols-[300px_1fr]">

        <aside className="surface-card p-7 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#eaf1d8] text-4xl font-extrabold text-[#52752d]">
            G
          </div>

          <h2 className="mt-4 text-xl font-extrabold">
            Ganga M
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Customer account
          </p>

          <div className="mt-6 border-t border-slate-100 pt-5 text-left text-sm">
            <p className="flex items-center justify-between py-2">
              <span className="text-slate-500">Member since</span>
              <b>2026</b>
            </p>

            <p className="flex items-center justify-between py-2">
              <span className="text-slate-500">Account status</span>
              <span className="font-bold text-emerald-700">
                Active
              </span>
            </p>
          </div>
        </aside>

        <section className="surface-card p-6 md:p-8">
          <div>
            <h2 className="text-xl font-extrabold">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your basic account details.
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold">
                Full name
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-[#fafbf8] px-4">
                <HiOutlineUser className="shrink-0 text-xl text-emerald-700" />
                <p className="w-full py-4 text-sm text-slate-700">
                  Ganga M
                </p>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Email address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-[#fafbf8] px-4">
                <HiOutlineMail className="shrink-0 text-xl text-emerald-700" />
                <p className="w-full py-4 text-sm text-slate-700">
                  ganga@example.com
                </p>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Phone number
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-[#fafbf8] px-4">
                <HiOutlinePhone className="shrink-0 text-xl text-emerald-700" />
                <p className="w-full py-4 text-sm text-slate-700">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Location
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] bg-[#fafbf8] px-4">
                <HiOutlineLocationMarker className="shrink-0 text-xl text-emerald-700" />
                <p className="w-full py-4 text-sm text-slate-700">
                  Trivandrum, Kerala
                </p>
              </div>
            </div>

          </div>

          <p className="mt-7 text-xs text-slate-400">
            Your personal account information.
          </p>
        </section>

      </div>
    </main>
  );
}

export default MyProfile;
