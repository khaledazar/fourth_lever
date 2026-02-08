import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhoWeServe from "@/components/WhoWeServe";
import Capabilities from "@/components/Capabilities";
import ServiceCarousel from "@/components/ServiceCarousel";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <div className="section-divider" />
        <WhoWeServe />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <ServiceCarousel />
        <div className="section-divider" />
        <CaseStudies />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
