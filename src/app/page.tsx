import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolStack from "@/components/ToolStack";
import Services from "@/components/Services";
import Pipeline from "@/components/Pipeline";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToolStack />
        <Services />
        <Pipeline />
        <Reviews />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
