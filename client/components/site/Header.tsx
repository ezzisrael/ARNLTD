import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/news", label: "News" },
  { to: "/qhse", label: "QHSE" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled ? "bg-black/95 backdrop-blur" : "bg-black",
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc51a6bd23f1c476caca0b78d5ca51be1%2F3a95d816962a43e6b2395077eb574236?format=webp&width=128"
            alt="Aron Nigeria Limited logo"
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
          />
          <div className="leading-tight">
            <p className="font-extrabold tracking-wide">ARON NIGERIA</p>
            <p className="text-xs text-white/70 -mt-0.5">Building since 1984 • Construction firm</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm flex-nowrap">
          {links.slice(0, -1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-white/90 hover:text-white relative py-1 text-center lg:text-left whitespace-nowrap",
                  "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  isActive && "after:w-full",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() =>
              window.dispatchEvent(new Event("chatbot:enableAndOpen"))
            }
            className={cn(
              "text-white/90 hover:text-white relative py-1 whitespace-nowrap",
              "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
            )}
          >
            ChatBot
          </button>
        </nav>

        <div className="hidden md:flex items-center ml-10 pl-6 border-l border-white/15">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-primary/90 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition",
          open ? "visible" : "invisible",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-4/5 max-w-sm bg-black text-white shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="p-5 flex items-center justify-between border-b border-white/10">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc51a6bd23f1c476caca0b78d5ca51be1%2F3a95d816962a43e6b2395077eb574236?format=webp&width=128"
                alt="Aron Nigeria Limited logo"
                className="h-8 w-8 object-contain"
                width={32}
                height={32}
              />
              <span className="font-extrabold">ARON NIGERIA LIMITED</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-md text-base hover:bg-white/5 transition text-center",
                    isActive && "bg-white/10",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                window.dispatchEvent(new Event("chatbot:enableAndOpen"));
                setOpen(false);
              }}
              className="px-3 py-3 rounded-md text-left text-base hover:bg-white/5 transition"
            >
              ChatBot
            </button>
          </nav>
        </aside>
      </div>
    </header>
  );
}
