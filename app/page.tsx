import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact, SiteFooter } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Expertise />
        <CaseStudies />
        <Projects />
        <Background />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
