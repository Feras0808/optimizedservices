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

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Contact2Icon size={20} className="text-orange-500" />
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

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Phone size={20} className="text-orange-500" />
                </div>
                

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +974 7750 5255
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Mail size={20} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="font-semibold">
                    nasser.edrees@optimizedservices.com.qa
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPin size={20} className="text-orange-500" />
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

          <div className="rounded-[2rem] bg-black p-7 sm:p-10">

            <form className="space-y-5">

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+974"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 font-semibold text-white"
              >
                Send Inquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:rotate-45"
                />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}