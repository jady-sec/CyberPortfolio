import Water from "@/components/Water";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <>
      <Water />
      <Navbar />
      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
