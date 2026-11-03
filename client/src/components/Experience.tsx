import { experienceData, yearsBack } from "@/lib/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience & Education</h2>
      <div className="space-y-16 md:space-y-28">
        {experienceData.map((entry) => (
          <article key={entry.title} data-back={entry.start && yearsBack(entry.start)} className="reading">
            {entry.period && <p className="data mb-3">{entry.period}</p>}
            <h3 className="text-[clamp(1.625rem,4vw,2.25rem)] leading-tight font-semibold">{entry.title}</h3>
            <p className="mt-2 text-lg font-semibold">{entry.organization}</p>
            {entry.location && <p className="secondary">{entry.location}</p>}
            {entry.summary && <p className="mt-4">{entry.summary}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
