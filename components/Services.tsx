import {
  ArrowUpRight,
  BusFront,
  Droplets,
  Recycle,
  Trash2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Hazardous Waste Transport",
    description:
      "Safe and reliable transportation of non-hazardous waste using a modern fleet and efficient operational processes.",
    image: "/HazardousWaste.png",
    icon: Trash2,
  },
  {
    number: "02",
    title: "Recycling",
    description:
      "Responsible recycling solutions that encourage material recovery, reuse and repurposing.",
    image: "/Recycling.png",
    icon: Recycle,
  },
  {
    number: "03",
    title: "Sewage Services",
    description:
      "Professional sewage transportation and services delivered with reliability, safety and operational efficiency.",
    image: "/Sewage Services.png",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Shuttle Bus Services",
    description:
      "Dependable shuttle transportation solutions for companies, employees, events and operational requirements.",
    image: "/ShuttleServices.png",
    icon: BusFront,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              What We Do
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] text-[#171717] sm:text-5xl lg:text-6xl">
              Services designed for{" "}
              <span className="bg-gradient-to-r from-[#ff9d00] via-[#ff6a00] to-[#f04438] bg-clip-text text-transparent">
                real operations.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-500 lg:pb-1">
            From environmental services to passenger transportation, we provide
            practical solutions that help organizations operate efficiently
            and responsibly.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-14 grid gap-7 md:mt-16 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[1.75rem]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* ================= IMAGE ================= */}
                <div
                  className="
                    relative
                    aspect-[16/9]
                    w-full
                    overflow-hidden
                    bg-[#eeeeec]
                  "
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Subtle image overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* ================= NUMBER ================= */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-10
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-sm
                      font-bold
                      text-gray-900
                      shadow-lg
                    "
                  >
                    {service.number}
                  </div>

                  {/* ================= ICON ================= */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      z-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-gray-900
                      shadow-lg
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} strokeWidth={2} />
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-7
                    sm:p-8
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      leading-tight
                      text-[#171717]
                      sm:text-[26px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-[15px]
                      leading-7
                      text-gray-500
                      sm:text-base
                    "
                  >
                    {service.description}
                  </p>

                  {/* ================= FOOTER ================= */}
                  <div
                    className="
                      mt-auto
                      pt-7
                    "
                  >
                    <div
                      className="
                        mb-5
                        h-px
                        w-full
                        bg-gray-100
                      "
                    />

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-semibold
                          text-gray-900
                        "
                      >
                        Optimized Services
                      </span>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-100
                          text-gray-900
                          transition-all
                          duration-300
                          group-hover:bg-orange-500
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight
                          size={17}
                          className="
                            transition-transform
                            duration-300
                            group-hover:rotate-45
                          "
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}