import {
  Truck,
  ShieldCheck,
  Gauge,
} from "lucide-react";

export default function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/fleet.png"
              alt="Optimized modern fleet"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Fleet
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Modern vehicles.
              <br />
              <span className="optimized-text-gradient">
                Smarter operations.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-500">
              Our contemporary fleet is maintained to support safe,
              dependable and efficient transportation operations
              across our service portfolio.
            </p>

            <div className="mt-9 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <Truck className="text-orange-500" size={23} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Contemporary Fleet
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Vehicles selected to support different operational
                    and transportation requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <ShieldCheck className="text-orange-500" size={23} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Safety Focused
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Safety and reliability remain central to our
                    transportation operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <Gauge className="text-orange-500" size={23} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Operational Efficiency
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Efficient fleet operations help us deliver
                    dependable services to our clients.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}