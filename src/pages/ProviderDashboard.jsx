import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import {
  HiOutlineCurrencyRupee,
  HiOutlineClipboardList,
  HiOutlineBriefcase,
  HiOutlineStar,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import StatsCard from "../components/StatsCard";

function ProviderDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f6f0] md:flex">
      <Sidebar type="provider" />

      <main className="min-w-0 flex-1 px-4 py-7 md:px-8 lg:px-10">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-label">PROVIDER OVERVIEW</p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#172c35]">
              Good morning, Arun 👋
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Here's what's happening with your services today.
            </p>
          </div>

          <Link to="/provider/manage-services" className="accent-btn">
            + Add a service
          </Link>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="surface-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Total earnings
              </p>
              <HiOutlineCurrencyRupee className="text-2xl text-emerald-700" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#172c35]">
              ₹24,850
            </h2>
            <p className="mt-2 text-xs text-emerald-700">
              +12.5% this month
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Total bookings
              </p>
              <HiOutlineClipboardList className="text-2xl text-blue-600" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#172c35]">
              48
            </h2>
            <p className="mt-2 text-xs text-blue-600">
              +8 this month
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Active services
              </p>
              <HiOutlineBriefcase className="text-2xl text-purple-600" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#172c35]">
              06
            </h2>
            <p className="mt-2 text-xs text-purple-600">
              Across 4 categories
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Average rating
              </p>
              <HiOutlineStar className="text-2xl text-orange-500" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#172c35]">
              4.9
            </h2>
            <p className="mt-2 text-xs text-orange-600">
              128 customer reviews
            </p>
          </div>

        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

          <div className="surface-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold">
                  Booking activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your booking performance this week.
                </p>
              </div>

              <span className="rounded-full bg-[#eaf1d8] px-3 py-1.5 text-xs font-bold text-[#52752d]">
                This week
              </span>
            </div>

            <div className="mt-8 flex h-56 items-end justify-around gap-3 border-b border-l border-slate-100 px-3 pb-2">

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[45%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Mon</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[70%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Tue</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[55%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Wed</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[90%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Thu</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[65%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Fri</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-full w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Sat</span>
              </div>

              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="h-[40%] w-full max-w-10 rounded-t-lg bg-[#719238]" />
                <span className="text-xs text-slate-400">Sun</span>
              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-[#719238]" />
              Bookings received
            </div>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-xl font-extrabold">
              Booking summary
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Current booking status.
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-600">Pending</span>
                  <b>8</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[40%] rounded-full bg-amber-400" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-600">Accepted</span>
                  <b>12</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[60%] rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-600">Completed</span>
                  <b>24</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[85%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-600">Cancelled</span>
                  <b>4</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[20%] rounded-full bg-rose-400" />
                </div>
              </div>

            </div>

            <Link
              to="/provider/booking-requests"
              className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-emerald-800"
            >
              Manage booking requests <HiArrowRight />
            </Link>
          </div>

        </section>

        <section className="surface-card mt-8 overflow-hidden">

          <div className="flex flex-wrap items-center justify-between gap-3 p-6">
            <div>
              <h2 className="text-xl font-extrabold">
                Recent bookings
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your latest customer requests.
              </p>
            </div>

            <Link
              to="/provider/booking-requests"
              className="text-sm font-bold text-emerald-800"
            >
              View all <HiArrowRight className="inline" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left text-sm">

              <thead className="bg-[#f7f8f3] text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">NS-1024</td>
                  <td className="px-6 py-5 font-semibold">Priya Nair</td>
                  <td className="px-6 py-5 text-slate-500">Pipe Leakage Repair</td>
                  <td className="px-6 py-5 text-slate-500">24 Nov 2026</td>
                  <td className="px-6 py-5 font-bold">₹499</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">NS-1023</td>
                  <td className="px-6 py-5 font-semibold">Anand Kumar</td>
                  <td className="px-6 py-5 text-slate-500">Bathroom Fitting</td>
                  <td className="px-6 py-5 text-slate-500">23 Nov 2026</td>
                  <td className="px-6 py-5 font-bold">₹799</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      Accepted
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">NS-1022</td>
                  <td className="px-6 py-5 font-semibold">Meera S</td>
                  <td className="px-6 py-5 text-slate-500">Tap Installation</td>
                  <td className="px-6 py-5 text-slate-500">22 Nov 2026</td>
                  <td className="px-6 py-5 font-bold">₹350</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">NS-1021</td>
                  <td className="px-6 py-5 font-semibold">Rahul Thomas</td>
                  <td className="px-6 py-5 text-slate-500">Drain Cleaning</td>
                  <td className="px-6 py-5 text-slate-500">20 Nov 2026</td>
                  <td className="px-6 py-5 font-bold">₹599</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
                      Cancelled
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl bg-[#172c35] p-6 text-white">
            <HiOutlineCalendar className="text-3xl text-[#d9f36a]" />

            <h3 className="mt-4 text-lg font-extrabold">
              Keep your schedule updated
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Review incoming requests and keep your availability organised.
            </p>

            <Link
              to="/provider/booking-requests"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d9f36a]"
            >
              View requests <HiArrowRight />
            </Link>
          </div>

          <div className="rounded-2xl bg-[#eaf1d8] p-6">
            <HiOutlineLocationMarker className="text-3xl text-[#52752d]" />

            <h3 className="mt-4 text-lg font-extrabold text-[#172c35]">
              Grow your local reach
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep your service details and coverage areas up to date.
            </p>

            <Link
              to="/provider/manage-services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#52752d]"
            >
              Manage services <HiArrowRight />
            </Link>
          </div>

        </section>

      </main>
    </div>
  );
}

export default ProviderDashboard;
