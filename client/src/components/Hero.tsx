import { ArrowDown } from "lucide-react";
import { experienceData } from "@/lib/experienceData";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joseph-daniel-b6ab14217/" },
  { label: "GitHub", href: "https://github.com/jady-sec" },
  { label: "Email", href: "mailto:joshdan2345@gmail.com" },
];

export default function Hero() {
  const current = experienceData[0];

  return (
    <section id="surface" className="section min-h-[calc(100svh-3.25rem)] md:min-h-screen flex flex-col justify-center">
      <h1 className="text-[clamp(3rem,9vw,6rem)] leading-none font-bold tracking-[-0.02em] [text-wrap:balance]">
        Joseph Daniel Charles
      </h1>
      <p className="mt-6 text-[clamp(1.375rem,3vw,2rem)] leading-tight font-semibold">
        {current.title} at {current.organization}
      </p>
      <p className="reading mt-4 text-lg">I investigate alerts and help customers with security issues.</p>
      <p className="data mt-6">Ontario, Canada</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            {label}
          </a>
        ))}
        <a href="#about" className="inline-flex items-center gap-1.5 secondary no-underline hover:underline">
          Go deeper <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
