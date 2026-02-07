import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import WhoItsFor from "@/components/WhoItsFor";
import WhyFourthLever from "@/components/WhyFourthLever";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <InteractiveDemo />
        <WhoItsFor />
        <WhyFourthLever />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
