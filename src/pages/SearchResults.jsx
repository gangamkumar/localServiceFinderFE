import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineAdjustments,
  HiOutlineSearch,
  HiOutlineCheckCircle,
  HiOutlineStar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function SearchResults() {
  return (
    <main className="page-container py-12">

      <div className="mb-9">
        <p className="section-label">FIND YOUR PROFESSIONAL</p>

        <h1 className="section-title mt-3">
          Local experts, ready to help.
        </h1>

        <p className="mt-3 text-slate-500">
          Compare services, prices and customer ratings.
        </p>
      </div>

      <div className="mb-8 grid gap-3 rounded-2xl border border-[#e8e9df] bg-white p-4 md:grid-cols-[1fr_auto]">

        <div className="flex items-center gap-3 rounded-xl border border-[#e5e7dc] px-4 py-3">
          <HiOutlineSearch className="text-xl text-emerald-700" />

          <input
            type="text"
            placeholder="Search by service or professional"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-[#f7f7f2] px-5 py-3 text-sm font-semibold text-slate-600">
          <HiOutlineLocationMarker className="text-lg text-emerald-700" />
          Kerala
        </div>

      </div>

      
      <div className="grid items-start gap-7 lg:grid-cols-[260px_1fr]">
        <aside>

          <div className="mb-3 flex items-center gap-2 font-extrabold text-[#172c35]">
            <HiOutlineAdjustments className="text-xl" />
            Filters
          </div>

          <div className="surface-card p-6">

            <h3 className="text-lg font-extrabold">
              Refine results
            </h3>

            <div className="my-6 border-t border-slate-100" />

            <div>
              <label className="text-sm font-bold">
                Maximum price
              </label>

              <input
                type="range"
                min="200"
                max="20000"
                defaultValue="2000"
                className="mt-5 w-full accent-[#719238]"
              />

              <div className="flex justify-between text-sm text-slate-500">
                <span>₹200</span>
                <span>₹20000</span>
              </div>
            </div>

            <div className="my-6 border-t border-slate-100" />

            <div>
              <label className="text-sm font-bold">
                Minimum rating
              </label>

              <select className="form-field mt-3 w-full">
                <option>Any rating</option>
                <option>4.0 and above</option>
                <option>4.5 and above</option>
              </select>
            </div>

            <label className="mt-6 flex items-center gap-3 text-sm font-semibold">
              <input type="checkbox" className="accent-[#719238]" />
              Verified providers only
            </label>

          </div>

          <div className="surface-card mt-4 flex items-center gap-3 p-4 text-sm font-bold">
            <input type="checkbox" className="accent-[#719238]" />
            Emergency services only
          </div>

        </aside>

        <section>

          <div className="mb-5">
            <h2 className="text-xl font-extrabold text-[#172c35]">
              6 professionals found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Browse available local service providers
            </p>
          </div>

          <div className="mb-6">
            <select className="form-field w-full">
              <option>Recommended</option>
              <option>Price: Low to high</option>
              <option>Top rated</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="surface-card overflow-hidden">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700"
                  alt="Arun Kumar"
                  className="h-52 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-emerald-700">
                  ✓ Verified
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-rose-600 px-3 py-2 text-xs font-bold text-white">
                  Emergency
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  PLUMBING
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Arun Kumar
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Kochi, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.9 <span className="font-normal text-slate-400">(128 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹499 / visit</p>
                </div>

                <Link to={'/provider/1'} className="primary-btn mt-5 w-full text-center">
                  View Profile
                </Link>
              </div>
            </div>

            <div className="surface-card overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700"
                  alt="Rahul Thomas"
                  className="h-52 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-emerald-700">
                  ✓ Verified
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  ELECTRICAL
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Rahul Thomas
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Trivandrum, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.8 <span className="font-normal text-slate-400">(96 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹599 / visit</p>
                </div>

                <div className="primary-btn mt-5 w-full text-center">
                  View Profile
                </div>
              </div>
            </div>


            <div className="surface-card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700"
                alt="Anjali Services"
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  CLEANING
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Anjali Services
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Kochi, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.7 <span className="font-normal text-slate-400">(84 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹799 / visit</p>
                </div>

                <div className="primary-btn mt-5 w-full text-center">
                  View Profile
                </div>
              </div>
            </div>

        
            <div className="surface-card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700"
                alt="Suresh Electricals"
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  ELECTRICAL
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Suresh Electricals
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Kollam, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.5 <span className="font-normal text-slate-400">(72 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹450 / visit</p>
                </div>

                <div className="primary-btn mt-5 w-full text-center">
                  View Profile
                </div>
              </div>
            </div>

        
            <div className="surface-card overflow-hidden">
              <div className="relative">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/072/709/110/small/man-cleaning-an-air-conditioner-with-a-pressure-washer-photo.jpg"
                  alt="CoolCare Services"
                  className="h-52 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-emerald-700">
                  ✓ Verified
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-rose-600 px-3 py-2 text-xs font-bold text-white">
                  Emergency
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  AC REPAIR
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  CoolCare Services
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Trivandrum, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.9 <span className="font-normal text-slate-400">(110 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹899 / visit</p>
                </div>

                <div className="primary-btn mt-5 w-full text-center">
                  View Profile
                </div>
              </div>
            </div>

        
            <div className="surface-card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700"
                alt="Joseph Wood Works"
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs font-extrabold text-emerald-700">
                  CARPENTRY
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Joseph Wood Works
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Kochi, Kerala
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm font-bold">
                    <HiOutlineStar className="text-amber-500" />
                    4.6 <span className="font-normal text-slate-400">(54 reviews)</span>
                  </p>

                  <p className="font-extrabold">₹650 / visit</p>
                </div>

                <div className="primary-btn mt-5 w-full text-center">
                  View Profile
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>

      
      <div className="mt-12 text-center">
        <p className="font-bold text-emerald-800">
          Explore other service categories →
        </p>
      </div>

    </main>
  );
}

export default SearchResults;
