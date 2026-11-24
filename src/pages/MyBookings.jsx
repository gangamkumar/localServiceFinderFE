
import {
  HiOutlineClipboardList,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
} from "react-icons/hi";

function MyBookings() {
  return (
    <main className="page-container py-12">

      <p className="section-label">YOUR ACTIVITY</p>

      <h1 className="section-title mt-3">My Bookings</h1>

      <p className="mt-3 text-slate-500">
        Keep track of your service requests and previous bookings.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

        <div className="surface-card p-5">
          <p className="text-sm text-slate-500">Total Bookings</p>
          <p className="mt-2 text-3xl font-extrabold">4</p>
        </div>

        <div className="surface-card p-5">
          <p className="text-sm text-slate-500">Pending</p>
          <p className="mt-2 text-3xl font-extrabold text-amber-500">1</p>
        </div>

        <div className="surface-card p-5">
          <p className="text-sm text-slate-500">Accepted</p>
          <p className="mt-2 text-3xl font-extrabold text-blue-600">1</p>
        </div>

        <div className="surface-card p-5">
          <p className="text-sm text-slate-500">Completed</p>
          <p className="mt-2 text-3xl font-extrabold text-emerald-600">1</p>
        </div>

      </div>

      <div className="mt-9 flex flex-wrap gap-2 border-b border-[#e1e5dc] pb-4">

        <span className="rounded-full bg-[#172c35] px-5 py-2 text-sm font-bold text-white">
          All
        </span>

        <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-600">
          Pending
        </span>

        <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-600">
          Accepted
        </span>

        <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-600">
          Completed
        </span>

        <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-600">
          Cancelled
        </span>

      </div>

      <section className="mt-6 space-y-4">

        <div className="surface-card p-6">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Plumbing
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#172c35]">
                Arun Kumar
              </h3>
            </div>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              Accepted
            </span>

          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">

            <p className="flex items-center gap-2">
              <HiOutlineLocationMarker /> Kochi, Kerala
            </p>

            <p className="flex items-center gap-2">
              <HiOutlineCalendar /> 25 November 2026
            </p>

          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Service Price</p>
            <p className="text-xl font-extrabold text-[#172c35]">₹499</p>
          </div>

        </div>

        <div className="surface-card p-6">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Electrical
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#172c35]">
                Rahul Thomas
              </h3>
            </div>

            <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              Pending
            </span>

          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">

            <p className="flex items-center gap-2">
              <HiOutlineLocationMarker /> Trivandrum, Kerala
            </p>

            <p className="flex items-center gap-2">
              <HiOutlineCalendar /> 28 November 2026
            </p>

          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Service Price</p>
            <p className="text-xl font-extrabold text-[#172c35]">₹599</p>
          </div>

        </div>

        <div className="surface-card p-6">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Home Cleaning
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#172c35]">
                Anjali Services
              </h3>
            </div>

            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              Completed
            </span>

          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">

            <p className="flex items-center gap-2">
              <HiOutlineLocationMarker /> Kochi, Kerala
            </p>

            <p className="flex items-center gap-2">
              <HiOutlineCalendar /> 12 November 2026
            </p>

          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Service Price</p>
            <p className="text-xl font-extrabold text-[#172c35]">₹799</p>
          </div>

        </div>

        <div className="surface-card p-6">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                AC Repair
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#172c35]">
                CoolCare Services
              </h3>
            </div>

            <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700">
              Cancelled
            </span>

          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">

            <p className="flex items-center gap-2">
              <HiOutlineLocationMarker /> Trivandrum, Kerala
            </p>

            <p className="flex items-center gap-2">
              <HiOutlineCalendar /> 08 November 2026
            </p>

          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Service Price</p>
            <p className="text-xl font-extrabold text-[#172c35]">₹899</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default MyBookings;
