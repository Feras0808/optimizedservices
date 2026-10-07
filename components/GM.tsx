export default function GM() {
  return (
    <section className="section-padding bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* ================= MESSAGE ================= */}
          <div className="order-2 lg:order-1">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              General Manager's Message
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Excellence in
              <br />
              every operation.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
             “At Optimized Holding, we are driven by a commitment not only to meet but to exceed the highest standards of excellence, reflecting the values of Qatar’s dynamic business landscape. 
             Embracing the spirit of Qatar’s National Vision 2030 for a diversified and innovative economy, we continuously push the boundaries of what is possible. 
             Through a culture of perseverance, collaboration, creativity, and cutting-edge innovation, 
             we aim to create lasting value for our stakeholders and contribute significantly to the growth of Qatar’s key industries.”
            </p>

            {/* ================= COMPANY INFO ================= */}
            <div
              className="
                mt-8
                inline-flex
                flex-col
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-4
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                backdrop-blur-sm
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Group General Manager
              </p>

              <span className="mt-1 text-sm font-semibold text-white">
                Optimized Holding
              </span>
            </div>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="order-1 lg:order-2">
            <div className="relative">

              {/* Orange glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-6
                  -left-6
                  h-32
                  w-32
                  rounded-full
                  bg-orange-500/10
                  blur-3xl
                "
              />

              {/* ================= IMAGE CARD ================= */}
              <div
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#111111]
                  shadow-2xl

                  /* Mobile */
                  aspect-[4/3]

                  /* Tablet */
                  sm:aspect-[4/3]

                  /* Desktop */
                  lg:aspect-[4/5]
                "
              >

                <img
                  src="/GM.png"
                  alt="Mr. Reda Salem"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-[center_18%]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />

                {/* ================= DARK GRADIENT ================= */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[55%]
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                  "
                />

                {/* ================= NAME ================= */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    z-10
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-orange-400
                      sm:text-xs
                    "
                  >
                    Group General Manager
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
                    Mr. Reda Salem
                  </h3>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}