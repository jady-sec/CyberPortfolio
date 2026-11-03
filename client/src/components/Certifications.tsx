import { certificationsData } from "@/lib/certificationsData";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <ul className="reading">
        {certificationsData.map((certification) => (
          <li key={certification.name} className="row">
            <p className="text-lg font-semibold">{certification.name}</p>
            <p className="secondary">{certification.issuer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
