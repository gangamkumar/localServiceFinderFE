
import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function BookingCard() {
  return (
    <article className="surface-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
          Home Cleaning
        </p>

        <h3 className="mt-1 text-lg font-extrabold">
          John Mathew
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <HiOutlineCalendar />
            25 November 2026
          </span>

          <span className="inline-flex items-center gap-1">
            <HiOutlineLocationMarker />
            Trivandrum
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
        <b className="text-xl">₹1,500</b>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          Confirmed
        </span>
      </div>

    </article>
  );
}

export default BookingCard;
