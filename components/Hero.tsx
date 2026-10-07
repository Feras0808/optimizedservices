import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Recycle,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28"
    >
      {/* Decorative orange shape */}
      <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid min-h-[calc(100vh-112px)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <Leaf
                size={16}
                className="text-orange-500"
              />

              <span className="text-sm font-semibold text-orange-600">
                Sustainability in Motion
              </span>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gray-400">
              Optimized Services & Transportation
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#191919] sm:text-6xl lg:text-[72px]">

              Moving Business.
              <br />

              <span className="bg-gradient-to-r from-[#ff9d00] via-[#ff6a00] to-[#f04438] bg-clip-text text-transparent">
                Moving Forward.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
              Reliable transportation and environmental services
              built around efficiency, sustainability and responsible
              operations.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              Founded in 2016, Optimized Services & Transportation
              provides non-hazardous waste transportation, recycling,
              sewage services and shuttle bus solutions across Qatar.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-500"
              >
                Explore Our Services

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                Contact Us
              </a>

            </div>

            {/* Features */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-orange-500"
                />

                <span className="text-sm font-medium text-gray-600">
                  Modern Fleet
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-orange-500"
                />

                <span className="text-sm font-medium text-gray-600">
                  Eco-Conscious Operations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-orange-500"
                />

                <span className="text-sm font-medium text-gray-600">
                  Reliable Transportation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-orange-500"
                />

                <span className="text-sm font-medium text-gray-600">
                  Established Since 2016
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Decorative shape */}
            <div className="absolute -right-5 -top-5 z-0 h-40 w-40 rounded-full bg-orange-500/10" />

            <div className="absolute -bottom-8 -left-8 z-0 h-32 w-32 rounded-full bg-orange-100" />

            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-[2rem]">

              <img
                src="/Hero.png"
                alt="Optimized Services and Transportation"
                className="h-[520px] w-full object-contain sm:h-[900px]"
              />

              {/* Small gradient only at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />

              {/* Image card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                    <Recycle
                      size={23}
                      className="text-orange-500"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Sustainability at the Core
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Reuse. Repurpose. Reduce.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* 2016 badge */}
            <div className="absolute -left-5 top-16 z-20 hidden rounded-2xl bg-[#171717] px-6 py-5 shadow-xl sm:block">

              <p className="text-3xl font-bold text-white">
                2016
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Established
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}