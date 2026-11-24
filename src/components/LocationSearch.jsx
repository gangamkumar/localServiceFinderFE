
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

function LocationSearch() {
  return (
    <label className="flex min-w-0 items-center gap-3 rounded-xl border border-[#e1e5dc] bg-white px-4 py-3.5">
      <HiOutlineLocationMarker className="shrink-0 text-xl text-emerald-800" />

      <input
        type="text"
        className="w-full min-w-0 bg-transparent text-sm outline-none"
        placeholder="Enter your location"
      />
    </label>
  );
}

export default LocationSearch;
