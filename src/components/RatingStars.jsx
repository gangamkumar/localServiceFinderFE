
import React from "react";
import { FaStar } from "react-icons/fa";

function RatingStars() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm">
      <FaStar className="text-amber-400" />

      <b>4.8</b>

      <span className="text-xs text-slate-400">
        (120 reviews)
      </span>
    </span>
  );
}

export default RatingStars;
