import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import Reviews from "@/components/sections/reviews";
import Location from "@/components/sections/location";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
