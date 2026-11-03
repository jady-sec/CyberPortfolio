import { ArrowUp } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joseph-daniel-b6ab14217/", external: true },
  { label: "joshdan2345@gmail.com", href: "mailto:joshdan2345@gmail.com" },
  { label: "GitHub", href: "https://github.com/jady-sec", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section pb-16">
      <h2 className="section-title">Contact</h2>
      <p className="reading mb-6">Interested in working together? Let's connect!</p>
      <ul className="space-y-2 text-[clamp(1.25rem,3vw,1.625rem)] font-semibold">
        {links.map(({ label, href, external }) => (
          <li key={label}>
            <a href={href} className="underline break-all" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="data mt-6">Ontario, Canada</p>

      <a href="#surface" className="mt-20 inline-flex items-center gap-2 font-semibold underline">
        <ArrowUp className="h-4 w-4" aria-hidden="true" /> Back to top
      </a>
    </section>
  );
}
