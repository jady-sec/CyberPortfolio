import { skillsData } from "@/lib/skillsData";

export default function Skills() {
  const groups = [["Cybersecurity", skillsData.cybersecurity], ...Object.entries(skillsData.technicalStack)] as [string, string[]][];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {groups.map(([group, skills]) => (
          <div key={group}>
            <dt className="text-lg font-semibold">{group}</dt>
            <dd className="mt-1 secondary">{skills.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
