import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Contact2Icon,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#f6f6f4]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Contact Us
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
              Let's move
              <br />
              forward
              <span className="optimized-text-gradient">
                {" "}together.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-500">
              Have a project, service requirement or business
              inquiry? Get in touch with the Optimized team.
            </p>

            <div className="mt-10 space-y-5">

              {/* OPERATIONS MANAGER */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Contact2Icon
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Operation's Manager
                  </p>

                  <p className="font-semibold">
                    Nasser Edrees
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <a
                href="tel:+97477505255"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Phone
                    size={20}
                    className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold transition-colors group-hover:text-orange-500">
                    +974 7750 5255
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:nasser.edrees@optimizedservices.com.qa"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Mail
                    size={20}
                    className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="break-all font-semibold transition-colors group-hover:text-orange-500">
                    nasser.edrees@optimizedservices.com.qa
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPin
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Location
                  </p>

                  <p className="font-semibold">
                    Doha, Qatar
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-[2rem] bg-black p-7 sm:p-10">

            <form className="space-y-5">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 transition-colors focus:border-orange-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 transition-colors focus:border-orange-500"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+974"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 transition-colors focus:border-orange-500"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 transition-colors focus:border-orange-500"
                />
              </div>

              {/* SEND */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-orange-500/20"
              >
                Send Inquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}