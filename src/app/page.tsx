import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import WorkSection from "@/components/sections/WorkSection";
import QuotesSection from "@/components/sections/QuotesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/footer/Footer";
import { capabilities } from "@/data/work";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee items={capabilities} />
        <WorkSection />
        <QuotesSection />
        <ProcessSection tone="raised" />
        <ValuesSection />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
