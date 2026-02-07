import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import CaseStudies from "@/components/CaseStudies";
import WhoItsFor from "@/components/WhoItsFor";
import WhyFourthLever from "@/components/WhyFourthLever";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="noise-overlay" />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <InteractiveDemo />
        <div className="section-divider" />
        <CaseStudies />
        <div className="section-divider" />
        <WhoItsFor />
        <div className="section-divider" />
        <WhyFourthLever />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
