export default function Chairman() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= CHAIRMAN CARD ================= */}
          <div className="relative">
            {/* Soft glow */}
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />

            {/* Image Card */}
            <div className="group relative h-[500px] w-full overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src="/Chairman.png"
                alt="Chairman's Message"
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
                  group-hover:scale-[1.02]
                "
              />

              {/* Bottom dark gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-gradient-to-t
                  from-black/75
                  via-black/30
                  to-transparent
                "
              />

              {/* ================= NAME OVER IMAGE ================= */}
              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  z-10
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-orange-400
                  "
                >
                  Chairman
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  H.E. Sheikh Mohamed Bin Faisal Al-Thani
                </h3>
              </div>
            </div>
          </div>

          {/* ================= MESSAGE ================= */}
          <div>

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-orange-500
              "
            >
              Chairman's Message
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                leading-tight
                text-[#171717]
                sm:text-5xl
              "
            >
              Building a more
              <br />
              responsible future.
            </h2>

            <div
              className="
                mt-8
                border-l-2
                border-orange-500
                pl-6
              "
            >
              <p
                className="
                  text-lg
                  leading-9
                  text-gray-600
                "
              >
               “Qatar’s unprecedented development during the last decade has motivated businessmen and entrepreneurs to pursue their business ambitions. 
               Driven by the National Vision 2030, the country has transformed into a field of investment opportunities in multiple sectors. 
               The Government has been committed to encouraging independence from hydrocarbon resources by seeking greater participation and partnership from the private sector to diversify and develop the country’s economy. 
               These factors, along with my passion for business, inspired by being involved in the family business alongside my father from a young age, 
               encouraged me to establish Optimized Holding—a company offering innovative products and services that cater to the evolving and increasingly sophisticated needs of the market.”
              </p>
            </div>

            {/* Small company label */}
<div className="mt-8 inline-flex flex-col rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white px-6 py-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
    Chairman
  </p>

  <span className="mt-1 text-sm font-semibold text-gray-900">
    Optimized Holding
  </span>
</div>

          </div>

        </div>
      </div>
    </section>
  );
}