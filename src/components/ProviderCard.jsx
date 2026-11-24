import React from "react";
import {
  HiOutlineLocationMarker,
  HiBadgeCheck,
} from "react-icons/hi";
import RatingStars from "./RatingStars";

function ProviderCard() {
  return (
    <article className="surface-card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-48 overflow-hidden bg-[#e9eee3]">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700"
          alt="Service Provider"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-extrabold text-emerald-800 shadow">
          <HiBadgeCheck /> Verified
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-rose-600 px-3 py-2 text-xs font-bold text-white">
          Emergency
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
          Electrical Services
        </p>

        <h3 className="mt-2 text-xl font-extrabold">
          John Mathew
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
          <HiOutlineLocationMarker />
          Trivandrum, Kerala
        </p>

        <div className="mt-4 flex items-center justify-between">
          <RatingStars />

          <b className="text-lg">
            ₹800
            <span className="text-xs font-medium text-slate-400">
              {" "} / visit
            </span>
          </b>
        </div>

        <button className="primary-btn mt-5 w-full">
          View profile
        </button>
      </div>

    </article>
  );
}

export default ProviderCard;
