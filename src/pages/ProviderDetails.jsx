import React from "react";
import {
  HiBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineStar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function ProviderDetails() {
  return (
    <main className="page-container py-12">

      <p className="text-sm font-bold text-emerald-800">
        ← Back to professionals
      </p>

      <section className="surface-card mt-7 overflow-hidden">

        <div className="grid lg:grid-cols-[340px_1fr]">

          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1000"
            alt="Arun Kumar"
            className="h-72 w-full object-cover lg:h-full"
          />

          <div className="p-6 md:p-9">

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-[#eaf1d8] px-3 py-1.5 text-xs font-extrabold text-emerald-800">
                Professional Plumber
              </span>

              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                <HiBadgeCheck /> Verified provider
              </span>

            </div>

            <h1 className="mt-5 font-[Manrope] text-3xl font-extrabold md:text-4xl">
              Arun Kumar
            </h1>

            <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">

              <span className="flex items-center gap-1.5">
                <HiOutlineStar className="text-amber-500" />
                4.9 (128 reviews)
              </span>

              <span className="flex items-center gap-1.5">
                <HiOutlineLocationMarker />
                Kochi, Kerala
              </span>

              <span className="flex items-center gap-1.5">
                <HiOutlineClock />
                8 years experience
              </span>

            </div>

            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Experienced plumbing professional providing reliable home
              repair, installation and maintenance services. Committed
              to delivering quality work and customer satisfaction.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-slate-100 pt-6">

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Starting price
                </p>

                <p className="mt-1 text-3xl font-extrabold">
                  ₹499
                </p>

                <p className="text-xs text-slate-400">
                  Per visit
                </p>
              </div>

              <Link to={'/booking'} className="accent-btn">
                <HiOutlineCalendar />
                Book this professional
              </Link>

            </div>

          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_340px]">

        <section className="surface-card p-6 md:p-8">

          <h2 className="text-2xl font-extrabold">
            Services offered
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Services available from this professional.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-xl bg-[#f5f7ef] p-4 text-sm font-semibold">
              <HiBadgeCheck className="text-xl text-emerald-700" />
              Pipe leakage repair
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#f5f7ef] p-4 text-sm font-semibold">
              <HiBadgeCheck className="text-xl text-emerald-700" />
              Bathroom fittings
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#f5f7ef] p-4 text-sm font-semibold">
              <HiBadgeCheck className="text-xl text-emerald-700" />
              Tap installation
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#f5f7ef] p-4 text-sm font-semibold">
              <HiBadgeCheck className="text-xl text-emerald-700" />
              Drain cleaning
            </div>

          </div>

        </section>

        <aside className="surface-card h-fit p-6">

          <h3 className="text-lg font-extrabold">
            Contact information
          </h3>

          <div className="mt-5 space-y-4 text-sm text-slate-600">

            <p className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-xl text-emerald-700" />
              Kochi, Kerala
            </p>

            <p className="flex items-center gap-3">
              <HiOutlinePhone className="text-xl text-emerald-700" />
              Contact details available after booking
            </p>

          </div>

          <Link to={'/booking'} className="primary-btn mt-6 w-full text-center">
            Book now
          </Link>

        </aside>

      </div>

      <section className="surface-card mt-8 p-6 md:p-8">

        <p className="section-label">
          CUSTOMER FEEDBACK
        </p>

        <h2 className="mt-2 text-2xl font-extrabold">
          Reviews and ratings
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl bg-[#f7f7f2] p-5">

            <div className="flex gap-1 text-amber-500">
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>

            <h3 className="mt-3 font-extrabold">
              Excellent service!
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Very professional and completed the work on time.
            </p>

            <p className="mt-4 text-xs font-bold text-slate-700">
              Priya S.
            </p>

          </div>

          <div className="rounded-xl bg-[#f7f7f2] p-5">

            <div className="flex gap-1 text-amber-500">
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>

            <h3 className="mt-3 font-extrabold">
              Highly recommended
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Good communication and reasonable pricing.
            </p>

            <p className="mt-4 text-xs font-bold text-slate-700">
              Anand K.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProviderDetails;
