import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const items = [
    { to: "/", label: "Home" },
    { to: "/competitions", label: "Competitions" },
    { to: "/robots", label: "Robots" },
    { to: "/outreach", label: "Outreach" },
    { to: "/past-seasons", label: "Past Seasons" },
    { to: "/team", label: "Team" },
    // { to: "/donate", label: "Donate" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/60 border-b border-white/5 backdrop-blur">
      <div className="w-full px-4 md:px-8 flex h-16 items-center justify-between gap-6 text-white">
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium tracking-tight rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1">
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  className={({ isActive }) =>
                    `relative z-10 px-3 py-1 rounded-full transition ${
                      isActive
                        ? "text-red-400"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-sm transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform duration-200 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 bg-white transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-200 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <NavLink
            to="/contact"
            className="hidden lg:inline-flex rounded-full bg-red-600 text-white px-5 py-2 text-sm font-semibold shadow-lg shadow-red-600/40 hover:bg-red-500 transition-colors"
            aria-label="Join Robo Eclipse"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="container-std pb-4">
          <ul className="rounded-2xl border border-white/10 bg-black/80 shadow-lg shadow-black/30 p-4 space-y-3 text-sm font-medium text-white">
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-red-600/20 text-red-300"
                        : "hover:bg-white/5"
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="block rounded-lg bg-red-600 px-3 py-2 text-center font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500 transition-colors"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
