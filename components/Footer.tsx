import {
  ArrowUpRight,
  Leaf,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO + DESCRIPTION */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="Optimized Services and Transportation"
                className="h-32 w-auto max-w-[360px] object-contain sm:h-36"
              />
            </a>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/45">
              Optimized Services and Transportation provides reliable
              transportation and environmental services with a commitment
              to efficiency, sustainability and responsible operations.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-500">
              <Leaf size={17} />
              <span>Sustainability in Motion</span>
            </div>

          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">

              <a
                href="#about"
                className="transition-colors hover:text-orange-500"
              >
                About
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-orange-500"
              >
                Services
              </a>

              <a
                href="#sustainability"
                className="transition-colors hover:text-orange-500"
              >
                Sustainability
              </a>

              <a
                href="#fleet"
                className="transition-colors hover:text-orange-500"
              >
                Fleet
              </a>

              <a
                href="#leadership"
                className="transition-colors hover:text-orange-500"
              >
                Leadership
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              {/* LOCATION */}
              <p className="text-white/40">
                Doha, Qatar
              </p>

              {/* PHONE */}
              <a
                href="tel:+97477505255"
                className="group flex items-center gap-3 text-white/40 transition-colors hover:text-orange-500"
              >
                <Phone
                  size={16}
                  className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  +974 7750 5255
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:nasser.edrees@optimizedservices.com.qa"
                className="group flex items-center gap-3 break-all text-white/40 transition-colors hover:text-orange-500"
              >
                <Mail
                  size={16}
                  className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  nasser.edrees@optimizedservices.com.qa
                </span>
              </a>

              {/* CONTACT BUTTON */}
              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-orange-500"
              >
                Contact Us

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-7">

          <div className="flex flex-col justify-between gap-4 text-xs text-white/30 sm:flex-row">

            <p>
              © {new Date().getFullYear()} Optimized Services &
              Transportation. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}