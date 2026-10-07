import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="section-padding bg-[#f6f6f4]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Our Direction
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Driven by purpose.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-[2rem] bg-black p-9 sm:p-12">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
              <Target className="text-white" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-white/55">
              To provide dependable, efficient and responsible
              transportation and environmental services while
              continuously improving our operational standards and
              creating value for our clients and communities.
            </p>

          </div>

          <div className="rounded-[2rem] bg-white p-9 shadow-sm sm:p-12">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
              <Eye className="text-white" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-gray-500">
              To be a trusted leader in transportation and
              environmental services, recognized for operational
              excellence, sustainability and innovative solutions.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}