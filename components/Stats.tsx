const stats = [
  {
    number: "2016",
    label: "Year Established",
  },
  {
    number: "4+",
    label: "Core Services",
  },
  {
    number: "100%",
    label: "Commitment to Safety",
  },
  {
    number: "24/7",
    label: "Operational Capability",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/10 px-6 first:border-none md:border-l"
            >
              <p className="optimized-text-gradient text-4xl font-bold sm:text-5xl">
                {stat.number}
              </p>

              <p className="mt-2 text-sm text-white/50">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}