
import Sidebar from "../components/Sidebar";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineClipboardList,
} from "react-icons/hi";

function BookingRequests() {
  return (
    <div className="min-h-screen bg-[#f5f6f0] md:flex">
      <Sidebar type="provider" />

      <main className="min-w-0 flex-1 px-4 py-7 md:px-8 lg:px-10">

        {/* Header */}
        <div>
          <p className="section-label">CUSTOMER ACTIVITY</p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#172c35]">
            Booking Requests
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review and manage requests from your customers.
          </p>
        </div>

        {/* Statistics */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Total requests</p>
            <p className="mt-2 text-3xl font-extrabold text-[#172c35]">04</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-2 text-3xl font-extrabold text-amber-600">01</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Accepted</p>
            <p className="mt-2 text-3xl font-extrabold text-blue-600">01</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-3xl font-extrabold text-emerald-700">01</p>
          </div>

        </section>

        {/* Booking Requests */}
        <section className="surface-card mt-8 overflow-hidden">

          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h2 className="text-xl font-extrabold">All requests</h2>
              <p className="mt-1 text-sm text-slate-500">
                Review customer bookings and their current status.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5">
              <HiOutlineSearch className="text-lg text-slate-400" />
              <input
                type="text"
                placeholder="Search requests"
                className="w-40 text-sm outline-none"
              />
            </div>
          </div>

          {/* Status Tabs - Static */}
          <div className="flex flex-wrap gap-2 border-y border-slate-100 px-6 py-4">

            <button className="rounded-full bg-[#172c35] px-4 py-2 text-xs font-bold text-white">
              All
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Pending
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Accepted
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Completed
            </button>

            <button className="rounded-full bg-[#f5f6f0] px-4 py-2 text-xs font-bold text-slate-600">
              Cancelled
            </button>

          </div>

          <div className="divide-y divide-slate-100">

            {/* Booking 1 */}
            <article className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:items-center">

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold text-slate-400">
                    NS-1024
                  </span>

                  <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                    Pending
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold">
                  Pipe Leakage Repair
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Requested by <b className="text-slate-700">Priya Nair</b>
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar /> 25 Nov 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock /> 10:00 AM
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineLocationMarker /> Kochi, Kerala
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <p className="mr-2 text-xl font-extrabold">₹499</p>

                <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold">
                  View details
                </button>

                <button className="flex items-center gap-1.5 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700">
                  <HiOutlineCheck /> Accept
                </button>

                <button className="flex items-center gap-1.5 rounded-xl bg-rose-50 px-4 py-2.5 text-sm font-bold text-rose-600">
                  <HiOutlineX /> Reject
                </button>
              </div>

            </article>

            {/* Booking 2 */}
            <article className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:items-center">

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold text-slate-400">
                    NS-1023
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    Accepted
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold">
                  Bathroom Fitting
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Requested by <b className="text-slate-700">Anand Kumar</b>
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar /> 26 Nov 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock /> 11:30 AM
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineLocationMarker /> Edappally, Kochi
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <p className="mr-2 text-xl font-extrabold">₹799</p>

                <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold">
                  View details
                </button>

                <button className="rounded-xl bg-[#eaf1d8] px-4 py-2.5 text-sm font-bold text-[#52752d]">
                  Mark completed
                </button>
              </div>

            </article>

            {/* Booking 3 */}
            <article className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:items-center">

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold text-slate-400">
                    NS-1022
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    Completed
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold">
                  Tap Installation
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Requested by <b className="text-slate-700">Meera S</b>
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar /> 22 Nov 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock /> 02:00 PM
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineLocationMarker /> Kakkanad, Kochi
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <p className="mr-2 text-xl font-extrabold">₹350</p>

                <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold">
                  View details
                </button>
              </div>

            </article>

            {/* Booking 4 */}
            <article className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:items-center">

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold text-slate-400">
                    NS-1021
                  </span>

                  <span className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600">
                    Cancelled
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold">
                  Drain Cleaning
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Requested by <b className="text-slate-700">Rahul Thomas</b>
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar /> 20 Nov 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock /> 04:00 PM
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiOutlineLocationMarker /> Aluva, Kerala
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <p className="mr-2 text-xl font-extrabold">₹599</p>

                <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold">
                  View details
                </button>
              </div>

            </article>

          </div>
        </section>

        {/* Booking Details Example */}
        <section className="surface-card mt-8 p-6">
          <div className="flex items-center gap-3">
            <HiOutlineClipboardList className="text-2xl text-emerald-700" />

            <div>
              <h2 className="text-xl font-extrabold">
                Booking details example
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Sample information for a customer request.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-sm text-slate-400">Customer</p>
              <p className="mt-1 font-bold">Priya Nair</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Phone number</p>
              <p className="mt-1 font-bold">+91 98765 12345</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Requested service</p>
              <p className="mt-1 font-bold">Pipe Leakage Repair</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Address</p>
              <p className="mt-1 font-bold">Kochi, Kerala</p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm text-slate-400">Customer description</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Water leakage under the kitchen sink. Please inspect and repair.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4 sm:col-span-2">
              <span className="font-bold">Estimated amount</span>
              <span className="text-xl font-extrabold">₹499</span>
            </div>

          </div>
        </section>

        <p className="mt-5 text-xs text-slate-400">
          Sample booking requests for frontend demonstration.
        </p>

      </main>
    </div>
  );
}

export default BookingRequests;
