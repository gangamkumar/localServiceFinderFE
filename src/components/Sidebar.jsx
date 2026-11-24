
import React from "react";
import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineLogout,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-[#172c35] text-white md:flex">

      <div className="flex items-center gap-2 border-b border-white/10 p-7 text-xl font-extrabold">
        <span className="rounded-lg bg-[#d9f36a] p-2 text-[#172c35]">
          <HiOutlineHome />
        </span>
        Near<span className="text-[#d9f36a]">Serve.</span>
      </div>

      <p className="px-6 pb-3 pt-8 text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400">
        Provider workspace
      </p>

      <nav className="flex-1 space-y-2 px-3">

        <Link to={'/provider/dashboard'} className="flex items-center gap-3 rounded-xl bg-[#d9f36a] px-4 py-3 text-sm font-bold text-[#172c35]">
          <HiOutlineHome className="text-xl" />
          Overview
        </Link>

        <Link to={'/provider/services'}
         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
          <HiOutlineBriefcase className="text-xl" />
          My services
        </Link>

        <Link to={'/provider/booking-requests'} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
          <HiOutlineClipboardList className="text-xl" />
          Booking requests
        </Link>

      </nav>

      <div className="m-4 rounded-xl bg-white/10 p-4">
        <HiOutlineShieldCheck className="mb-2 text-2xl text-[#d9f36a]" />

        <p className="text-sm font-bold">
          NearServe Pro
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Manage your workspace
        </p>
      </div>

      <div className="flex items-center gap-2 border-t border-white/10 p-5 text-sm text-slate-300 transition hover:text-white">
        <HiOutlineLogout />
        Back to website
      </div>

    </aside>
  );
}

export default Sidebar;
