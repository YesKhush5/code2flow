import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Testimonials from "@/app/components/testimonials";
import Pricing from "@/app/components/pricing";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-36">
        <Navbar />
        <Hero />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
