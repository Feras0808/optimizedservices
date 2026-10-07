import {
  ArrowRight,
  Leaf,
  Recycle,
  RefreshCcw,
} from "lucide-react";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-[#151515] py-24 lg:py-32"
    >
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Sustainability
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Sustainability is at
              <br />
              the heart of
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}what we do.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              We actively promote the reuse and repurposing of
              materials, reducing unnecessary waste and supporting
              a more circular economy.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-white"
            >
              Work with us

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <Recycle className="text-orange-400" size={30} />

              <h3 className="mt-7 text-xl font-bold text-white">
                Reuse
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Encouraging the reuse of materials wherever possible.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <RefreshCcw className="text-orange-400" size={30} />

              <h3 className="mt-7 text-xl font-bold text-white">
                Repurpose
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Finding new purposes for materials instead of
                unnecessary disposal.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:col-span-2">
              <Leaf className="text-orange-400" size={30} />

              <h3 className="mt-7 text-xl font-bold text-white">
                Circular Economy
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                Supporting a more sustainable cycle where resources
                remain useful for longer and unnecessary waste is
                reduced.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}