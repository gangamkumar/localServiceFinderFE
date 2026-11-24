
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";

function StatsCard() {
  return (
    <div className="surface-card p-5">

      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">
          Total Bookings
        </p>

        <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-50 text-xl text-lime-800">
          <HiOutlineUsers />
        </span>
      </div>

      <h3 className="mt-5 text-3xl font-extrabold tracking-tight">
        125
      </h3>

      <p className="mt-2 text-xs font-bold text-emerald-700">
        +12% from last month
      </p>

    </div>
  );
}

export default StatsCard;
