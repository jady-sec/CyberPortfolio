import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience & Education" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("surface");
  const [back, setBack] = useState("0.0");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Read from scroll position so the gauge stays right after a menu jump past several entries
    const update = () => {
      let section = "surface";
      let years = "0.0";
      document.querySelectorAll<HTMLElement>("section[id], [data-back]").forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight / 2) return;
        if (element.dataset.back) years = element.dataset.back;
        else section = element.id;
      });
      setActive(section);
      setBack(years);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const links = (onNavigate?: () => void) => sections.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={onNavigate}
        aria-current={active === id ? "true" : undefined}
        className={`block py-1.5 no-underline hover:underline ${active === id ? "font-semibold text-white" : "secondary"}`}
      >
        {label}
      </a>
    </li>
  ));

  const activeLabel = sections.find(({ id }) => id === active)?.label;
  const inTimeline = active === "experience";

  return (
    <>
      <nav aria-label="Sections" className="hidden md:flex fixed inset-y-0 left-0 z-20 w-44 flex-col justify-between border-r border-white/30 p-6">
        <ul className="text-sm">{links()}</ul>
        {inTimeline && (
          <div>
            <p className="data !text-3xl !text-white">{back}</p>
            <p className="data">years back</p>
          </div>
        )}
      </nav>

      <nav aria-label="Sections" className="md:hidden fixed inset-x-0 top-0 z-20 bg-[#041026]/90 backdrop-blur">
        <div className="flex min-h-[3.25rem] items-center justify-between gap-4 px-5">
          <span className="min-w-0 truncate text-sm font-semibold">{activeLabel}</span>
          <div className="flex shrink-0 items-center gap-3">
            {inTimeline && <span className="data">{back} yrs back</span>}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="-mr-2 p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && <ul className="border-t border-white/30 px-5 py-3">{links(() => setMenuOpen(false))}</ul>}
      </nav>
    </>
  );
}
