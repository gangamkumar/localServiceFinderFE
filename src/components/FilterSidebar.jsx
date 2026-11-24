import React from "react";

function FilterSidebar() {
  return (
    <aside className="surface-card h-fit p-5">

      <h3 className="text-lg font-extrabold">
        Refine results
      </h3>

      <div className="mt-5 border-t border-slate-100 pt-5">

        <p className="mb-3 text-sm font-bold">
          Maximum price
        </p>

        <input
          type="range"
          min="200"
          max="2000"
          defaultValue="2000"
          className="w-full accent-[#789a38]"
        />

        <div className="flex justify-between text-xs text-slate-500">
          <span>₹200</span>
          <b>₹2000</b>
        </div>

      </div>

      <div className="mt-5 border-t border-slate-100 pt-5">

        <p className="mb-3 text-sm font-bold">
          Minimum rating
        </p>

        <select className="form-field w-full">
          <option>Any rating</option>
          <option>4.0+ stars</option>
          <option>4.5+ stars</option>
          <option>4.8+ stars</option>
        </select>

      </div>

      <label className="mt-5 flex items-center gap-2 text-sm font-semibold">

        <input
          type="checkbox"
          className="accent-[#789a38]"
        />

        Verified providers only

      </label>

    </aside>
  );
}

export default FilterSidebar;
