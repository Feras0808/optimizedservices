import {
  ArrowUpRight,
  CalendarDays,
  Recycle,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/Waste Transport.jpg"
                alt="Optimized transportation operations"
                className="h-[full] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-medium text-white/70">
                  Established
                </p>

                <p className="text-5xl font-bold text-white">
                  2016
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              About Optimized
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#111] sm:text-5xl">
              Transportation
              <br />
              with a
              <span className="optimized-text-gradient">
                {" "}purpose.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Founded in 2016, Optimized Services and Transportation
              takes pride in its commitment to sustainability and
              operational excellence.
            </p>

            <p className="mt-5 leading-7 text-gray-500">
              Operating a contemporary fleet, we provide reliable
              transportation solutions while incorporating eco-friendly
              practices into the core of our operations.
            </p>

            <p className="mt-5 leading-7 text-gray-500">
              From non-hazardous waste transportation and recycling
              to sewage services and shuttle bus operations, we work
              to ensure that every part of our business contributes
              to a cleaner and more efficient future.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-[#f6f6f4] p-5">
                <CalendarDays
                  className="mb-3 text-orange-500"
                  size={25}
                />

                <p className="text-2xl font-bold">
                  2016
                </p>

                <p className="text-sm text-gray-500">
                  Founded
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6f6f4] p-5">
                <Recycle
                  className="mb-3 text-orange-500"
                  size={25}
                />

                <p className="text-2xl font-bold">
                  Eco
                </p>

                <p className="text-sm text-gray-500">
                  Focused Operations
                </p>
              </div>

            </div>

            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 font-semibold text-black"
            >
              Explore our services

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-orange-500">
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:rotate-45"
                />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}