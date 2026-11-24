import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";

function Footer() {
  return (
    <footer className="mt-20 bg-[#172c35] pt-14 text-white">
      <div className="page-container grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-extrabold"
          >
            <span className="rounded-xl bg-[#d9f36a] p-2 text-[#172c35]">
              <HiOutlineLocationMarker />
            </span>
            Near<span className="text-[#d9f36a]">Serve.</span>
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Your neighbourhood, made more convenient. Find trusted local
            professionals for all the little jobs that make a house a home.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 font-bold text-[#d9f36a]">
            Find trusted services near you <HiArrowUpRight />
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-extrabold">Discover</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <Link className="block hover:text-[#d9f36a]" to="/services">
              All services
            </Link>
            <Link className="block hover:text-[#d9f36a]" to="/search">
              Find professionals
            </Link>
            <Link className="block hover:text-[#d9f36a]" to="/my-bookings">
              My bookings
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-extrabold">Your account</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <Link className="block hover:text-[#d9f36a]" to="/login">
              Log in
            </Link>
            <Link className="block hover:text-[#d9f36a]" to="/register">
              Create account
            </Link>
            <Link className="block hover:text-[#d9f36a]" to="/profile">
              My profile
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="page-container flex flex-col justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <span>© 2026 NearServe. All rights reserved.</span>
          <span>Find trusted services near you.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer