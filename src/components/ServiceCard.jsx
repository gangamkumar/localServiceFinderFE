
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineLightningBolt } from "react-icons/hi";

function ServiceCard() {
  return (
    <article className="surface-card group p-5 transition hover:-translate-y-1 hover:border-[#c8dc8a] hover:shadow-lg">

      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f0f4e4] text-3xl text-[#496b2b]">
        <HiOutlineLightningBolt />
      </div>

      <div className="mt-5 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-extrabold">
            Electrical Services
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Professional electrical repairs, installations and maintenance services.
          </p>
        </div>

        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#172c35] text-white transition group-hover:bg-[#d9f36a] group-hover:text-[#172c35]">
          <HiArrowUpRight />
        </span>
      </div>

      <p className="mt-4 text-xs font-bold text-emerald-800">
        25+ Service Providers
      </p>

    </article>
  );
}

export default ServiceCard;
