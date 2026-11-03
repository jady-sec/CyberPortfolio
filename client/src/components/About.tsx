export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="reading space-y-5">
        <p>
          My job is to find out which alerts matter, and fast. As a Triage Security Engineer at Arctic Wolf, I run log searches, contain threats, and carry out deeper investigations and malware analysis.
          I was a Triage Security Analyst here from January to June 2026, focused on account management, deployments and sensor configuration, before becoming an engineer.
        </p>
        <p>
          Before that, I was a Cybersecurity Analyst at Nova Mutual Insurance, working on threat detection, incident response planning and regulatory compliance.
          My projects include an automated SOAR workflow built with LimaCharlie EDR and Tines to respond to credential-dumping attacks,
          and a T-Pot honeypot used for threat capture and OSINT analysis with SpiderFoot.
        </p>
      </div>
    </section>
  );
}
