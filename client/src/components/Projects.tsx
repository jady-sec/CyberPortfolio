const projects = [
  {
    name: "T-Pot Honeypot Project",
    date: "October 2025",
    href: "https://github.com/jady-sec/tpot-honeypot-project",
    description: "Deployed T-Pot CE on a Vultr VPS running Ubuntu to capture attacker activity, visualized the results in Kibana dashboards, and ran a SpiderFoot OSINT scan on a top attacker IP."
  },
  {
    name: "SOAR-EDR Project",
    date: "July 2025",
    href: "https://github.com/jady-sec/SOAR-EDR",
    description: "Built a SOAR workflow with LimaCharlie EDR and Tines to detect LaZagne credential-dumping activity. It enriches alerts through VirusTotal and posts them to Slack with buttons to quarantine the machine or ignore the alert."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.name} className="reading">
            <p className="data mb-2">{project.date}</p>
            <h3 className="text-2xl font-semibold">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="underline">{project.name}</a>
            </h3>
            <p className="mt-3">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
