
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
} from "react-icons/hi";

function Booking() {
  return (
    <main className="page-container py-12">
    
      <div>
        <p className="section-label">BOOK A SERVICE</p>

        <h1 className="section-title mt-3">
          Let's get the job done.
        </h1>

        <p className="mt-3 text-slate-500">
          Share a few details to prepare your service request.
        </p>
      </div>

      <div className="mt-9 grid items-start gap-7 lg:grid-cols-[1fr_350px]">

        <div className="surface-card p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-[#172c35]">
            Booking details
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Provide your preferred date, time and service location.
          </p>

          <div className="mt-7">
            <label className="mb-2 block text-sm font-bold text-[#172c35]">
              Service date
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-[#e1e5dc] px-4">
              <HiOutlineCalendar className="text-xl text-[#719238]" />

              <input
                type="date"
                className="w-full py-3.5 outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#172c35]">
              Preferred time
            </label>

            <select className="form-field">
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
              <option>04:00 PM</option>
              <option>05:00 PM</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#172c35]">
              Service address
            </label>

            <div className="flex items-start gap-3 rounded-xl border border-[#e1e5dc] px-4">
              <HiOutlineLocationMarker className="mt-4 text-xl text-[#719238]" />

              <textarea
                rows={3}
                placeholder="Enter your complete address"
                className="w-full resize-none py-3.5 outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#172c35]">
              Describe your requirement
            </label>

            <div className="flex items-start gap-3 rounded-xl border border-[#e1e5dc] px-4">
              <HiOutlineClipboardList className="mt-4 text-xl text-[#719238]" />

              <textarea
                rows={4}
                placeholder="Tell us what service you need..."
                className="w-full resize-none py-3.5 outline-none"
              />
            </div>
          </div>

          <div className="accent-btn mt-7 w-full cursor-default text-center">
            Confirm booking request
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">
            Demonstration only. No real booking will be created.
          </p>
        </div>

        <aside className="surface-card p-6">
          <p className="section-label">YOUR SELECTION</p>

          <h2 className="mt-3 text-xl font-extrabold text-[#172c35]">
            Service booking
          </h2>

          <div className="mt-6 rounded-xl bg-[#f1f4e8] p-4">
            <p className="text-sm font-bold text-[#172c35]">
              Selected professional
            </p>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9f36a] text-lg font-extrabold text-[#172c35]">
                AK
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#172c35]">
                  Arun Kumar
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Plumbing service
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-[#719238]">
              <HiOutlineCheckCircle className="text-lg" />
              Verified professional
            </div>
          </div>

          <div className="mt-6 space-y-4 border-b border-slate-100 pb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Service charge</span>
              <b className="text-[#172c35]">₹499</b>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Booking fee</span>
              <b className="text-[#172c35]">₹0</b>
            </div>
          </div>

          <div className="mt-5 flex justify-between text-lg font-extrabold text-[#172c35]">
            <span>Estimated total</span>
            <span>₹499</span>
          </div>

          <div className="mt-6 rounded-xl bg-[#f7f7f2] p-4">
            <div className="flex items-center gap-2">
              <HiOutlineShieldCheck className="text-xl text-[#719238]" />

              <p className="text-sm font-bold text-[#172c35]">
                Safe and reliable service
              </p>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Connect with verified local professionals for your home service needs.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            Choose your professional before booking.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Booking;
