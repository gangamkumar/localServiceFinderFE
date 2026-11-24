
import Sidebar from "../components/Sidebar";
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineSearch,
  HiOutlineBriefcase,
} from "react-icons/hi";

function ManageServices() {
  return (
    <div className="min-h-screen bg-[#f5f6f0] md:flex">
      <Sidebar type="provider" />

      <main className="min-w-0 flex-1 px-4 py-7 md:px-8 lg:px-10">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-label">YOUR BUSINESS</p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#172c35]">
              Manage Services
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Organise and maintain the services you offer.
            </p>
          </div>

          <button className="accent-btn">
            <HiOutlinePlus /> Add new service
          </button>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Total services</p>
            <p className="mt-2 text-3xl font-extrabold">05</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Active services</p>
            <p className="mt-2 text-3xl font-extrabold text-emerald-700">
              04
            </p>
          </div>

          <div className="surface-card p-5">
            <p className="text-sm text-slate-500">Inactive services</p>
            <p className="mt-2 text-3xl font-extrabold text-slate-500">
              01
            </p>
          </div>

        </section>

        {/* Add Service Form - Static Design */}
        <section className="surface-card mt-7 p-6">
          <h2 className="text-xl font-extrabold">
            Add a new service
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Provide the details of the service you offer.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold">
                Service name
              </label>
              <input
                type="text"
                placeholder="e.g. Pipe repair"
                className="form-field"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Category
              </label>
              <select className="form-field" defaultValue="Plumbing">
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Cleaning</option>
                <option>AC Repair</option>
                <option>Carpentry</option>
                <option>Painting</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Price (₹)
              </label>
              <input
                type="number"
                placeholder="Enter service price"
                className="form-field"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Estimated duration
              </label>
              <input
                type="text"
                placeholder="e.g. 1 hour"
                className="form-field"
              />
            </div>

          </div>

          <button className="accent-btn mt-6">
            <HiOutlinePlus /> Add service
          </button>
        </section>

        {/* Service Listings */}
        <section className="surface-card mt-7 overflow-hidden">

          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h2 className="text-xl font-extrabold">
                Your service listings
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                5 services in your catalogue
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5">
              <HiOutlineSearch className="text-lg text-slate-400" />
              <input
                type="text"
                placeholder="Search services"
                className="w-40 text-sm outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">

              <thead className="bg-[#f7f8f3] text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">Pipe Leakage Repair</td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 font-extrabold">₹499</td>
                  <td className="px-6 py-5 text-slate-500">1 hour</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-700">
                        <HiOutlinePencil />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">Bathroom Fitting</td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 font-extrabold">₹799</td>
                  <td className="px-6 py-5 text-slate-500">2 hours</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-700">
                        <HiOutlinePencil />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">Tap Installation</td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 font-extrabold">₹350</td>
                  <td className="px-6 py-5 text-slate-500">45 minutes</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-700">
                        <HiOutlinePencil />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">Drain Cleaning</td>
                  <td className="px-6 py-5 text-slate-500">Plumbing</td>
                  <td className="px-6 py-5 font-extrabold">₹599</td>
                  <td className="px-6 py-5 text-slate-500">1 hour</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-700">
                        <HiOutlinePencil />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#fafbf8]">
                  <td className="px-6 py-5 font-bold">Water Tank Cleaning</td>
                  <td className="px-6 py-5 text-slate-500">Cleaning</td>
                  <td className="px-6 py-5 font-extrabold">₹999</td>
                  <td className="px-6 py-5 text-slate-500">2 hours</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-700">
                        <HiOutlinePencil />
                      </button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-5 text-xs text-slate-400">
          Sample service listings for frontend demonstration.
        </p>

      </main>
    </div>
  );
}

export default ManageServices;
