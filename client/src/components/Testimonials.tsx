import { testimonialsData } from "@/lib/testimonialsData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="references" className="section">
      <h2 className="section-title">References</h2>
      <div className="space-y-12">
        {testimonialsData.map((reference) => (
          <figure key={reference.name} className="reading">
            <blockquote>"{reference.testimonial}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={reference.image} alt="" className="object-cover" />
                <AvatarFallback className="bg-[#041026] text-white">{getInitials(reference.name)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{reference.name}</p>
                <p className="secondary text-base">{reference.position}. {reference.relation}.</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
