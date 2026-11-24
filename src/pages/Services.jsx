import React from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main>

      <section className="bg-[#172c35] py-16 text-white md:py-20">
        <div className="page-container">

          <p className="text-xs font-extrabold tracking-[.2em] text-[#d9f36a]">
            EXPLORE NEARSERVE
          </p>

          <h1 className="mt-4 max-w-2xl font-[Manrope] text-4xl font-extrabold md:text-5xl">
            One place for all your everyday service needs.
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            From quick repairs to home improvements, discover professionals
            ready to help in your neighbourhood.
          </p>

          <Link to={'/search'} className="accent-btn mt-7 w-fit">
            Find a professional <HiArrowRight />
          </Link>

        </div>
      </section>

      <section className="page-container py-16">

        <div className="mb-9">
          <p className="section-label">OUR CATEGORIES</p>

          <h2 className="section-title mt-3">
            Explore all services
          </h2>

          <p className="mt-3 text-slate-500">
            Choose a category to discover available professionals.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🔧
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Plumbing</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fix leaks, taps, pipes and bathroom fittings.
                </p>
              </div>

              <Link to={'/search?service=Plumbing'} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </Link>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              120+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              ⚡
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Electrical</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Wiring, lighting, installations and repairs.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              85+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🧹
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Cleaning</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Professional home and office cleaning.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              95+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              ❄️
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">AC Repair</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  AC installation, servicing and maintenance.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              60+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🪚
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Carpentry</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Furniture repairs, fittings and woodwork.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              45+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🎨
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Painting</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Interior and exterior painting services.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              70+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🛠️
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Appliance Repair</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Repair and maintenance for home appliances.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              55+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🌱
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Gardening</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Garden care, landscaping and maintenance.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              35+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🐜
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Pest Control</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Home and office pest inspection and treatment.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              40+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🚗
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Mechanic</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Vehicle maintenance and repair services.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              50+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              📦
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Moving Services</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Packing, shifting and relocation assistance.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              30+ professionals
            </p>
          </div>

          <div className="surface-card group p-6 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">
              🏠
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-extrabold">Home Renovation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Home improvement and renovation services.
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white">
                <HiArrowUpRight />
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-emerald-800">
              25+ professionals
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;
