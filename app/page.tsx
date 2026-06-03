import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Packs from "@/components/Packs";
import WhyElevia from "@/components/WhyElevia";
import Reviews from "@/components/Reviews";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Packs />
        <WhyElevia />
        <Reviews />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
