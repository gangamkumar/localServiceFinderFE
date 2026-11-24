
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import BookingStatusBadge from "../components/BookingStatusBadge";

import {
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineClipboardList,
  HiOutlineExclamationCircle,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineShieldCheck,
  HiArrowRight,
} from "react-icons/hi";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f6f0] md:flex">
      <Sidebar type="admin" />

      <main className="min-w-0 flex-1 px-4 py-7 md:px-8 lg:px-10">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-label">ADMINISTRATION</p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#172c35]">
              Admin dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Monitor and manage the NearServe platform.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#eaf1d8] font-extrabold text-[#52752d]">
              A
            </div>
            <div>
              <p className="text-sm font-extrabold">Administrator</p>
              <p className="text-xs text-slate-400">Super admin</p>
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Total customers"
            value="2,450"
            icon={HiOutlineUsers}
            color="blue"
            change="+15.2% this month"
          />

          <StatsCard
            title="Service providers"
            value="528"
            icon={HiOutlineBriefcase}
            color="green"
            change="+8.4% this month"
          />

          <StatsCard
            title="Total bookings"
            value="1,824"
            icon={HiOutlineClipboardList}
            color="purple"
            change="+12.6% this month"
          />

          <StatsCard
            title="Open complaints"
            value="12"
            icon={HiOutlineExclamationCircle}
            color="orange"
            change="Needs attention"
          />
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

          <div className="surface-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold">
                  Platform activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Monthly booking overview.
                </p>
              </div>

              <span className="rounded-full bg-[#eaf1d8] px-3 py-1.5 text-xs font-bold text-[#52752d]">
                2026
              </span>
            </div>

            <div className="mt-8 flex h-56 items-end justify-around gap-3 border-b border-l border-slate-100 px-3 pb-2">

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[35%] w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Jun</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[50%] w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Jul</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[42%] w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Aug</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[68%] w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Sep</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[82%] w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Oct</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-full w-full max-w-12 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Nov</span>
              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-[#719238]" />
              Bookings per month
            </div>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-xl font-extrabold">
              Platform overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current platform statistics.
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="font-semibold text-slate-600">
                    Verified providers
                  </span>
                  <b>420</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[80%] rounded-full bg-[#719238]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="font-semibold text-slate-600">
                    Pending verification
                  </span>
                  <b>108</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[35%] rounded-full bg-[#719238]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="font-semibold text-slate-600">
                    Completed bookings
                  </span>
                  <b>1,420</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[88%] rounded-full bg-[#719238]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="font-semibold text-slate-600">
                    Open complaints
                  </span>
                  <b>12</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[15%] rounded-full bg-[#719238]" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="surface-card mt-8 overflow-hidden">

          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <div className="flex items-center gap-2">
                <HiOutlineShieldCheck className="text-2xl text-[#719238]" />
                <h2 className="text-xl font-extrabold">
                  Provider verification
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Review and approve service provider applications.
              </p>
            </div>

            <span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
              2 awaiting review
            </span>
          </div>

          <div className="flex flex-wrap gap-2 border-y border-slate-100 px-6 py-4">
            <button className="rounded-full bg-[#172c35] px-4 py-2 text-xs font-bold text-white">
              All
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Pending
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Verified
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Rejected
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-[#f7f8f3] text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">Provider</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Experience</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5">
                    <p className="font-extrabold">Arun Kumar</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Applied 22 Nov 2026
                    </p>
                  </td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 text-slate-500">Kochi, Kerala</td>
                  <td className="px-6 py-5 text-slate-500">8 years</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Pending" />
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                        <HiOutlineCheck />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineX />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5">
                    <p className="font-extrabold">Rahul Thomas</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Applied 21 Nov 2026
                    </p>
                  </td>
                  <td className="px-6 py-5 text-slate-500">Electrical</td>
                  <td className="px-6 py-5 text-slate-500">Trivandrum, Kerala</td>
                  <td className="px-6 py-5 text-slate-500">6 years</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Pending" />
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                        <HiOutlineCheck />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineX />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5">
                    <p className="font-extrabold">Anjali Services</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Applied 20 Nov 2026
                    </p>
                  </td>
                  <td className="px-6 py-5 text-slate-500">Cleaning</td>
                  <td className="px-6 py-5 text-slate-500">Kochi, Kerala</td>
                  <td className="px-6 py-5 text-slate-500">5 years</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Verified" />
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-semibold text-slate-400">
                      No action
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5">
                    <p className="font-extrabold">Joseph Wood Works</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Applied 18 Nov 2026
                    </p>
                  </td>
                  <td className="px-6 py-5 text-slate-500">Carpentry</td>
                  <td className="px-6 py-5 text-slate-500">Kollam, Kerala</td>
                  <td className="px-6 py-5 text-slate-500">10 years</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Verified" />
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-semibold text-slate-400">
                      No action
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        <section className="surface-card mt-8 overflow-hidden">

          <div className="flex items-center justify-between gap-3 p-6">
            <div>
              <h2 className="text-xl font-extrabold">
                Recent bookings
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest activity across the platform.
              </p>
            </div>

            <span className="text-xs font-bold text-slate-400">
              LATEST ACTIVITY
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-[#f7f8f3] text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Provider</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                <tr>
                  <td className="px-6 py-5 font-bold">NS-1024</td>
                  <td className="px-6 py-5">Priya Nair</td>
                  <td className="px-6 py-5">Arun Kumar</td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 font-bold">₹499</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Pending" />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-bold">NS-1023</td>
                  <td className="px-6 py-5">Anand Kumar</td>
                  <td className="px-6 py-5">Rahul Thomas</td>
                  <td className="px-6 py-5 text-slate-500">Electrical</td>
                  <td className="px-6 py-5 font-bold">₹599</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Accepted" />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-bold">NS-1022</td>
                  <td className="px-6 py-5">Meera S</td>
                  <td className="px-6 py-5">Anjali Services</td>
                  <td className="px-6 py-5 text-slate-500">Cleaning</td>
                  <td className="px-6 py-5 font-bold">₹799</td>
                  <td className="px-6 py-5">
                    <BookingStatusBadge status="Completed" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
        <div className="mt-8 rounded-2xl bg-[#172c35] p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold tracking-[.15em] text-[#d9f36a]">
                PLATFORM MANAGEMENT
              </p>

              <h2 className="mt-2 text-xl font-extrabold">
                Keep NearServe running smoothly.
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Review providers and monitor platform activity.
              </p>
            </div>

            <HiArrowRight className="text-3xl text-[#d9f36a]" />
          </div>
        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;
