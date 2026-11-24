import { react } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import ServiceCard from "../components/ServiceCard";
import ProviderCard from "../components/ProviderCard";


function Home() {

  return (
    <main>
      <section className="overflow-hidden bg-[#f7f7f2] py-14 md:py-24">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1d8] px-4 py-2 text-xs font-extrabold text-[#52752d]">
              <HiOutlineCheckCircle /> YOUR NEIGHBOURHOOD, CONNECTED
            </span>

            <h1 className="mt-7 max-w-2xl font-[Manrope] text-5xl font-extrabold leading-[1.08] tracking-tight text-[#172c35] md:text-6xl">
              Great help is
              <span className="block text-[#719238]">closer than</span>
              you think.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Discover trusted local professionals for every job around your
              home. Compare, connect and book with confidence.
            </p>

            <form
              
              className="mt-9 rounded-2xl border border-[#e8e9df] bg-white p-3 shadow-xl shadow-slate-900/5"
            >
              <div className="grid gap-2 md:grid-cols-2">
                <label className="flex items-center gap-3 rounded-xl bg-[#f7f7f2] px-4 py-3">
                  <HiOutlineSearch className="text-xl text-[#719238]" />
                  <input
                   
                    placeholder="What service do you need?"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-xl bg-[#f7f7f2] px-4 py-3">
                  <HiOutlineLocationMarker className="text-xl text-[#719238]" />
                  <input
                 
                    placeholder="Your location"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>
              </div>

              <Link to={'/search'} className="accent-btn mt-2 w-full">
                Find professionals <HiArrowRight />
              </Link>
            </form>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-2"><HiOutlineShieldCheck className="text-lg text-emerald-700" /> Verified providers</span>
              <span className="flex items-center gap-2"><HiOutlineStar className="text-lg text-amber-500" /> Trusted reviews</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#d9f36a]/50 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1100"
              alt="Professional home service"
              className="relative h-[400px] w-full rounded-[32px] object-cover shadow-2xl md:h-[520px]"
            />

            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-xl md:-left-8 md:p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf1d8] text-2xl">⭐</div>
                <div>
                  <p className="text-xl font-extrabold">4.9/5</p>
                  <p className="text-xs text-slate-500">Customer satisfaction</p>
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-5 rounded-2xl bg-[#172c35] px-5 py-4 text-white shadow-xl">
              <p className="text-2xl font-extrabold text-[#d9f36a]">500+</p>
              <p className="text-xs text-slate-300">Local professionals</p>
            </div>
          </div>
        </div>
      </section>
 
      

<section className="bg-[#f8f9f4] py-20">
  <div className="page-container">

    <div className="mb-9 flex justify-between items-center">
      <div><p className="section-label">WHAT DO YOU NEED?</p>
      <h2 className="section-title mt-3">
        Explore popular services
      </h2>
      <p className="mt-3 text-slate-500">
        Everything your home needs, all in one place.
      </p></div>
       <Link to="/login" className="mt-20 font-bold text-emerald-800">
        Explore all <HiArrowRight className="inline" />
      </Link>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">🔧</div>
        <div className="flex justify-between me-5">
            <h3 className="mt-7 text-xl font-extrabold">Plumbing</h3>
        <Link to={'search?service=Plumbing'} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
        </div>
        <p className="mt-2 text-slate-500">Pipes, taps and repairs</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">120+ professionals</p>
        
      </div>

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">⚡</div>
       <div className="flex justify-between me-5">
         <h3 className="mt-7 text-xl font-extrabold">Electrical</h3>
        <Link className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
       </div>
        <p className="mt-2 text-slate-500">Wiring and electrical work</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">85+ professionals</p>
      </div>

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">🧹</div>
        <div className="flex justify-between me-5">
            <h3 className="mt-7 text-xl font-extrabold">Cleaning</h3>
        <Link  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
        </div>
        <p className="mt-2 text-slate-500">Home and office cleaning</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">95+ professionals</p>
      </div>

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">❄️</div>
     <div className="flex justify-between me-5">
           <h3 className="mt-7 text-xl font-extrabold">AC Repair</h3>
        <Link  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
     </div>
        <p className="mt-2 text-slate-500">Installation and servicing</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">60+ professionals</p>
      </div>

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">🪚</div>
       <div className="flex justify-between me-5">
         <h3 className="mt-7 text-xl font-extrabold">Carpentry</h3>
         <Link  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
       </div>
        <p className="mt-2 text-slate-500">Furniture and woodwork</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">45+ professionals</p>
      </div>

      <div className="surface-card p-7">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl">🎨</div>
        <div className="flex justify-between me-5">
            <h3 className="mt-7 text-xl font-extrabold">Painting</h3>
          <Link  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
                  <HiArrowUpRight />
                </Link>
        </div>
        <p className="mt-2 text-slate-500">Interior and exterior painting</p>
        <p className="mt-5 text-sm font-bold text-emerald-800">70+ professionals</p>
      </div>

    </div>
  </div>
</section>
     

<section className="bg-[#eef0e6] py-20">
  <div className="page-container">

    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="section-label">HANDPICKED FOR YOU</p>
        <h2 className="section-title mt-3">
          Trusted professionals
        </h2>
        <p className="mt-3 text-slate-500">
          Meet some of our highly rated service providers.
        </p>
      </div>

      <Link to={'/login'} className="flex items-center gap-2 font-bold text-emerald-800">
        Explore all
        <HiArrowRight />
      </Link>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <div className="group overflow-hidden rounded-3xl border border-[#e5e7dc] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-52 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700"
            alt="Plumbing professional"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-800">
            ✓ Verified
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#f0f4e4] px-3 py-1 text-xs font-bold text-[#52752d]">
              Plumbing
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
              ★ 4.9 <span className="text-slate-400 font-normal">(128)</span>
            </span>
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-[#172c35]">
            Arun Kumar
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            📍 Kochi, Kerala
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs text-slate-400">Starting from</p>
              <p className="text-xl font-extrabold text-[#172c35]">
                ₹499 <span className="text-xs font-normal text-slate-400">/ service</span>
              </p>
            </div>

            <Link to={'/provider/1'} className="rounded-xl bg-[#172c35] px-4 py-3 text-sm font-bold text-white">
              View Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="group overflow-hidden rounded-3xl border border-[#e5e7dc] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-52 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700"
            alt="Electrical professional"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-800">
            ✓ Verified
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#f0f4e4] px-3 py-1 text-xs font-bold text-[#52752d]">
              Electrical
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
              ★ 4.8 <span className="text-slate-400 font-normal">(96)</span>
            </span>
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-[#172c35]">
            Rahul Thomas
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            📍 Trivandrum, Kerala
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs text-slate-400">Starting from</p>
              <p className="text-xl font-extrabold text-[#172c35]">
                ₹599 <span className="text-xs font-normal text-slate-400">/ service</span>
              </p>
            </div>

            <Link className="rounded-xl bg-[#172c35] px-4 py-3 text-sm font-bold text-white">
              View Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="group overflow-hidden rounded-3xl border border-[#e5e7dc] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-52 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700"
            alt="Cleaning professional"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-800">
            ✓ Verified
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#f0f4e4] px-3 py-1 text-xs font-bold text-[#52752d]">
              Cleaning
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
              ★ 4.7 <span className="text-slate-400 font-normal">(84)</span>
            </span>
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-[#172c35]">
            Anjali Services
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            📍 Kochi, Kerala
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs text-slate-400">Starting from</p>
              <p className="text-xl font-extrabold text-[#172c35]">
                ₹799 <span className="text-xs font-normal text-slate-400">/ service</span>
              </p>
            </div>

            <Link className="rounded-xl bg-[#172c35] px-4 py-3 text-sm font-bold text-white">
              View Profile
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </main>
  );
}

export default Home