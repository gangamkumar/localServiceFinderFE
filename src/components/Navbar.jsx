import { react } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineLocationMarker,
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";

function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e9df] bg-[#f7f7f2]/95 backdrop-blur-xl">
      <nav className="page-container flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#172c35] text-2xl text-[#d9f36a]">
            <HiOutlineLocationMarker />
          </span>
          <span className="text-[23px] font-extrabold tracking-tight text-[#172c35]">
            Near<span className="text-[#62842f]">Serve.</span>
          </span>
        </Link>

        <div className="text-sm font-semibold items-center gap-8 lg:flex">
          <Link to={'/'}>Home</Link>
          <Link to={'/services'}>Explore Services</Link>
          <Link to={'/search'}>Find Professionals</Link>
          <Link to={'/my-bookings'}>My Bookings</Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="px-3 py-3 text-sm font-bold text-[#172c35]">
            Log in
          </Link>
          <Link to="/register" className="accent-btn !px-5 !py-3 text-sm">
            Get started
          </Link>
        </div>

        <button
          className="text-2xl lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
           
            <Link to="/login" className="font-bold">
              Log in
            </Link>
            <Link
              to="/register"
              className="accent-btn"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar